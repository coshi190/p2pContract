// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./KAPsupport.sol";

contract p2pContract006 {

    address projectAdmin;
    modifier onlyProjectAdmin() {
        require(msg.sender == projectAdmin, "NP"); // NP : Not Permission to call
        _;
    }
    address committee;
    modifier onlyCommittee() {
        require(msg.sender == committee, "NP");
        _;
    }
    
    mapping(uint256=>address) programCall; 

    mapping(uint256=>KAP20) tokens;
    mapping(uint256=>KAP721) nfts;

    IKYCBitkubChain kyc;
    bool isActivatedOnlyKycAddress;
    uint256 acceptedKycLevel;
    
    struct Deal {
        uint256 callIndex;
        address sender;
        address receiver;
        uint256 offerTokenIndex;
        uint256 offerTokenAmount;
        uint256 offerNftIndex;
        uint256 offerNftId;
        uint256 getTokenIndex;
        uint256 getTokenAmount;
        uint256 getNftIndex;
        uint256 getNftId;
        uint256 offerTime;
        bool status;
    }
    mapping(uint256=>Deal) deals;
    uint256 dealCount;
    mapping(address=>uint256[]) dealsbySender;
    mapping(address=>uint256[]) dealsbyReceiver;
    uint256[] activeDeals;
    uint256[] completeDeals;

    event OfferDeal(address indexed _sender, address indexed _receiver, uint256 indexed _callIndex, uint256 _dealIndex);
    event RejectDeal(address indexed _sender, address indexed _receiver, uint256 indexed _callIndex, uint256 _dealIndex);
    event AdminUnlock(address indexed _sender, address indexed _receiver, uint256 indexed _callIndex, uint256 _dealIndex);
    event ConfirmDeal(address indexed _sender, address indexed _receiver, uint256 indexed _callIndex, uint256 _dealIndex);

    constructor() {
        projectAdmin = msg.sender;
    }

    // for variety of platform fee program
    function setProjectAdmin(address _addr) external onlyProjectAdmin {
        projectAdmin = _addr;
    }
    function getProjectAdmin() external view returns(address) {
        return projectAdmin;
    }

    function setCommittee(address _committee) external onlyCommittee {
        committee = _committee;
    }
    function getCommittee() external view returns(address) {
        return committee;
    }

    function setProgramCall(uint256 _index, address _addr) external onlyProjectAdmin {
        programCall[_index] = _addr;
    }
    function getProgramCall(uint256 _index) external view returns(address) {
        return programCall[_index];
    }

    function setToken(uint256 _index, address _addr) external onlyProjectAdmin {
        tokens[_index] = KAP20(_addr);
    } 
    function getToken(uint256 _index) external view returns(KAP20) {
        return tokens[_index];
    }
    function setNft(uint256 _index, address _addr) external onlyProjectAdmin {
        nfts[_index] = KAP721(_addr);
    } 
    function getNft(uint256 _index) external view returns(KAP721) {
        return nfts[_index];
    }
    
    // setKYC function & activateOnlyKycAddress function (for bitkub chain policy)
    function setKYC(address _kyc) external onlyProjectAdmin {
        kyc = IKYCBitkubChain(_kyc);
    }
    function getKYC() external view returns(IKYCBitkubChain) {
        return kyc;
    }    

    function activateOnlyKycAddress(bool _isActivatedOnlyKycAddress, uint256 _acceptedKycLevel) external onlyProjectAdmin {
        isActivatedOnlyKycAddress = _isActivatedOnlyKycAddress;
        acceptedKycLevel = _acceptedKycLevel;
    }
    function getIsActivatedOnlyKycAddress() external view returns(bool) {
        return isActivatedOnlyKycAddress;
    }
    function getAcceptedKycLevel() external view returns(uint256) {
        return acceptedKycLevel;
    }

    function offerDeal(
        uint256 _callIndex,
        address _sender,
        address _receiver,
        uint256 _offerTokenIndex,
        uint256 _offerTokenAmount,
        uint256 _offerNftIndex,
        uint256 _offerNftId,
        uint256 _getTokenIndex,
        uint256 _getTokenAmount,
        uint256 _getNftIndex,
        uint256 _getNftId
    ) external {
        require(msg.sender == programCall[_callIndex], "NP");

        if(isActivatedOnlyKycAddress) {
            require(
                kyc.kycsLevel(_sender) >= acceptedKycLevel && kyc.kycsLevel(_receiver) >= acceptedKycLevel, "KYC"
            ); // for KYC address only
        }
        
        dealCount++;
        deals[dealCount].callIndex = _callIndex;
        deals[dealCount].sender = _sender;
        deals[dealCount].receiver = _receiver;

        if (_offerTokenIndex != 0) {
            deals[dealCount].offerTokenIndex = _offerTokenIndex;
            deals[dealCount].offerTokenAmount = _offerTokenAmount;

            tokens[_offerTokenIndex].transferFrom(_sender, address(this), _offerTokenAmount);
        }
        if (_offerNftIndex != 0) {
            deals[dealCount].offerNftIndex = _offerNftIndex;
            deals[dealCount].offerNftId = _offerNftId;

            nfts[_offerNftIndex].transferFrom(_sender, address(this), _offerNftId);
        }

        if (_getTokenIndex != 0) {
            deals[dealCount].getTokenIndex = _getTokenIndex;
            deals[dealCount].getTokenAmount = _getTokenAmount;
        }
        if (_getNftIndex != 0) {
            deals[dealCount].getNftIndex = _getNftIndex;
            deals[dealCount].getNftId = _getNftId;
        }

        deals[dealCount].offerTime = block.timestamp;

        dealsbySender[_sender].push(dealCount);
        dealsbyReceiver[_receiver].push(dealCount);
        activeDeals.push(dealCount);

        emit OfferDeal(deals[dealCount].sender, deals[dealCount].receiver, deals[dealCount].callIndex, dealCount);
    }

    function rejectDeal(uint256 _index, address _sendFrom) external {
        require(msg.sender == programCall[deals[_index].callIndex], "NP");
        require(deals[_index].status == false, "DC"); // DC : Deal Complete
        require(
            deals[_index].sender == _sendFrom || (deals[_index].receiver == _sendFrom && block.timestamp > deals[_index].offerTime + 1 weeks), "NP"
        );

        delete deals[_index].status;

        if (deals[_index].offerTokenIndex != 0) {
            tokens[deals[_index].offerTokenIndex].transfer(deals[_index].sender, deals[_index].offerTokenAmount);
        }
        if (deals[_index].offerNftIndex != 0) {
            nfts[deals[_index].offerNftIndex].transferFrom(address(this), deals[_index].sender, deals[_index].offerNftId);
        }

        emit RejectDeal(deals[_index].sender, deals[_index].receiver, deals[_index].callIndex, _index);

        for (uint256 i; i <= activeDeals.length - 1; i++) {
            if (activeDeals[i] == _index) {
                delete activeDeals[i];
            }
        }

        delete deals[_index];
    }

    // adminTransfer function (for bitkub chain policy) : BKC admin (committee) can transfer/unlock token/nft out of p2pContract
    function adminUnlock(uint256 _index, address _to) external onlyCommittee {
        require(deals[_index].status == false, "DC");

        delete deals[_index].status;

        if (deals[_index].offerTokenIndex != 0) {
            tokens[deals[_index].offerTokenIndex].transfer(_to, deals[_index].offerTokenAmount);
        }
        if (deals[_index].offerNftIndex != 0) {
            nfts[deals[_index].offerNftIndex].transferFrom(address(this), _to, deals[_index].offerNftId);
        }

        emit AdminUnlock(deals[_index].sender, deals[_index].receiver, deals[_index].callIndex, _index);

        for (uint256 i; i <= activeDeals.length - 1; i++) {
            if (activeDeals[i] == _index) {
                delete activeDeals[i];
            }
        }

        delete deals[_index];
    }

    function confirmDeal(uint256 _index, address _sendFrom) external {
        require(msg.sender == programCall[deals[_index].callIndex], "NP");
        require(deals[_index].receiver == _sendFrom, "NP");
        require(deals[_index].status == false, "DC");
        
        deals[_index].status = true;
        
        if (deals[_index].getTokenIndex != 0) {
            tokens[deals[_index].getTokenIndex].transferFrom(deals[_index].receiver, deals[_index].sender, deals[_index].getTokenAmount);
        }
        if (deals[_index].getNftIndex != 0) {
            nfts[deals[_index].getNftIndex].transferFrom(address(this), deals[_index].receiver, deals[_index].getNftId);
        }

        if (deals[_index].offerTokenIndex != 0) {
            tokens[deals[_index].offerTokenIndex].transfer(deals[_index].receiver, deals[_index].offerTokenAmount);

        } else if (deals[_index].offerNftIndex != 0) {
            nfts[deals[_index].offerNftIndex].transferFrom(address(this), deals[_index].receiver, deals[_index].offerNftId);
        }

        for (uint256 i; i <= activeDeals.length - 1; i++) {
            if (activeDeals[i] == _index) {
                delete activeDeals[i];
            }
        }
        completeDeals.push(dealCount);

        emit ConfirmDeal(deals[dealCount].sender, deals[dealCount].receiver, deals[dealCount].callIndex, _index);
    }

    function getDeal(uint256 _index) external view returns(Deal memory) {
        return deals[_index];
    }
    function getDealCount() external view returns(uint256) {
        return dealCount;
    }
    function getDealsbySender(address _addr) external view returns(uint256[] memory) {
        return dealsbySender[_addr];
    }
    function getDealsbyReceiver(address _addr) external view returns(uint256[] memory) {
        return dealsbyReceiver[_addr];
    }
    function getActiveDeals() external view returns(uint256[] memory) {
        return activeDeals;
    }
    function getCompleteDeals() external view returns(uint256[] memory) {
        return completeDeals;
    }
   
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./KAPsupport.sol";

contract p2pContract003 {

    address projectAdmin;
    modifier onlyProjectAdmin() {
        require(msg.sender == projectAdmin, "NP"); // NP : Not Permission to call
        _;
    }
    mapping(uint256=>address) programCall; // for variety of platform fee collection

    mapping(uint256=>KAP20) public tokens;
    mapping(uint256=>KAP721) public nfts;
    uint256 tokenCount;
    uint256 nftCount;

    // for bitkub chain policy : kyc address
    IKYCBitkubChain public kyc;
    uint256 acceptedKycLevel;
    bool isActivatedOnlyKycAddress;
    
    event theDeal(
        uint256 indexed _dealIndex,
        address indexed _sender,
        address indexed _receiver,
        uint256 _offerIndex,
        uint256 _offerAmount,
        uint256 _nftIndex,
        uint256 _nftId,
        uint256 _getIndex,
        uint256 _getAmount,
        uint256 _offerTime,
        uint256 _completeTime,
        uint256 _callIndex,
        bool _status
        );
    struct Deal {
        uint256 callIndex;
        address sender;
        address receiver;
        uint256 offerIndex;
        uint256 offerAmount;
        uint256 nftIndex;
        uint256 nftId;
        uint256 getIndex;
        uint256 getAmount;
        uint256 offerTime;
        bool status;
    }
    mapping(uint256=>Deal) deals;
    uint256 dealCount;

    constructor() {
        projectAdmin = msg.sender;
    }

    function setProjectAdmin(address _addr) external onlyProjectAdmin {
        projectAdmin = _addr;
    }
    function getProjectAdmin() external view returns(address) {
        return projectAdmin;
    }

    function setProgramCall(
        uint256 _index,
        address _addr
        ) external onlyProjectAdmin {
        programCall[_index] = _addr;
    }
    function getProgramCall(uint256 _index) external view returns(address) {
        return programCall[_index];
    }

    function addToken(address _addr) external onlyProjectAdmin {
        tokenCount++;
        tokens[tokenCount] = KAP20(_addr);
    } 
    function getToken(uint256 _index) external view returns(KAP20) {
        return tokens[_index];
    }
    function getTokenCount() external view returns(uint256) {
        return tokenCount;
    }

    function addNft(address _addr) external onlyProjectAdmin {
        nftCount++;
        nfts[nftCount] = KAP721(_addr);
    } 
    function getNft(uint256 _index) external view returns(KAP721) {
        return nfts[_index];
    }
    function getNftCount() external view returns(uint256) {
        return nftCount;
    }

    function setKYC(address _kyc) external onlyProjectAdmin {
        kyc = IKYCBitkubChain(_kyc);
    }
    function activateOnlyKycAddress(uint256 _acceptedKycLevel) external onlyProjectAdmin {
        acceptedKycLevel = _acceptedKycLevel;
        isActivatedOnlyKycAddress = true;
    }
    function getKYC() external view returns(IKYCBitkubChain) {
        return kyc;
    }
    function getAcceptedKycLevel() external view returns(uint256) {
        return acceptedKycLevel;
    }
    function getIsActivatedOnlyKycAddress() external view returns(bool) {
        return isActivatedOnlyKycAddress;
    }

    function offerDeal(
        uint256 _callIndex,
        address _sender,
        address _receiver,
        uint256 _offerIndex,
        uint256 _offerAmount,
        uint256 _nftIndex, 
        uint256 _nftId,
        uint256 _getIndex,
        uint256 _getAmount
    ) external {
        require(msg.sender == programCall[_callIndex], "NP"); // NP : Not Permission to call

        if(isActivatedOnlyKycAddress) {
            require(kyc.kycsLevel(_sender) >= acceptedKycLevel && kyc.kycsLevel(_receiver) >= acceptedKycLevel, "KYC"); // for KYC address only
        }

        if(_nftIndex == 0) {
            require(_offerAmount <= tokens[_offerIndex].balanceOf(_sender), "IO"); // OT : Insufficient Offer token

        } else if(_nftIndex != 0) {
            require(nfts[_nftIndex].ownerOf(_nftId) == _sender, "NO"); // NFT : your are Not Owner of this nft id
        }

        dealCount++; // save deal data to storage
        deals[dealCount].callIndex = _callIndex;
        deals[dealCount].sender = _sender;
        deals[dealCount].receiver = _receiver;
        deals[dealCount].offerIndex = _offerIndex;
        deals[dealCount].offerAmount = _offerAmount;
        deals[dealCount].nftIndex = _nftIndex;
        deals[dealCount].nftId = _nftId;
        deals[dealCount].getIndex = _getIndex;
        deals[dealCount].getAmount = _getAmount;
        deals[dealCount].offerTime = block.timestamp;

        if(_nftIndex == 0) {
            tokens[_offerIndex].transferFrom(_sender, address(this), _offerAmount);

        } else if(_nftIndex != 0) {
            nfts[_nftIndex].transferFrom(_sender, address(this), _nftId);
        }

        emit theDeal(dealCount, deals[dealCount].sender, deals[dealCount].receiver, deals[dealCount].offerIndex, deals[dealCount].offerAmount, deals[dealCount].nftIndex, deals[dealCount].nftId, deals[dealCount].getIndex, deals[dealCount].getAmount, deals[dealCount].offerTime, 0, deals[dealCount].callIndex, false);
    }

    function rejectDeal(
        uint256 _index,
        address _sendFrom
        ) external {
        require(msg.sender == programCall[deals[_index].callIndex], "NP"); // NP : Not Permission to call
        require(deals[_index].status == false, "NA"); // DR : deal is Not Active
        require(deals[_index].sender == _sendFrom || (deals[_index].receiver == _sendFrom && block.timestamp >= deals[_index].offerTime + 1 weeks), "NP"); // NP : Not Permission to call

        address sender = deals[_index].sender; // copy var to safely send back lock token/nft

        if (deals[_index].nftIndex == 0) {
            uint256 offerIndex = deals[_index].offerIndex;
            uint256 offerAmount = deals[_index].offerAmount;
            delete deals[_index];
            
            tokens[offerIndex].transfer(sender, offerAmount);

        } else if (deals[_index].nftIndex != 0) {
            uint256 nftIndex = deals[_index].nftIndex;
            uint256 nftId = deals[_index].nftId;
            delete deals[_index];

            nfts[nftIndex].transferFrom(address(this), sender, nftId);
        }

        emit theDeal(_index, _sendFrom, sender, 0, 0, 0, 0, 0, 0, 0, block.timestamp, 0, false);
    }

    function confirmDeal(
        uint256 _index,
        address _sendFrom
        ) external {
        require(msg.sender == programCall[deals[_index].callIndex], "NP"); // NP : Not Permission to call
        require(deals[_index].receiver == _sendFrom, "NP"); // NP : Not Permission to call
        require(deals[_index].status == false, "NA"); // DR : deal is Not Active
        require(deals[_index].getAmount <= tokens[deals[_index].getIndex].balanceOf(deals[_index].receiver), "IG"); // OT : Insufficient Get token
        
        deals[_index].status == true; // finalize deal
        
        tokens[deals[_index].getIndex].transferFrom(deals[_index].receiver, deals[_index].sender, deals[_index].getAmount);

        if(deals[_index].nftIndex == 0) {
            tokens[deals[_index].offerIndex].transfer(deals[_index].receiver, deals[_index].offerAmount);

        } else if(deals[_index].nftIndex != 0) {
            nfts[deals[_index].nftIndex].transferFrom(address(this), deals[_index].receiver, deals[_index].nftId);
        }

        emit theDeal(_index, deals[_index].sender, deals[_index].receiver, deals[_index].offerIndex, deals[_index].offerAmount, deals[_index].nftIndex, deals[_index].nftId, deals[_index].getIndex, deals[_index].getAmount, deals[_index].offerTime, block.timestamp, deals[dealCount].callIndex, true);
    }

    // for bitkub chain policy : bkc admin can transfer/unlock token/nft out of p2pContract
    function bkcAdminUnlock(
        address _to, 
        uint256 _dealIndex
        ) external {
        require(deals[_dealIndex].status == false, "NA"); // DR : deal is Not Active

        if (deals[_dealIndex].nftIndex == 0) {
            tokens[deals[_dealIndex].offerIndex].adminTransfer(address(this), _to, deals[_dealIndex].offerAmount);

        } else if (deals[_dealIndex].nftIndex != 0) {
            nfts[deals[_dealIndex].nftIndex].adminTransfer(address(this), _to, deals[_dealIndex].nftId);
        }

        delete deals[_dealIndex];

        emit theDeal(_dealIndex, msg.sender, _to, 0, 0, 0, 0, 0, 0, 0, block.timestamp, 0, false);
    }

    function getDeal(uint256 _dealIndex) external view returns(Deal memory) {
        return deals[_dealIndex];
    }
    function getDealCount() external view returns(uint256) {
        return dealCount;
    }
   
}

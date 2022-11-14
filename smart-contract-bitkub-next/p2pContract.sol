// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;

import "./interfaceKAP.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract p2pContract is ReentrancyGuard {

    address public projectAdmin;
    modifier onlyProjectAdmin() {
        require(msg.sender == projectAdmin, "NP"); // NP : Not Permission to call
        _;
    }
    
    address public committee;
    modifier onlyCommittee() {
        require(msg.sender == committee, "NP");
        _;
    }
    
    address public superAdmin;
    
    mapping(uint256=>address) public programCall;

    mapping(uint256=>IKAP20) public tokens;
    mapping(uint256=>IKAP721) public nfts;
    
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
    mapping(uint256=>Deal) private deals;
    uint256 public dealCount;

    event ProjectAdminChange(address indexed oldAdmin, address indexed newAdmin);
    event CommitteeChange(address indexed oldAdmin, address indexed newAdmin);
    event SuperAdminChange(address indexed oldAdmin, address indexed newAdmin);
    event SetProgramCall(uint256 indexed callIndex, address indexed programCallAddr);
    event SetToken(uint256 indexed index, address indexed tokenAddr);
    event SetNft(uint256 indexed index, address indexed nftAddr);
    event OfferDeal(address indexed sender, address indexed receiver, uint256 indexed callIndex, uint256 dealIndex);
    event RejectDeal(address indexed rejectBy, address indexed sender, address receiver, uint256 indexed callIndex, uint256 dealIndex);
    event ConfirmDeal(address indexed sender, address indexed receiver, uint256 indexed callIndex, uint256 dealIndex);

    constructor(address _committee, address _superAdmin) {
        projectAdmin = msg.sender;
        committee = _committee;
        superAdmin = _superAdmin;
    }

    function setProjectAdmin(address _addr) external onlyProjectAdmin {
        require(_addr != projectAdmin, "OA"); // OA : can not set to Old Admin
        emit ProjectAdminChange(projectAdmin, _addr);
        projectAdmin = _addr;
    }
    function setCommittee(address _addr) external onlyCommittee {
        require(_addr != committee, "OA"); // OA : can not set to Old Admin
        emit CommitteeChange(committee, _addr);
        committee = _addr;
    }
    function setSuperAdmin(address _addr) external onlyProjectAdmin {
        require(_addr != superAdmin, "OA"); // OA : can not set to Old Admin
        emit SuperAdminChange(superAdmin, _addr);
        superAdmin = _addr;
    }
    
    // for variety of platform fee collecting policy
    function setProgramCall(uint256 _index, address _addr) external onlyProjectAdmin {
        programCall[_index] = _addr;
        emit SetProgramCall(_index, _addr);
    }

    function setToken(uint256 _index, address _addr) external onlyProjectAdmin {
        tokens[_index] = IKAP20(_addr);
        emit SetToken(_index, _addr);
    }
    function setNft(uint256 _index, address _addr) external onlyProjectAdmin {
        nfts[_index] = IKAP721(_addr);
        emit SetNft(_index, _addr);
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

        emit OfferDeal(deals[dealCount].sender, deals[dealCount].receiver, deals[dealCount].callIndex, dealCount);
    }

    function rejectDeal(uint256 _index, address _sendFrom) external {
        require(msg.sender == programCall[deals[_index].callIndex], "NP");
        require(
            deals[_index].sender == _sendFrom || (deals[_index].receiver == _sendFrom && block.timestamp > deals[_index].offerTime + 1 weeks), "NP"
        );
        _rejectdeal(_index, deals[_index].sender);
    }

    // adminTransfer function (for bitkub chain policy) : BKC admin (committee) can transfer/unlock token/nft out of p2pContract
    function adminUnlock(uint256 _index, address _to) external nonReentrant onlyCommittee {
        _rejectdeal(_index, _to);
    }

    function _rejectdeal(uint256 _index, address _to) private {
        require(deals[_index].status == false, "DC"); // DC : Deal Complete

        if (deals[_index].offerTokenIndex != 0) {
            tokens[deals[_index].offerTokenIndex].transfer(_to, deals[_index].offerTokenAmount);
        }
        if (deals[_index].offerNftIndex != 0) {
            nfts[deals[_index].offerNftIndex].transferFrom(address(this), _to, deals[_index].offerNftId);
        }

        emit RejectDeal(msg.sender, deals[_index].sender, deals[_index].receiver, deals[_index].callIndex, _index);

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
            nfts[deals[_index].getNftIndex].transferFrom(address(this), deals[_index].sender, deals[_index].getNftId);
        }

        if (deals[_index].offerTokenIndex != 0) {
            tokens[deals[_index].offerTokenIndex].transfer(deals[_index].receiver, deals[_index].offerTokenAmount);
        }
        if (deals[_index].offerNftIndex != 0) {
            nfts[deals[_index].offerNftIndex].transferFrom(address(this), deals[_index].receiver, deals[_index].offerNftId);
        }

        emit ConfirmDeal(deals[_index].sender, deals[_index].receiver, deals[_index].callIndex, _index);
    }

    function getDeal(uint256 _index) external view returns(Deal memory) {
        return deals[_index];
    }
   
}

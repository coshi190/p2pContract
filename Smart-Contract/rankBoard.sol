// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./p2pContract.sol";

contract rankBoard {
    // this contract have nothing to do with main p2pContract contract's stage
    p2pContract public mainContract;

    uint256[] public mainSubscriptionPrice;

    mapping(address=>uint256) public mainSubscriptionList;
    mapping(uint256=>address[]) public partnerSubscriptionList;

    struct NftProfile {
        uint256 nftIndex;
        uint256 nftId;
    }    
    mapping(address=>NftProfile) public userNftProfile;

    modifier onlyProjectAdmin() {
        require(msg.sender == mainContract.projectAdmin(), "NP"); // NP : Not Permission to call
        _;
    }

    event MainSubscriptionPriceChange(uint256 indexed tokenIndex, uint256 indexed oldPrice, uint256 indexed newPrice);
    event MainSubscriptionCostWithdraw(uint256 indexed tokenIndex, address indexed to, uint256 amount);
    event Subscribe(address indexed subscriptionAddr, uint256 indexed subscriptionTime);
    event PartnerAdminChange(uint256 indexed partnerIndex, address indexed oldAdmin, address indexed newAdmin);
    event PartnerSubscriptionListUpdate(uint256 indexed partnerIndex, uint256 indexed subscriptionIndex, address indexed subscriptionAddr);
    event NftProfileChange(address indexed userAddr, uint256 indexed nftIndex, uint256 indexed nftId);

    constructor(address _p2pContract) {
        mainContract = p2pContract(_p2pContract);
        mainSubscriptionPrice[1] = 10**17;
    }

    function setMainSubscriptionPrice(uint256 _tokenIndex, uint256 _price) external onlyProjectAdmin {
        emit MainSubscriptionPriceChange(_tokenIndex, mainSubscriptionPrice[_tokenIndex], _price);
        mainSubscriptionPrice[_tokenIndex] = _price;
    }

    function withdrawMainSubscriptionCost(
        uint256 _tokenIndex,
        uint256 _amount,
        address _to
    ) external onlyProjectAdmin {
        (mainContract.tokens(_tokenIndex)).transfer(_to, _amount);
        emit MainSubscriptionCostWithdraw(_tokenIndex, _to, _amount);
    }

    function subscribe(uint256 _subscriptionCostIndex) external {
        require(block.timestamp > mainSubscriptionList[msg.sender] + 4 weeks, "DUP"); // DUP : DUPlicate address

        (mainContract.tokens(_subscriptionCostIndex)).transferFrom(msg.sender, address(this), mainSubscriptionPrice[_subscriptionCostIndex]);

        mainSubscriptionList[msg.sender] = block.timestamp;

        emit Subscribe(msg.sender, block.timestamp);
    }
    function getExactMainSubscriptionStatus(address _addr) external view returns(bool)  {
        if (block.timestamp <= mainSubscriptionList[_addr] + 4 weeks) {
            return true;
        } else {
            return false;
        }
    }

    function setPartnerAdmin(uint256 _partnerIndex, address _addr) external onlyProjectAdmin {
        require(_addr != partnerSubscriptionList[_partnerIndex][0], "OA"); // OA : can not set to Old Admin
        emit PartnerAdminChange(_partnerIndex, partnerSubscriptionList[_partnerIndex][0], _addr);
        partnerSubscriptionList[_partnerIndex][0] = _addr;
    }
    function setPartnerSubscriptionList(
        uint256 _partnerIndex,
        uint256 _subscriptionIndex,
        address _subscriptionAddr
        ) external {
        require(msg.sender == partnerSubscriptionList[_partnerIndex][0], "NP");
        require(_subscriptionIndex != 0, "NA"); // Not permission to change partnerAdmin

        partnerSubscriptionList[_partnerIndex][_subscriptionIndex] = _subscriptionAddr;

        emit PartnerSubscriptionListUpdate(_partnerIndex, _subscriptionIndex, _subscriptionAddr);
    }

    function setNftProfile(uint256 _nftIndex, uint256 _nftId) external {
        if (_nftIndex != 0) {
            require(msg.sender == (mainContract.nfts(_nftIndex)).ownerOf(_nftId), "NP");
            userNftProfile[msg.sender].nftIndex = _nftIndex;
            userNftProfile[msg.sender].nftId = _nftId;
        } else {
            delete userNftProfile[msg.sender];
        }
        emit NftProfileChange(msg.sender, _nftIndex, _nftId);
    }

}

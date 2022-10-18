// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./p2pContract.sol";

contract rankBoard003 {
    // this contract have nothing to do with main p2pContract contract's stage
    p2pContract007 internal p2pContract;

    uint256 internal mainSubscriptionPrice;

    mapping(address=>uint256) internal mainSubscriptionTime;
    address[] internal mainSubscriptionList;

    mapping(uint256=>address[]) internal partnerSubscriptionList;

    struct NftProfile {
        uint256 nftIndex;
        uint256 nftId;
    }    
    mapping(address=>NftProfile) internal userNftProfile;

    modifier onlyProjectAdmin() {
        require(msg.sender == p2pContract.getProjectAdmin(), "NP"); // NP : Not Permission to call
        _;
    }

    event MainSubscriptionPriceChange(uint256 indexed oldPrice, uint256 indexed newPrice);
    event MainSubscriptionCostWithdraw(uint256 indexed tokenIndex, address indexed to, uint256 amount);
    event MainSubscriptionListUpdate(address[] indexed oldList, address[] indexed newList);
    event Subscribe(address indexed subscriptionAddr, uint256 indexed subscriptionTime);
    event PartnerAdminChange(uint256 indexed partnerIndex, address indexed newAdmin);
    event PartnerSubscriptionListUpdate(uint256 indexed partnerIndex, uint256 indexed subscriptionIndex, address indexed subscriptionAddr);
    event NftProfileChange(address indexed userAddr, uint256 indexed nftIndex, uint256 indexed nftId);

    constructor(address _p2pContract) {
        p2pContract = p2pContract007(_p2pContract);
        mainSubscriptionPrice = 100000000000000000;
    }

    function setMainSubscriptionPrice(uint256 _price) external onlyProjectAdmin {
        emit MainSubscriptionPriceChange(mainSubscriptionPrice, _price);
        mainSubscriptionPrice = _price;
    }
    function getMainSubscriptionPrice() external view returns(uint256) {
        return mainSubscriptionPrice;
    }

    function withdrawMainSubscriptionCost(
        uint256 _tokenIndex,
        uint256 _amount,
        address _to
    ) external onlyProjectAdmin {
        (p2pContract.getToken(_tokenIndex)).transfer(_to, _amount);
        emit MainSubscriptionCostWithdraw(_tokenIndex, _to, _amount);
    }

    function updateMainSubscriptionList() external onlyProjectAdmin {
        address[] memory oldMainSubscriptionList = mainSubscriptionList;

        delete mainSubscriptionList;
        for (uint256 i = 0; i <= oldMainSubscriptionList.length - 1; i++) {
            if (block.timestamp <= mainSubscriptionTime[oldMainSubscriptionList[i]] + 4 weeks) {
                mainSubscriptionList.push(oldMainSubscriptionList[i]);
            }
        }

        emit MainSubscriptionListUpdate(oldMainSubscriptionList, mainSubscriptionList);
    }

    function subscribe(uint256 _subscriptionCostIndex) external {
        require(block.timestamp > mainSubscriptionTime[msg.sender] + 4 weeks, "DUP"); // DUP : DUPlicate address

        (p2pContract.getToken(_subscriptionCostIndex)).transferFrom(msg.sender, address(this), mainSubscriptionPrice);

        mainSubscriptionTime[msg.sender] = block.timestamp;

        mainSubscriptionList.push(msg.sender);

        emit Subscribe(msg.sender, block.timestamp);
    }
    function getMainSubscriptionTime(address _addr) external view returns(uint256)  {
        return mainSubscriptionTime[_addr];
    }
    function getExactMainSubscriptionStatus(address _addr) external view returns(bool)  {
        if (block.timestamp <= mainSubscriptionTime[_addr] + 4 weeks) {
            return true;
        } else {
            return false;
        }
    }
    function getMainSubscriptionList() external view returns(address[] memory)  {
        return mainSubscriptionList;
    }

    function setPartnerAdmin(uint256 _partnerIndex, address _addr) external onlyProjectAdmin {
        partnerSubscriptionList[_partnerIndex][0] = _addr;
        emit PartnerAdminChange(_partnerIndex, _addr);
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
    function getPartnerSubscriptionList(uint256 _partnerIndex) external view returns(address[] memory) {
        return partnerSubscriptionList[_partnerIndex];
    }

    function setNftProfile(uint256 _nftIndex, uint256 _nftId) external {
        if (_nftIndex != 0) {
            require(msg.sender == (p2pContract.getNft(_nftIndex)).ownerOf(_nftId), "NP");
            userNftProfile[msg.sender].nftIndex = _nftIndex;
            userNftProfile[msg.sender].nftId = _nftId;
        } else {
            delete userNftProfile[msg.sender];
        }
        emit NftProfileChange(msg.sender, _nftIndex, _nftId);
    }
    function getNftProfile(address _addr) external view returns(NftProfile memory) {
        return userNftProfile[_addr];
    }

}

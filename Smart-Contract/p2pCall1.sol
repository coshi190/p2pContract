// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./p2pContract.sol";

contract p2pCall108 {
    p2pContract004 p2pContract;
    address projectAdmin;
    modifier onlyProjectAdmin() {
        require(msg.sender == projectAdmin, "NP"); // NP : Not Permission to call
        _;
    }

    uint256 feeRate;

    mapping(uint256=>bool) isKAPitem;

    struct FeeLock {
        uint256 offerIndex;
        uint256 getIndex;
        uint256 valueLock;
        bool isFeeForBoth;
    }
    mapping(uint256=>FeeLock) feeLock;

    constructor(
        address _scAddr,
        uint256 _feeRate
        ) {
        p2pContract = p2pContract004(_scAddr);
        projectAdmin = p2pContract.getProjectAdmin();
        feeRate = _feeRate;
    }
    
    function setFeeRate(uint256 _feeRate) external onlyProjectAdmin {
        feeRate = _feeRate;
    }
    function getFeeRate() external view returns(uint256) {
        return feeRate;
    }

    function getProjectAdmin() external view returns(address) {
        return projectAdmin;
    }

    function withdrawFee(
        uint256 _tokenIndex,
        uint256 _amount,
        address _to
        ) external onlyProjectAdmin {

        (p2pContract.getToken(_tokenIndex)).transfer(_to, _amount);
    }

    function setIsKAPitem(
        uint256 _tokenIndex,
        bool _isKAPitem
        ) external onlyProjectAdmin {
        isKAPitem[_tokenIndex] = _isKAPitem;
    }
    function getIsKAPitem(uint256 _tokenIndex) external view returns(bool) {
        return isKAPitem[_tokenIndex];
    }

    function callOfferDeal(
        bool _isFeeForBoth,
        address _receiver,
        uint256 _offerIndex,
        uint256 _offerAmount,
        uint256 _nftIndex, 
        uint256 _nftId,
        uint256 _getIndex,
        uint256 _getAmount
        ) external {
        require((_offerIndex == 0 && _offerAmount == 0) || (_nftIndex == 0 && _nftId == 0), "IA"); // IA : Invalid Argument
        require((isKAPitem[_offerIndex] == false && _nftIndex == 0) || (isKAPitem[_offerIndex] == true && isKAPitem[_getIndex] == false) || (_nftIndex != 0 && isKAPitem[_getIndex] == false), "IS"); // IS : Invalid Scenario

        feeLock[p2pContract.getDealCount() + 1].isFeeForBoth = _isFeeForBoth;        

        if(isKAPitem[_offerIndex] == false && _nftIndex == 0) {
            feeLock[p2pContract.getDealCount() + 1].offerIndex = _offerIndex;
            feeLock[p2pContract.getDealCount() + 1].valueLock = (_offerAmount/10000) * feeRate;

            if(_isFeeForBoth == true) {
                feeLock[p2pContract.getDealCount() + 1].valueLock *= 2;
            }

            (p2pContract.getToken(_offerIndex)).transferFrom(msg.sender, address(this), feeLock[p2pContract.getDealCount() + 1].valueLock);

        } else if(isKAPitem[_offerIndex] == true || _nftIndex != 0) {
            feeLock[p2pContract.getDealCount() + 1].getIndex = _getIndex;
            feeLock[p2pContract.getDealCount() + 1].valueLock = (_getAmount/10000) * feeRate;

            if(_isFeeForBoth == true) {
                feeLock[p2pContract.getDealCount() + 1].valueLock *= 2;
            }

            (p2pContract.getToken(_getIndex)).transferFrom(msg.sender, address(this), feeLock[p2pContract.getDealCount() + 1].valueLock);
        }

        p2pContract.offerDeal(1, msg.sender, _receiver, _offerIndex, _offerAmount, _nftIndex, _nftId, _getIndex, _getAmount);
    }

    function callRejectDeal(uint256 _dealIndex) external {
        require(feeLock[_dealIndex].valueLock != 0, "FR"); // FR : Fee Reject

        uint256 valueLock = feeLock[_dealIndex].valueLock;
        uint256 tokenIndex;

        if(feeLock[_dealIndex].offerIndex != 0) {
            tokenIndex = feeLock[_dealIndex].offerIndex;

        } else if(feeLock[_dealIndex].getIndex != 0) {
            tokenIndex = feeLock[_dealIndex].getIndex;
        }

        delete feeLock[_dealIndex];

        (p2pContract.getToken(tokenIndex)).transfer(p2pContract.getDeal(_dealIndex).sender, valueLock);

        p2pContract.rejectDeal(_dealIndex, msg.sender);
    }

    function callConfirmDeal(uint256 _dealIndex) external {
        require(p2pContract.getDeal(_dealIndex).status == false, "DC"); // DC : Deal Complete

        if(feeLock[_dealIndex].isFeeForBoth == false) {

            if(feeLock[_dealIndex].offerIndex != 0)  {
                (p2pContract.getToken(feeLock[_dealIndex].offerIndex)).transferFrom(p2pContract.getDeal(_dealIndex).receiver, address(this), feeLock[_dealIndex].valueLock);

            } else if(feeLock[_dealIndex].getIndex != 0)  {
                (p2pContract.getToken(feeLock[_dealIndex].getIndex)).transferFrom(p2pContract.getDeal(_dealIndex).receiver, address(this), feeLock[_dealIndex].valueLock);
            }

        }

        p2pContract.confirmDeal(_dealIndex, msg.sender);
    }

    function getFeeLock(uint256 _dealIndex) external view returns(FeeLock memory) {
        return feeLock[_dealIndex];
    }
    
}

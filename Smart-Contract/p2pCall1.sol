// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./p2pContract.sol";

contract p2pCall114 {

    p2pContract006 p2pContract;

    mapping(uint256=>bool) isKAPitem;

    uint256 feeRate;
    struct FeeLock {
        uint256 feeIndex;
        uint256 valueLock;
        bool isFeeForBoth;
    }
    mapping(uint256=>FeeLock) feeLock;

    uint256[] dealsbyProgramCall;

    modifier onlyProjectAdmin() {
        require(msg.sender == p2pContract.getProjectAdmin(), "NP"); // NP : Not Permission to call
        _;
    }

    constructor(address _p2pContract) {
        p2pContract = p2pContract006(_p2pContract);
        feeRate = 250;
    }
    
    function setIsKAPitem(uint256 _tokenIndex, bool _isKAPitem) external onlyProjectAdmin {
        isKAPitem[_tokenIndex] = _isKAPitem;
    }
    function getIsKAPitem(uint256 _tokenIndex) external view returns(bool) {
        return isKAPitem[_tokenIndex];
    }

    function setFeeRate(uint256 _feeRate) external onlyProjectAdmin {
        feeRate = _feeRate;
    }
    function getFeeRate() external view returns(uint256) {
        return feeRate;
    }

    function withdrawFee(
        uint256 _tokenIndex,
        uint256 _amount,
        address _to
        ) external onlyProjectAdmin {
        (p2pContract.getToken(_tokenIndex)).transfer(_to, _amount);
    }

    function callOfferDeal(
        bool _isFeeForBoth,
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
        require(
            ((_offerTokenIndex != 0 && _offerNftIndex == 0) || (_offerTokenIndex == 0 && _offerNftIndex != 0)) && ((_getTokenIndex != 0 && _getNftIndex == 0) || (_getTokenIndex == 0 && _getNftIndex != 0)), "IA"
        );  // IA : Invalid Argument
        require(
            (isKAPitem[_offerTokenIndex] == false && _offerNftIndex == 0) || ((isKAPitem[_offerTokenIndex] == true || _offerNftIndex != 0) && (isKAPitem[_getTokenIndex] == false && _getNftIndex == 0)), "IS"
        ); // IS : Invalid Scenario

        uint256 dealIndex = p2pContract.getDealCount() + 1;

        if (isKAPitem[_offerTokenIndex] == false && _offerNftIndex == 0) { // currency offer scenario
            feeLock[dealIndex].feeIndex = _offerTokenIndex;
            feeLock[dealIndex].valueLock = (_offerTokenAmount/10000) * feeRate;

        } else if (isKAPitem[_offerTokenIndex] == true || _offerNftIndex != 0) { // KAP item or NFT offer scenario
            feeLock[dealIndex].feeIndex = _getTokenIndex;
            feeLock[dealIndex].valueLock = (_getTokenAmount/10000) * feeRate;
        }

        feeLock[dealIndex].isFeeForBoth = _isFeeForBoth;  

        if (feeLock[dealIndex].isFeeForBoth == true) {
            feeLock[dealIndex].valueLock *= 2;
        }

        dealsbyProgramCall.push(dealIndex);

        (p2pContract.getToken(feeLock[dealIndex].feeIndex)).transferFrom(msg.sender, address(this), feeLock[dealIndex].valueLock);

        p2pContract.offerDeal(1, msg.sender, _receiver, _offerTokenIndex, _offerTokenAmount, _offerNftIndex, _offerNftId, _getTokenIndex, _getTokenAmount, _getNftIndex, _getNftId);
    }

    function callRejectDeal(uint256 _index) external {
        require(feeLock[_index].feeIndex != 0, "NF"); // NF : No Fee lock

        uint256 valueLock = feeLock[_index].valueLock;
        uint256 feeIndex = feeLock[_index].feeIndex;

        delete feeLock[_index];

        (p2pContract.getToken(feeIndex)).transfer(p2pContract.getDeal(_index).sender, valueLock);

        p2pContract.rejectDeal(_index, msg.sender);
    }

    function callConfirmDeal(uint256 _index) external {
        if (feeLock[_index].isFeeForBoth == false) {
            (p2pContract.getToken(feeLock[_index].feeIndex)).transferFrom(p2pContract.getDeal(_index).receiver, address(this), feeLock[_index].valueLock);
        }
        p2pContract.confirmDeal(_index, msg.sender);
    }

    function getFeeLock(uint256 _dealIndex) external view returns(FeeLock memory) {
        return feeLock[_dealIndex];
    }
    function getDealsbyProgramCall() external view returns(uint256[] memory) {
        return dealsbyProgramCall;
    }
    
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

import "./p2pContract.sol";

contract p2pCall115 is ReentrancyGuard {

    p2pContract007 private p2pContract;

    mapping(uint256=>bool) private isKAPitem;

    uint256 private fee;
    struct FeeLock {
        uint256 feeIndex;
        uint256 valueLock;
        bool isFeeForBoth;
    }
    mapping(uint256=>FeeLock) private feeLock;

    uint256[] private dealsbyProgramCall;

    modifier onlyProjectAdmin() {
        require(msg.sender == p2pContract.getProjectAdmin(), "NP"); // NP : Not Permission to call
        _;
    }

    event SetKAPitem(uint256 indexed tokenIndex, bool indexed isKAPitem);
    event ChangeFee(uint256 indexed oldRate, uint256 indexed newRate);
    event WithdrawFee(uint256 indexed tokenIndex, address indexed to, uint256 amount);
    event LockFee(bool indexed isFeeForBoth, uint256 indexed feeIndex, uint256 valueLock);
    event RejectFee(bool indexed isFeeForBoth, uint256 indexed feeIndex, uint256 valueLock);
    event ConfirmFee(bool indexed isFeeForBoth, uint256 indexed feeIndex, uint256 valueLock);

    constructor(address _p2pContract) {
        p2pContract = p2pContract007(_p2pContract);
        fee = 250;
    }
    
    function setIsKAPitem(uint256 _tokenIndex, bool _isKAPitem) external onlyProjectAdmin {
        isKAPitem[_tokenIndex] = _isKAPitem;
        emit SetKAPitem(_tokenIndex, _isKAPitem);
    }
    function getIsKAPitem(uint256 _tokenIndex) external view returns(bool) {
        return isKAPitem[_tokenIndex];
    }

    function setFee(uint256 _rate) external onlyProjectAdmin {
        emit ChangeFee(fee, _rate);
        fee = _rate;
    }
    function getFee() external view returns(uint256) {
        return fee;
    }

    function withdrawFee(
        uint256 _tokenIndex,
        uint256 _amount,
        address _to
        ) external onlyProjectAdmin {
        (p2pContract.getToken(_tokenIndex)).transfer(_to, _amount);
        emit WithdrawFee(_tokenIndex, _to, _amount);
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
            feeLock[dealIndex].valueLock = (_offerTokenAmount/10000) * fee;

        } else if (isKAPitem[_offerTokenIndex] == true || _offerNftIndex != 0) { // KAP item or NFT offer scenario
            feeLock[dealIndex].feeIndex = _getTokenIndex;
            feeLock[dealIndex].valueLock = (_getTokenAmount/10000) * fee;
        }

        feeLock[dealIndex].isFeeForBoth = _isFeeForBoth;

        if (feeLock[dealIndex].isFeeForBoth == true) {
            feeLock[dealIndex].valueLock *= 2;
        }

        (p2pContract.getToken(feeLock[dealIndex].feeIndex)).transferFrom(msg.sender, address(this), feeLock[dealIndex].valueLock);

        dealsbyProgramCall.push(dealIndex);

        emit LockFee(_isFeeForBoth, feeLock[dealIndex].feeIndex, feeLock[dealIndex].valueLock);

        p2pContract.offerDeal(1, msg.sender, _receiver, _offerTokenIndex, _offerTokenAmount, _offerNftIndex, _offerNftId, _getTokenIndex, _getTokenAmount, _getNftIndex, _getNftId);
    }

    function callRejectDeal(uint256 _index) external nonReentrant {
        require(feeLock[_index].feeIndex != 0, "NF"); // NF : No Fee lock

        (p2pContract.getToken(feeLock[_index].feeIndex)).transfer(p2pContract.getDeal(_index).sender, feeLock[_index].valueLock);

        emit RejectFee(feeLock[_index].isFeeForBoth, feeLock[_index].feeIndex, feeLock[_index].valueLock);

        delete feeLock[_index];

        p2pContract.rejectDeal(_index, msg.sender);
    }

    function callConfirmDeal(uint256 _index, bool _isFeeForBoth) external nonReentrant {
        if (feeLock[_index].isFeeForBoth == false) {
            if (_isFeeForBoth == true) {
                require(feeLock[_index].feeIndex != 0, "NF");

                (p2pContract.getToken(feeLock[_index].feeIndex)).transferFrom(p2pContract.getDeal(_index).receiver, address(this), feeLock[_index].valueLock * 2);

                (p2pContract.getToken(feeLock[_index].feeIndex)).transfer(p2pContract.getDeal(_index).sender, feeLock[_index].valueLock);

            } else if (_isFeeForBoth == false) {
                (p2pContract.getToken(feeLock[_index].feeIndex)).transferFrom(p2pContract.getDeal(_index).receiver, address(this), feeLock[_index].valueLock);
            }
        }

        emit ConfirmFee(feeLock[_index].isFeeForBoth, feeLock[_index].feeIndex, feeLock[_index].valueLock);

        delete feeLock[_index];
        
        p2pContract.confirmDeal(_index, msg.sender);
    }

    function getFeeLock(uint256 _dealIndex) external view returns(FeeLock memory) {
        return feeLock[_dealIndex];
    }
    function getDealsbyProgramCall() external view returns(uint256[] memory) {
        return dealsbyProgramCall;
    }
    
}

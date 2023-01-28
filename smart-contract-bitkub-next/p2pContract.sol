// File: @openzeppelin/contracts/security/ReentrancyGuard.sol

// OpenZeppelin Contracts v4.4.1 (security/ReentrancyGuard.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

// File: interfaceKAP.sol

// interfaces/IKAP20.sol

pragma solidity >=0.6.0;

interface IKAP20 {
  function totalSupply() external view returns (uint256);

  function decimals() external view returns (uint8);

  function symbol() external view returns (string memory);

  function name() external view returns (string memory);

  function balanceOf(address account) external view returns (uint256);

  function transfer(address recipient, uint256 amount) external returns (bool);

  function allowance(address _owner, address spender) external view returns (uint256);

  function approve(address spender, uint256 amount) external returns (bool);

  function transferFrom(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool);

  function adminTransfer(
    address sender,
    address recipient,
    uint256 amount
  ) external returns (bool success);

  event Transfer(address indexed from, address indexed to, uint256 value);

  event Approval(address indexed owner, address indexed spender, uint256 value);
}

// interfaces/IKYCBitkubChain.sol

pragma solidity >=0.6.0;

interface IKYCBitkubChain {
  function kycsLevel(address _addr) external view returns (uint256);
}

// IKAP721/IKAP721.sol

pragma solidity ^0.8.0;

interface IKAP721 {
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
  event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
  event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

  function balanceOf(address owner) external view returns (uint256 balance);

  function ownerOf(uint256 tokenId) external view returns (address owner);

  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) external;

  function adminTransfer(
    address _from,
    address _to,
    uint256 _tokenId
  ) external;

  function internalTransfer(
    address sender,
    address recipient,
    uint256 tokenId
  ) external returns (bool);

  function externalTransfer(
    address sender,
    address recipient,
    uint256 tokenId
  ) external returns (bool);

  function approve(address to, uint256 tokenId) external;

  function getApproved(uint256 tokenId) external view returns (address operator);

  function setApprovalForAll(address operator, bool _approved) external;

  function isApprovedForAll(address owner, address operator) external view returns (bool);

  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId,
    bytes calldata data
  ) external;
}

// File: p2pContract.sol

pragma solidity >=0.8.0;

contract p2pContract is ReentrancyGuard {

    /* 
    projectAdmin Authorities : 
    1) Transferring projectAdmin authority to new address or contract by calling setProjectAdmin()
    2) Adding or removing main p2pContract's platfrom fee collecting policy by calling setProgramCall()
    3) Listing or unlisting KAP20 or KAP721 contract by calling setToken() & setNft()
    4) Setting and activating KYC policy to this contract by calling setKYC() & activateOnlyKycAddress()
    */
    address public projectAdmin;
    modifier onlyProjectAdmin() {
        require(msg.sender == projectAdmin, "NP"); // NP : Not Permission to call
        _;
    }
    /* 
    committee (BKC admin) Authorities : 
    1) Transfering committee authority to new address or contract by calling setCommittee()
    2) Transfering/unlocking token/nft out of p2pContract by calling adminUnlock()
    */
    address public committee;
    modifier onlyCommittee() {
        require(msg.sender == committee, "NP");
        _;
    }
    address public superAdmin; // superAdmin is using for onlyCallHelper() modifier in Bitkub Next's functions
    
    mapping(uint256=>address) public programCall; // for variety of platform fee collecting policy

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

    constructor() {
        projectAdmin = msg.sender;
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

    function rejectDeal(uint256 _index, address _sendFrom) external nonReentrant {
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

    function confirmDeal(uint256 _index, address _sendFrom) external nonReentrant {
        require(msg.sender == programCall[deals[_index].callIndex], "NP");
        if (deals[_index].receiver == address(0)) {
            deals[_index].receiver = _sendFrom;
        } // for place-order p2p function
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

pragma solidity >=0.8.0;

import "./KAPsupport.sol";

interface IKYC {
  function kycsLevel(address _addr) external view returns(uint256);
}

contract p2pContract {
  struct Deal {
    address seller;
    address buyer;
    uint tokenoffer;
    uint tokenget;
    uint tokenofferAmount;
    uint tokengetAmount;
    bool sold;
  }	

  address public projectadmin;
  mapping(uint256=>Deal) public deals;
  mapping(uint256=>KAP20) public tokens;
  mapping(uint256=>KAP721) public nfts;
  mapping(uint256=>bool) public lockNft;
  uint256 public feeRate;
  uint256 public dealCount;
  uint256 public soldCount;
  uint256 public tokenCount;
  uint256 public nftCount;
  constructor (uint256 _starterFeeRate) public {
    projectadmin = msg.sender;
    feeRate = _starterFeeRate;
  }

  modifier onlyProjectAdmin() {
    require(msg.sender == projectadmin, "You are not admin");
    _;
  }

  function addNft(address _nftAddr) public onlyProjectAdmin {
    nftCount++;
    nfts[nftCount] = KAP721(_nftAddr);
  } 

  function addToken(address _tokenAddr) public onlyProjectAdmin {
    tokenCount++;
    tokens[tokenCount] = KAP20(_tokenAddr);
  } 

  function setFee(uint256 _feeRate) public onlyProjectAdmin {
    feeRate = _feeRate;
  } 

  function addDeal(
    address _buyer, 
    uint256 _tokenoffer, 
    uint256 _tokenget, 
    uint256 _tokenofferAmount, 
    uint256 _tokengetAmount
  ) public {
    require(_tokenofferAmount <= tokens[_tokenoffer].balanceOf(msg.sender), "Not enough token to offer");
    dealCount++;
    deals[dealCount].seller = msg.sender;
    deals[dealCount].buyer = _buyer;
    deals[dealCount].tokenoffer = _tokenoffer;
    deals[dealCount].tokenofferAmount = _tokenofferAmount;
    deals[dealCount].tokenget = _tokenget;
    deals[dealCount].tokengetAmount = _tokengetAmount;
    deals[dealCount].sold = false;
    tokens[_tokenoffer].transferFrom(msg.sender, address(this), _tokenofferAmount);
  }

  function getdealCount() public view returns(uint256) {
    return dealCount;
  }
  function getsoldCount() public view returns(uint256) {
    return soldCount;
  }
  function getdealSeller(uint256 _index) public view returns(address) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.seller;
  }
  function getdealBuyer(uint256 _index) public view returns(address) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.buyer;
  }
  function gettokenOffer(uint256 _index) public view returns(uint256) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.tokenoffer;
  }
  function gettokenGet(uint256 _index) public view returns(uint256) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.tokenget;
  }
  function gettokenofferAmount(uint256 _index) public view returns(uint256) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.tokenofferAmount;
  }    
  function gettokengetAmount(uint256 _index) public view returns(uint256) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.tokengetAmount;
  } 
  function getSold(uint256 _index) public view returns(bool) {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    return i.sold;
  }

  function removeDeal(uint256 _index) public {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    require(i.seller == msg.sender, "Only seller can remove deal");
    require(!i.sold, "Deal complete already");
    uint tokenofferBack = i.tokenoffer; 
    address sellerBack = i.seller;
    uint tokenofferAmountBack = i.tokenofferAmount;
    delete deals[_index];
    tokens[tokenofferBack].transfer(sellerBack, tokenofferAmountBack);
  }

  function buyDeal(uint256 _index) public {
    Deal storage i = deals[_index];
    require(i.seller != address(0), "No such deal");
    require(i.buyer == msg.sender, "You are not buyer of this deal");
    require(!i.sold, "Deal complete already");
    require(i.tokengetAmount <= tokens[i.tokenget].balanceOf(msg.sender), "Not enough token to spend");
    i.sold = true;
    soldCount++;
    uint getFee = i.tokengetAmount/feeRate;
    uint offerFee = i.tokenofferAmount/feeRate;
    tokens[i.tokenget].transferFrom(i.buyer, i.seller, (i.tokengetAmount - getFee));
    tokens[i.tokenget].transferFrom(i.buyer, projectadmin, getFee);
    tokens[i.tokenoffer].transfer(i.buyer, (i.tokenofferAmount - offerFee));
    tokens[i.tokenoffer].transfer(projectadmin, offerFee);
  }

  function approveNftprofile(
    uint256 _nftindex, 
    uint256 _tokenIdNEW, 
    uint256 _tokenIdOLD
  ) public {
    require(nfts[_nftindex].ownerOf(_tokenIdNEW) == msg.sender, "You are not owner of this NFT");
    lockNft[_tokenIdOLD] = false;
    lockNft[_tokenIdNEW] = true;
  }

  function getApprovenftprofile(uint256 _tokenId) public view returns(bool) {
    return lockNft[_tokenId];
  }

  // To satisfy Bitkub chain policy
  IKYC public kyc;
  address public bkcadmin;
  bool public isActivatedOnlyKycAddress;
    
  function setBKCAdmin(address _bkcadminAddr) public onlyProjectAdmin {
    bkcadmin = _bkcadminAddr;
  }

  modifier onlyBKCAdmin() {
    require(msg.sender == bkcadmin, "Restricted only super admin");
    _;
  }

  function setKYC(address _kyc) external onlyBKCAdmin {
    kyc = IKYC(_kyc);
  }
  
  function activateOnlyKycAddress() external onlyBKCAdmin {
    isActivatedOnlyKycAddress = true;
  }
    
  function adminTransfer(
    address _to, 
    uint256 _index, 
    uint256 _value
  ) external onlyBKCAdmin returns(bool) {
    if (isActivatedOnlyKycAddress) {
      require(kyc.kycsLevel(address(this)) > 1 && kyc.kycsLevel(_to) > 1, "Admin can control only KYC Address");
    }
    require(tokens[_index].balanceOf(address(this)) >= _value, "Transfer amount exceed balance");
    require(_to != address(0), "Transfer to zero address");
    tokens[_index].transfer(_to, _value);
    return true;
  }

}

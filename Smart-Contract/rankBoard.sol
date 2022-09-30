// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0;

contract rankBoard002 {
    mapping(address=>bool) registered;
    address[] rankAddr;
    function setRank() public {
        require(registered[msg.sender] == false, "DUP");
        registered[msg.sender] = true;
        rankAddr.push(msg.sender);
    }
    function getRegistered(address _addr) public view returns(bool)  {
        return registered[_addr];
    }
    function getRank() public view returns(address[] memory)  {
        return rankAddr;
    }
}

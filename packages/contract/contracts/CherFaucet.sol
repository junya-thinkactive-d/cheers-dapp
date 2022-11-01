// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IERC20.sol';

contract CherFaucet {
  address public CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;
  IERC20 public cher = IERC20(CHER_CONTRACT_ADDRESS);
  address public owner;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor() {
    owner = msg.sender;
  }

  function setOwner(address ownerAddress) public onlyOwner {
    owner = ownerAddress;
  }

  function setCHER(address CHERAddress) public onlyOwner {
    CHER_CONTRACT_ADDRESS = CHERAddress;
    cher = IERC20(CHERAddress);
  }

  function getFaucetBalance() external view returns (uint256) {
    return cher.balanceOf(address(this));
  }

  function faucet() external payable {
    // require(msg.sender == tx.origin, 'EOA only');
    require(msg.value >= 0, 'Native token are required to receive CHER');
    require(cher.balanceOf(address(this)) >= 0, 'No CHER');

    bool sent = cher.transfer(msg.sender, msg.value * 1000);
    require(sent, 'CHER could not be sent.');
  }

  function withdraw() external onlyOwner {
    // require(msg.sender == tx.origin, 'EOA only');
    uint256 balance = cher.balanceOf(address(this));
    require(balance > 0, 'No CHER');

    bool sent = cher.transfer(msg.sender, balance);
    require(sent, 'CHER could not be sent.');
  }
}

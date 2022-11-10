// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IUserPoolFactory {
  function newUserPoolFactory(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external returns (address);
}

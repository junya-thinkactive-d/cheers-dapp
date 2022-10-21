// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IDaoPoolFactory {
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external returns (address);
}

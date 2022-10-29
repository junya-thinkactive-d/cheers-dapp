// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IDaosData.sol';
import '../DaoPool.sol';

contract DaoPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS; // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address DAOSDATA_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdepoloy
  IDaosData public daosData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    daosData = IDaosData(DAOSDATA_CONTRACT_ADDRESS);
  }

  // Daoプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(msg.sender)) == address(0), 'alredy created!');

    DaoPool daoPool = new DaoPool(msg.sender, _daoName, _daoProfile, _daoIcon, address(this));
    daosData.addDaos(msg.sender, _daoName, _daoProfile, _daoIcon);
    poolListData.addMyPoolAddress(msg.sender, address(daoPool));

    return poolListData.getMyPoolAddress(msg.sender);
  }

  function setPoolListData(address poolListDataAddress) public {
    poolListData = IPoolListData(poolListDataAddress);
  }

  function setDaosData(address daosDataAddress) public {
    daosData = IDaosData(daosDataAddress);
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IDaosData.sol';
import '../DaoPool.sol';

contract DaoPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS = 0xf244F1d6A605797721f2d000107a4d129996adFa; // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address DAOS_DATA_CONTRACT_ADDRESS = 0xCcC09563b7A69CadfF4b770cC76cb4452858b89C; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IDaosData public daosData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    daosData = IDaosData(DAOS_DATA_CONTRACT_ADDRESS);
  }

  // Daoプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(msg.sender)) == address(0), 'already created!');

    DaoPool daoPool = new DaoPool(msg.sender, _daoName, _daoProfile, _daoIcon, address(this));
    daosData.addDaos(msg.sender, _daoName, _daoProfile, _daoIcon);
    poolListData.addMyPoolAddress(msg.sender, address(daoPool));

    return poolListData.getMyPoolAddress(msg.sender);
  }

  function setPoolListData(address poolListDataAddress) public {
    POOLLISTDATA_CONTRACT_ADDRESS = poolListDataAddress;
    poolListData = IPoolListData(poolListDataAddress);
  }

  function setDaosData(address daosDataAddress) public {
    DAOS_DATA_CONTRACT_ADDRESS = daosDataAddress;
    daosData = IDaosData(daosDataAddress);
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IDaosData.sol';
import '../shared/SharedStruct.sol';

// DAOデータ保存のためのコントラクト
contract DaosData is IDaosData {
  // Daoのデータ
  SharedStruct.Dao[] public daos;

  constructor() {}

  // DAO追加
  function addDaos(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external {
    daos.push(SharedStruct.Dao(_daoAddress, _daoName, _daoProfile, _daoIcon, block.timestamp));
  }

  // 全DAO取得
  function getAllDaoList() public view returns (SharedStruct.Dao[] memory) {
    return daos;
  }
}

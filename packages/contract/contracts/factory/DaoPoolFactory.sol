// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IDaosData.sol';
import '../DaoPool.sol';

contract DaoPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS = 0x35FA06F351ED31f8eAd5DcDF1E586e47fc064376; // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address DAOS_DATA_CONTRACT_ADDRESS = 0xa1c94AE2029Ef112386707A9DbD5501FCAfD37c4; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IDaosData public daosData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    daosData = IDaosData(DAOS_DATA_CONTRACT_ADDRESS);
  }

  // Daoプール作成
  function newDaoPoolFactory(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(_daoAddress)) == address(0), 'already created!');

    DaoPool daoPool = new DaoPool(_daoAddress, _daoName, _daoProfile, _daoIcon, address(this));
    daosData.addDaos(_daoAddress, _daoName, _daoProfile, _daoIcon);
    poolListData.addMyPoolAddress(_daoAddress, address(daoPool));

    return poolListData.getMyPoolAddress(_daoAddress);
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

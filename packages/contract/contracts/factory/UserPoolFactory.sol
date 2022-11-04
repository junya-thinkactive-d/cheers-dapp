// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IUsersData.sol';
import '../UserPool.sol';

contract UserPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS = 0xf244F1d6A605797721f2d000107a4d129996adFa;
  // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address USERS_DATA_CONTRACT_ADDRESS = 0x56853f3bF537a055FcBFCdE1f784048148440aee; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IUsersData public usersData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    usersData = IUsersData(USERS_DATA_CONTRACT_ADDRESS);
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(msg.sender)) == address(0), 'already created!');

    UserPool userPool = new UserPool(msg.sender, _userName, _userProfile, _userIcon, address(this));
    usersData.addUsers(msg.sender, _userName, _userProfile, _userIcon);
    poolListData.addMyPoolAddress(msg.sender, address(userPool));

    return poolListData.getMyPoolAddress(msg.sender);
  }

  function setPoolListData(address poolListDataAddress) public {
    POOLLISTDATA_CONTRACT_ADDRESS = poolListDataAddress;
    poolListData = IPoolListData(poolListDataAddress);
  }

  function setUsersData(address usersDataAddress) public {
    USERS_DATA_CONTRACT_ADDRESS = usersDataAddress;
    usersData = IUsersData(usersDataAddress);
  }
}

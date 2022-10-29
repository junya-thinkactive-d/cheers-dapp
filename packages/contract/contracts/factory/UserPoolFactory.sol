// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IUsersData.sol';
import '../UserPool.sol';

contract UserPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS; // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address USERSDATA_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdepoloy
  IUsersData public usersData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    usersData = IUsersData(USERSDATA_CONTRACT_ADDRESS);
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(msg.sender)) == address(0), 'alredy created!');

    UserPool userPool = new UserPool(msg.sender, _userName, _userProfile, _userIcon, address(this));
    usersData.addUsers(msg.sender, _userName, _userProfile, _userIcon);
    poolListData.addMyPoolAddress(msg.sender, address(userPool));

    return poolListData.getMyPoolAddress(msg.sender);
  }

  function setPoolListData(address poolListDataAddress) public {
    poolListData = IPoolListData(poolListDataAddress);
  }

  function setUsersData(address usersDataAddress) public {
    usersData = IUsersData(usersDataAddress);
  }
}

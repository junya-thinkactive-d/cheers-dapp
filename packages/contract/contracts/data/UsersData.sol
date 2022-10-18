// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IUsersData.sol';
import '../shared/SharedStruct.sol';

// USERデータ保存のためのコントラクト
contract UsersData is IUsersData {
  // Userのデータ
  SharedStruct.User[] public users;

  constructor() {}

  // USER追加
  function addUsers(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external {
    users.push(SharedStruct.User(_userAddress, _userName, _userProfile, _userIcon));
  }

  // 全User取得
  function getAlluserList() public view returns (SharedStruct.User[] memory) {
    return users;
  }
}

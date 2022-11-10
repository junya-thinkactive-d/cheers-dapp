// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IUsersData.sol';
import '../UserPool.sol';

contract UserPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS = 0x35FA06F351ED31f8eAd5DcDF1E586e47fc064376;
  // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address USERS_DATA_CONTRACT_ADDRESS = 0x3B71d3662eF1D13B63a337adA7Fd86C2cDE541a9; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IUsersData public usersData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    usersData = IUsersData(USERS_DATA_CONTRACT_ADDRESS);
  }

  // Userプール作成
  function newUserPoolFactory(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(_userAddress)) == address(0), 'already created!');

    UserPool userPool = new UserPool(_userAddress, _userName, _userProfile, _userIcon, address(this));
    usersData.addUsers(_userAddress, _userName, _userProfile, _userIcon);
    poolListData.addMyPoolAddress(_userAddress, address(userPool));

    return poolListData.getMyPoolAddress(_userAddress);
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

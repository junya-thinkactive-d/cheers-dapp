// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

library SharedStruct {
  struct Dao {
    address daoAddress;
    string daoName;
    string daoProfile;
    string daoIcon;
    uint256 creationTime;
  }

  struct User {
    address userAddress;
    string userName;
    string userProfile;
    string userIcon;
    uint256 creationTime;
  }

  struct Project {
    address projectOwnerAddress;
    address projectAddress;
    address belongDaoAddress;
    string projectName;
    string projectContents;
    string projectReword;
    uint256 creationTime;
  }

  struct Cheer {
    address projectAddress;
    address cheerPoolAddress;
    uint256 creationTime;
    string message;
    uint256 cher;
  }
}

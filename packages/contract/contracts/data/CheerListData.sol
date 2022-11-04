// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/ICheerListData.sol';
import '../shared/SharedStruct.sol';

contract CheerListData is ICheerListData {
  // Cheerのデータ
  // userやDAOの各PoolがCheerしたデータ
  mapping(address => SharedStruct.Cheer[]) public myPoolCheerDataList;
  // projectごとのCheerデータ
  mapping(address => SharedStruct.Cheer[]) public myProjectCheerDataList;

  constructor() {}

  function addCheerDataList(
    address _projectPoolAddress,
    address _cheerPoolAddres,
    uint256 _creationTime,
    string memory _message,
    uint256 _cher
  ) external {
    addMyPoolCheerDataList(_projectPoolAddress, _cheerPoolAddres, _creationTime, _message, _cher);
    addMyProjectDataList(_projectPoolAddress, _cheerPoolAddres, _creationTime, _message, _cher);
  }

  function addMyPoolCheerDataList(
    address _projectPoolAddress,
    address _cheerPoolAddres,
    uint256 _creationTime,
    string memory _message,
    uint256 _cher
  ) private {
    myPoolCheerDataList[_cheerPoolAddres].push(
      SharedStruct.Cheer(_projectPoolAddress, _cheerPoolAddres, _creationTime, _message, _cher)
    );
  }

  function addMyProjectDataList(
    address _projectPoolAddress,
    address _cheerPoolAddres,
    uint256 _creationTime,
    string memory _message,
    uint256 _cher
  ) private {
    myProjectCheerDataList[_projectPoolAddress].push(
      SharedStruct.Cheer(_projectPoolAddress, _cheerPoolAddres, _creationTime, _message, _cher)
    );
  }

  function getMyPoolCheerDataList(address _cheerPoolAddress) public view returns (SharedStruct.Cheer[] memory) {
    return myPoolCheerDataList[_cheerPoolAddress];
  }

  function getMyProjectCheerList(address _projectPoolAddress) public view returns (SharedStruct.Cheer[] memory) {
    return myPoolCheerDataList[_projectPoolAddress];
  }
}

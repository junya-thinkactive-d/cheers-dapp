// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface ICheerListData {
  function addCheerDataList(
    address _projectPoolAddress,
    address _cheerPoolAddres,
    uint256 _creationTime,
    string memory _message,
    uint256 _cher
  ) external;

  function getMyPoolCheerDataList(address _cheerPoolAddress) external view returns (SharedStruct.Cheer[] memory);

  function getMyProjectCheerList(address _projectPoolAddress) external view returns (SharedStruct.Cheer[] memory);
}

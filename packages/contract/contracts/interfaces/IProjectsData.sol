// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface IProjectsData {
  // PROJECT追加
  function addProjects(
    address _projectOwnerAddress,
    address _projectPoolAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) external;

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAddress) external view returns (SharedStruct.Project[] memory);
}

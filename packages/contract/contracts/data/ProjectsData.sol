// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IProjectsData.sol';
import '../shared/SharedStruct.sol';

// Projectデータ保存のためのコントラクト
contract ProjectsData is IProjectsData {
  // pool
  mapping(address => SharedStruct.Project[]) public eachProjectsList;
  SharedStruct.Project[] public allProjectsList;

  // Project追加...DaoPool or UserPoolから叩く
  function addProjects(
    address _projectOwnerAddress,
    address _projectPoolAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) external {
    eachProjectsList[_projectOwnerAddress].push(
      SharedStruct.Project(_projectPoolAddress, _belongDaoAddress, _projectName, _projectContents, _projectReword)
    );

    allProjectsList.push(
      SharedStruct.Project(_projectPoolAddress, _belongDaoAddress, _projectName, _projectContents, _projectReword)
    );
  }

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAddress) public view returns (SharedStruct.Project[] memory) {
    return eachProjectsList[_projectOwnerAddress];
  }

  //
  function getAllProjectList() public view returns (SharedStruct.Project[] memory) {
    return allProjectsList;
  }
}

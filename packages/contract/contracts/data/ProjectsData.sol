// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IProjectsData.sol';
import '../shared/SharedStruct.sol';

// Projectデータ保存のためのコントラクト
contract ProjectsData is IProjectsData {
  // pool
  mapping(address => SharedStruct.Project) public projectAddressToProjectData;
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
    uint256 _creationTime = block.timestamp;

    eachProjectsList[_projectOwnerAddress].push(
      SharedStruct.Project(
        _projectOwnerAddress,
        _projectPoolAddress,
        _belongDaoAddress,
        _projectName,
        _projectContents,
        _projectReword,
        _creationTime
      )
    );

    allProjectsList.push(
      SharedStruct.Project(
        _projectOwnerAddress,
        _projectPoolAddress,
        _belongDaoAddress,
        _projectName,
        _projectContents,
        _projectReword,
        _creationTime
      )
    );

    projectAddressToProjectData[_projectPoolAddress] = SharedStruct.Project(
      _projectOwnerAddress,
      _projectPoolAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword,
      _creationTime
    );
  }

  // プロジェクトプールアドレスからプロジェクト取得
  function getProjectAddressToProjectData(address _projectPoolAddress)
    public
    view
    returns (SharedStruct.Project memory)
  {
    return projectAddressToProjectData[_projectPoolAddress];
  }

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAddress) public view returns (SharedStruct.Project[] memory) {
    return eachProjectsList[_projectOwnerAddress];
  }

  // 全てのProject取得
  function getAllProjectList() public view returns (SharedStruct.Project[] memory) {
    return allProjectsList;
  }
}

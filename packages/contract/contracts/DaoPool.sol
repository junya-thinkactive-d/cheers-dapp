// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IDaoPool.sol';
import './interfaces/ICheers.sol';
import './interfaces/IProjectsData.sol';
import './interfaces/IERC20.sol';
import './shared/SharedStruct.sol';
import './ProjectPool.sol';

contract DaoPool is IDaoPool {
  // PROJECT
  address PROJECTSDATA_CONTRACT_ADDRESS = 0xD511eDC5b6F9f6fcd1135cd9F55857fB7cf606A8; // = projectsDataコントラクトアドレス 先にDaoDataコントラクトをdeploy
  IProjectsData public projectsData;

  IERC20 public cher;
  ICheers public cheersDapp;
  address cheersDappAddress;
  address owner;
  address public daoAddress;
  string public daoName;
  string public daoProfile;
  string public daoIcon;
  // Alchemy testnet goerli deploy
  address CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;

  // cheerProjectリスト
  address[] cheerProjectList;
  // cheerしているかないか
  mapping(address => bool) public isCheer;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(
    address _poolOwnerAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon,
    address _cheersDappAddress
  ) {
    // CHERコントラクト接続
    cher = IERC20(CHER_CONTRACT_ADDRESS);
    // poolのowner設定
    owner = _poolOwnerAddress;
    daoAddress = _poolOwnerAddress;
    daoName = _daoName;
    daoProfile = _daoProfile;
    daoIcon = _daoIcon;
    cheersDappAddress = _cheersDappAddress;
    cheersDapp = ICheers(cheersDappAddress);
    projectsData = IProjectsData(PROJECTSDATA_CONTRACT_ADDRESS);
  }

  // DAO情報取得関連↓
  // DAOPoolアドレス取得
  function getDaoPoolAddress() public view returns (address) {
    return address(this);
  }

  // DaoWalletアドレス取得
  function getDaoAddress() public view returns (address) {
    return daoAddress;
  }

  // DAO名取得
  function getDaoName() public view returns (string memory) {
    return daoName;
  }

  // DAOプロフィール取得
  function getDaoProfile() public view returns (string memory) {
    return daoProfile;
  }

  // DAOアイコン取得
  function getDaoIcon() public view returns (string memory) {
    return daoIcon;
  }

  // DAOウォレットからDAOプールにCHERチャージ
  function chargeCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(daoAddress) >= _cherAmount, 'not insufficient');
    cher.transferFrom(daoAddress, address(this), _cherAmount);
  }

  // DAOプールからDAOウォレットにCHER引出し
  function withdrawCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(address(this)) >= _cherAmount, 'not insufficient');
    cher.transfer(daoAddress, _cherAmount);
  }

  // Projectプール作成
  function newProjectFactory(
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) public returns (address) {
    ProjectPool projectPool = new ProjectPool(
      address(this),
      address(this),
      _projectName,
      _projectContents,
      _projectReword
    );
    addChallengeProjects(address(projectPool), address(this), _projectName, _projectContents, _projectReword);
    return address(projectPool);
  }

  function addChallengeProjects(
    address projectAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) private {
    projectsData.addProjects(
      address(this),
      projectAddress,
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword
    );
  }

  // このDAOのChallenge全プロジェクトを取得
  function getAllChallengeProjects() public view returns (SharedStruct.Project[] memory) {
    return projectsData.getEachProjectList(address(this));
  }

  // このDAOがCheerしているプロジェクトを追加 ProjectPoolから叩く
  function addCheerProject(address _cheerProjectPoolAddress) external returns (bool) {
    require(!isCheer[_cheerProjectPoolAddress], 'already cheer');

    if (cheerProjectList.length == 0) {
      cheerProjectList.push(_cheerProjectPoolAddress);
      isCheer[_cheerProjectPoolAddress] = true;
    } else {
      for (uint256 i = 0; i < cheerProjectList.length; i++) {
        if (cheerProjectList[i] == _cheerProjectPoolAddress) {
          isCheer[_cheerProjectPoolAddress] = true;
        } else {
          cheerProjectList.push(_cheerProjectPoolAddress);
          isCheer[_cheerProjectPoolAddress] = true;
        }
      }
    }
    return isCheer[_cheerProjectPoolAddress];
  }

  // Cheerしているプロジェクトを脱退 ProjectPoolから叩く
  function removeCheerProject(address _cheerProjectPoolAddress) external returns (bool) {
    require(isCheer[_cheerProjectPoolAddress], 'already not cheer');
    isCheer[_cheerProjectPoolAddress] = false;
    return isCheer[_cheerProjectPoolAddress];
  }

  // このプールのcher総量
  function getTotalCher() public view returns (uint256) {
    return cher.balanceOf(address(this));
  }

  // function setCHER(address CHERAddress) public {
  //   CHER_CONTRACT_ADDRESS = CHERAddress;
  //   cher = IERC20(CHERAddress);
  // }

  // function setProjectsData(address projectsDataAddress) public {
  //   PROJECTSDATA_CONTRACT_ADDRESS = projectsDataAddress;
  //   projectsData = IProjectsData(projectsDataAddress);
  // }

  function approveCherToProjectPool(address _projectPoolAddress, uint256 _cherAmount) external onlyOwner {
    require(cher.balanceOf(address(this)) >= _cherAmount, 'not insufficient');
    cher.approve(_projectPoolAddress, _cherAmount);
  }
}

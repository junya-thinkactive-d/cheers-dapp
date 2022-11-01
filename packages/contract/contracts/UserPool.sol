// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IUserPool.sol';
import './interfaces/ICheers.sol';
import './interfaces/IProjectsData.sol';
import './interfaces/IERC20.sol';
import './shared/SharedStruct.sol';
import './ProjectPool.sol';

contract UserPool is IUserPool {
  // PROJECT
  address PROJECTSDATA_CONTRACT_ADDRESS; // = projectsDataコントラクトアドレス 先にDaoDataコントラクトをdeploy
  IProjectsData public projectsData;

  IERC20 public cher;
  ICheers public cheersDapp;
  address cheersDappAddress;
  address owner;
  address public userAddress;
  string public userName;
  string public userProfile;
  string public userIcon;
  // Alchemy testnet goerli deploy
  address CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;

  // cheerProjectリスト
  address[] cheerProjectList;
  // cheerしているかないか
  mapping(address => bool) isCheer;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(
    address _poolOwnerAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon,
    address _cheersDappAddress
  ) {
    // CHERコントラクト接続
    cher = IERC20(CHER_CONTRACT_ADDRESS);
    // poolのowner設定
    userAddress = _poolOwnerAddress;
    userName = _userName;
    userProfile = _userProfile;
    userIcon = _userIcon;
    cheersDappAddress = _cheersDappAddress;
    cheersDapp = ICheers(cheersDappAddress);
    projectsData = IProjectsData(PROJECTSDATA_CONTRACT_ADDRESS);
  }

  // user情報取得関連↓
  // userPoolアドレス取得
  function getUserPoolAddress() public view returns (address) {
    return address(this);
  }

  // userWalletアドレス取得
  function getUserAddress() public view returns (address) {
    return userAddress;
  }

  // user名取得
  function getUserName() public view returns (string memory) {
    return userName;
  }

  // userプロフィール取得
  function getUserProfile() public view returns (string memory) {
    return userProfile;
  }

  // userアイコン取得
  function getUserIcon() public view returns (string memory) {
    return userIcon;
  }

  // userウォレットからuserプールにCHERチャージ
  function chargeCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(userAddress) >= _cherAmount, 'not insufficient');
    cher.approve(userAddress, _cherAmount);
    cher.transferFrom(userAddress, address(this), _cherAmount);
  }

  // userプールからuserウォレットにCHER引出し
  function withdrawCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(address(this)) >= _cherAmount, 'not insufficient');
    cher.approve(address(this), _cherAmount);
    cher.transfer(userAddress, _cherAmount);
  }

  // Projectプール作成
  function newProjectFactory(
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) public returns (address) {
    ProjectPool projectPool = new ProjectPool(
      address(this),
      _belongDaoAddress,
      _projectName,
      _projectContents,
      _projectReword
    );
    addChallengeProjects(address(this), _projectName, _projectContents, _projectReword);
    return address(projectPool);
  }

  function addChallengeProjects(
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) private {
    projectsData.addProjects(address(this), _belongDaoAddress, _projectName, _projectContents, _projectReword);
  }

  // このuserのChallenge全プロジェクトを取得
  function getAllChallengeProjects() public view returns (SharedStruct.Project[] memory) {
    return projectsData.getEachProjectList(address(this));
  }

  // このuserがCheerしているプロジェクトを追加 ProjectPoolから叩く
  function addCheerProject(address _cheerProjectPoolAddress) public returns (bool) {
    require(!isCheer[_cheerProjectPoolAddress], 'already cheer');
    for (uint256 i = 0; i < cheerProjectList.length; i++) {
      if (cheerProjectList[i] == _cheerProjectPoolAddress) {
        isCheer[_cheerProjectPoolAddress] = true;
      } else {
        cheerProjectList.push(_cheerProjectPoolAddress);
        isCheer[_cheerProjectPoolAddress] = true;
      }
    }
    return isCheer[_cheerProjectPoolAddress];
  }

  // Cheerしているプロジェクトを脱退 ProjectPoolから叩く
  function removeCheerProject(address _cheerProjectPoolAddress) public returns (bool) {
    require(isCheer[_cheerProjectPoolAddress], 'already not cheer');
    isCheer[_cheerProjectPoolAddress] = false;
    return isCheer[_cheerProjectPoolAddress];
  }
}

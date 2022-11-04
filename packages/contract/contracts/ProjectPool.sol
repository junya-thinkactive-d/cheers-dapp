// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IProjectPool.sol';
import './interfaces/IERC20.sol';
import './interfaces/ICheers.sol';
import './interfaces/IPoolListData.sol';
import './interfaces/ICheerListData.sol';
import './shared/SharedStruct.sol';

contract ProjectPool is IProjectPool {
  IERC20 public cher;
  ICheers public cheersDapp;
  address cheersDappAddress;
  address owner;
  address ownerPoolAddress;
  address belongDaoAddress;
  string public projectName;
  string public projectContents;
  string public projectReword;
  // Alchemy testnet goerli deploy
  address CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;

  uint256 public totalCher;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS; // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;
  address CHEERLISTDATA_CONTRACT_ADDRESS; // = cheerDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  ICheerListData public cheerListData;

  constructor(
    address _ownerPoolAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    cheerListData = ICheerListData(CHEERLISTDATA_CONTRACT_ADDRESS);

    //CHERコントラクト接続
    cher = IERC20(CHER_CONTRACT_ADDRESS);
    // cheersDappコントラクト接続
    cheersDapp = ICheers(cheersDappAddress);
    owner = msg.sender;
    ownerPoolAddress = _ownerPoolAddress;
    belongDaoAddress = _belongDaoAddress;
    projectName = _projectName;
    projectContents = _projectContents;
    projectReword = _projectReword;
  }

  // このProjectをCheerする
  function mintCheer(uint256 _cher, string memory _cheerMessage) public {
    require(cher.balanceOf(poolListData.getMyPoolAddress(msg.sender)) >= _cher, 'Not enough');
    cheer(_cher, _cheerMessage);
  }

  // cheerの処理
  function cheer(uint256 _cher, string memory _cheerMessage) private {
    cher.transferFrom(poolListData.getMyPoolAddress(msg.sender), address(this), _cher);
    cheerListData.addCheerDataList(
      address(this),
      poolListData.getMyPoolAddress(msg.sender),
      block.timestamp,
      _cheerMessage,
      _cher
    );
    distributeCher(_cher);
  }

  function distributeCher(uint256 _cher) private {
    // ⚠️端数処理がどうなるか？？？
    // このProjectに投じられた分配前の合計
    totalCher += _cher;
    // cheer全員の分配分
    uint256 cheerDistribute = (_cher * 70) / 100;
    // challengerの分配分
    uint256 challengerDistribute = (_cher * 25) / 100;
    // daoの分配分
    uint256 daoDistribute = _cher - cheerDistribute - challengerDistribute;
    // cheer全員の分配分を投じたcher割合に応じ分配
    for (uint256 i = 0; i < cheerListData.getMyProjectCheerDataList(address(this)).length; i++) {
      cher.transfer(
        cheerListData.getMyProjectCheerDataList(address(this))[i].cheerPoolAddress,
        (cheerDistribute * cheerListData.getMyProjectCheerDataList(address(this))[i].cher) / totalCher
      );
    }
    // challengerのPoolへ分配
    cher.transfer(ownerPoolAddress, challengerDistribute);
    // 所属するDAOへ分配
    cher.transfer(belongDaoAddress, daoDistribute);
  }

  // このプールのcher総量
  function getTotalCher() public view returns (uint256) {
    return cher.balanceOf(address(this));
  }

  function setCHER(address CHERAddress) public {
    CHER_CONTRACT_ADDRESS = CHERAddress;
    cher = IERC20(CHERAddress);
  }

  function setPoolListData(address poolListDataAddress) public {
    POOLLISTDATA_CONTRACT_ADDRESS = poolListDataAddress;
    poolListData = IPoolListData(poolListDataAddress);
  }
}

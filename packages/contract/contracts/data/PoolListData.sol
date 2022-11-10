// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PoolListData {
  mapping(address => address) public poolList;
  mapping(address => address) public searchWalletAddress;

  // walletアドレスに紐づいたpoolアドレスの取得
  function getMyPoolAddress(address _ownerAddress) public view returns (address) {
    return poolList[_ownerAddress];
  }

  // poolアドレスからwalletアドレスを取得
  function getSearchWalletAddress(address _poolAddres) public view returns(address) {
    return searchWalletAddress[_poolAddres];
  } 

  function addMyPoolAddress(address _ownerAddress, address _poolAddress) public {
    poolList[_ownerAddress] = _poolAddress;
    searchWalletAddress[_poolAddress]=_ownerAddress;
  }
}

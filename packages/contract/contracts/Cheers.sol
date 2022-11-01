// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/ICheers.sol';
import './interfaces/IDaoPoolFactory.sol';
import './interfaces/IUserPoolFactory.sol';

contract Cheers is ICheers {
  // DAO_POOL_FACTORY
  address DAO_POOL_FACTORY_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IDaoPoolFactory public daoPoolFactory;
  // USER_POOL_FACTORY
  address USER_POOL_FACTORY_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IUserPoolFactory public userPoolFactory;

  constructor() {
    daoPoolFactory = IDaoPoolFactory(DAO_POOL_FACTORY_CONTRACT_ADDRESS);
    userPoolFactory = IUserPoolFactory(USER_POOL_FACTORY_CONTRACT_ADDRESS);
  }

  // DAOプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) public {
    daoPoolFactory.newDaoPoolFactory(_daoName, _daoProfile, _daoIcon);
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) public {
    userPoolFactory.newUserPoolFactory(_userName, _userProfile, _userIcon);
  }

  function setDaoPoolFactory(address daoPoolFactoryAddress) public {
    DAO_POOL_FACTORY_CONTRACT_ADDRESS = daoPoolFactoryAddress;
    daoPoolFactory = IDaoPoolFactory(daoPoolFactoryAddress);
  }

  function setUserPoolFactory(address userPoolFactoryAddress) public {
    USER_POOL_FACTORY_CONTRACT_ADDRESS = userPoolFactoryAddress;
    userPoolFactory = IUserPoolFactory(userPoolFactoryAddress);
  }
}

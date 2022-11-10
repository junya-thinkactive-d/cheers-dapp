import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Cheers, DaoPoolFactory, UserPoolFactory, PoolListData, DaosData, UsersData } from '../types'

describe('Cheers', function () {

  let cheers: Cheers;

  let daoPoolFactory: DaoPoolFactory;
  let userPoolFactory: UserPoolFactory;

  let poolListData: PoolListData;
  let daosData: DaosData;
  let usersData: UsersData;

  async function fixture() {
    const [deployer, user1, dao1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();


    const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
    daoPoolFactory = await daoPoolFactoryFactory.deploy();
    await daoPoolFactory.deployed();

    const UserPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
    userPoolFactory = await UserPoolFactoryFactory.deploy();
    await userPoolFactory.deployed();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    const daosDataFactory = await ethers.getContractFactory('DaosData');
    daosData = await daosDataFactory.deploy();
    await daosData.deployed();

    const usersDataFactory = await ethers.getContractFactory('UsersData');
    usersData = await usersDataFactory.deploy();
    await usersData.deployed();


    await (await cheers.setDaoPoolFactory(daoPoolFactory.address)).wait();
    await (await cheers.setUserPoolFactory(userPoolFactory.address)).wait();
    await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
    await(await daoPoolFactory.setDaosData(daosData.address)).wait();
    await(await userPoolFactory.setPoolListData(poolListData.address)).wait();
    await(await userPoolFactory.setUsersData(usersData.address)).wait();

    return { cheers, poolListData, daosData, usersData, deployer, user1, dao1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { cheers, poolListData, daosData, deployer, user1, dao1 } = await loadFixture(fixture);
    });
  });

  describe('newDaoPoolFactory test', function () {
    it("Should create a new dao's pool", async () => {
      const { cheers, poolListData, daosData, usersData, user1, dao1 } = await loadFixture(fixture);

      let getAllDaoList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(dao1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);

      let newDaoPoolFactory = await cheers.connect(dao1).newDaoPoolFactory("DAO1_Name", "DAO1_Profile", "DAO1_Icon");
      await newDaoPoolFactory.wait();

      getAllDaoList = await daosData.connect(dao1.address).getAllDaoList();

      expect(getAllDaoList.length).to.equal(1);

      expect(getAllDaoList[0][0]).to.equal(dao1.address);
      expect(getAllDaoList[0][1]).to.equal("DAO1_Name");
      expect(getAllDaoList[0][2]).to.equal("DAO1_Profile");
      expect(getAllDaoList[0][3]).to.equal("DAO1_Icon");

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.not.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(dao1.address);
    });
  });

  describe('newUserPoolFactory test', function () {
    it("Should create a new user's pool", async () => {
      const { cheers, poolListData, daosData, usersData, user1 } = await loadFixture(fixture);

      let getAllUserList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(user1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);

      let newUserPoolFactory = await cheers.connect(user1).newUserPoolFactory("USER1_Name", "USER1_Profile", "USER1_Icon");
      await newUserPoolFactory.wait();

      getAllUserList = await usersData.connect(user1.address).getAllUserList();

      expect(getAllUserList.length).to.equal(1);

      expect(getAllUserList[0][0]).to.equal(user1.address);
      expect(getAllUserList[0][1]).to.equal('USER1_Name');
      expect(getAllUserList[0][2]).to.equal('USER1_Profile');
      expect(getAllUserList[0][3]).to.equal('USER1_Icon');

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.not.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(user1.address);
    });
  });
});

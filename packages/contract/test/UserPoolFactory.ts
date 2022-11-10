import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { UserPoolFactory, PoolListData, UsersData } from '../types'

describe('UserPoolFactory', function () {

  let userPoolFactory: UserPoolFactory;
  let poolListData: PoolListData;
  let usersData: UsersData;

  async function fixture() {
    const [deployer, user1, user2, pool1, pool2] = await ethers.getSigners();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    const usersDataFactory = await ethers.getContractFactory('UsersData');
    usersData = await usersDataFactory.deploy();
    await usersData.deployed();

    const userPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
    userPoolFactory = await userPoolFactoryFactory.deploy();
    await userPoolFactory.deployed();

    await(await userPoolFactory.setPoolListData(poolListData.address)).wait();
    await(await userPoolFactory.setUsersData(usersData.address)).wait();

    return { userPoolFactory, usersData, poolListData, deployer, user1, user2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { userPoolFactory, deployer, user1 } = await loadFixture(fixture);
    });
  });

  describe('getAllUserList test', function () {
    it('Should initial poolAddress be zero address', async () => {
      const { usersData, user1 } = await loadFixture(fixture);

      let getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);
    });
  });

  describe('getMyPoolAddress test', function () {
    it("Should initial poolAddress be zero address", async () => {
      const { poolListData, user1 } = await loadFixture(fixture);

      let getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);
    });
  });

  describe('getSearchWalletAddress test', function () {
    it("Should initial getSearchWalletAddress be zero address", async () => {
      const { poolListData, user1 } = await loadFixture(fixture);

      let getSearchWalletAddress = await poolListData.getSearchWalletAddress(user1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
    });
  });

  describe('newUserPoolFactory test', function () {
    it("Should create a new user's pool", async () => {
      const { userPoolFactory, usersData, poolListData,deployer, user1 } = await loadFixture(fixture);

      let getAllUserList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(user1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
      
      const newDaoPoolAddress = await userPoolFactory.connect(user1).callStatic.newUserPoolFactory(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon");

      let newUserPoolFactory = await userPoolFactory.connect(user1).newUserPoolFactory(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon");
      await newUserPoolFactory.wait();

      getAllUserList = await usersData.connect(user1.address).getAllUserList();

      expect(getAllUserList.length).to.equal(1);

      expect(getAllUserList[0][0]).to.equal(user1.address);
      expect(getAllUserList[0][1]).to.equal('USER1_Name');
      expect(getAllUserList[0][2]).to.equal('USER1_Profile');
      expect(getAllUserList[0][3]).to.equal('USER1_Icon');

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(user1.address);
    });
  });

  describe('newUserPoolFactory test', function () {
    it("Should create new user's pools", async () => {
      const { userPoolFactory, usersData, poolListData, deployer, user1, user2 } = await loadFixture(fixture);

      let getAllUserList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(user1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
      
      let newDaoPoolAddress = await userPoolFactory.connect(user1).callStatic.newUserPoolFactory(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon");

      let newUserPoolFactory = await userPoolFactory.connect(user1).newUserPoolFactory(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon");
      await newUserPoolFactory.wait();

      getAllUserList = await usersData.connect(user1.address).getAllUserList();

      expect(getAllUserList.length).to.equal(1);

      expect(getAllUserList[0][0]).to.equal(user1.address);
      expect(getAllUserList[0][1]).to.equal('USER1_Name');
      expect(getAllUserList[0][2]).to.equal('USER1_Profile');
      expect(getAllUserList[0][3]).to.equal('USER1_Icon');

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(user1.address);

      
      newDaoPoolAddress = await userPoolFactory.connect(user2).callStatic.newUserPoolFactory(user2.address, "USER2_Name", "USER2_Profile", "USER2_Icon");

      newUserPoolFactory = await userPoolFactory.connect(user2).newUserPoolFactory(user2.address, "USER2_Name", "USER2_Profile", "USER2_Icon");
      await newUserPoolFactory.wait();

      getAllUserList = await usersData.connect(user2.address).getAllUserList();

      expect(getAllUserList.length).to.equal(2);

      expect(getAllUserList[1][0]).to.equal(user2.address);
      expect(getAllUserList[1][1]).to.equal('USER2_Name');
      expect(getAllUserList[1][2]).to.equal('USER2_Profile');
      expect(getAllUserList[1][3]).to.equal('USER2_Icon');

      getMyPoolAddress = await poolListData.getMyPoolAddress(user2.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(user2.address);
    });
  });
});

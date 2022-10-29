import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { UserPoolFactory, PoolListData, UsersData } from '../types'

describe('UserPoolFactory', function () {

  let userPoolFactory: UserPoolFactory;
  let poolListData: PoolListData;
  let usersData: UsersData;

  async function fixture() {
    const [deployer, user1, pool1, pool2] = await ethers.getSigners();

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

    return { userPoolFactory, deployer, user1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { userPoolFactory, deployer, user1 } = await loadFixture(fixture);
    });
  });

  describe('newUserPoolFactory test', function () {
    it("Should create a new user's pool", async () => {
      const { userPoolFactory, deployer, user1 } = await loadFixture(fixture);
      let newUserPoolFactory = await userPoolFactory.connect(user1).newUserPoolFactory("USER1_Name", "USER1_Profile", "USER1_Icon");
      await newUserPoolFactory.wait();
    });
  });
});

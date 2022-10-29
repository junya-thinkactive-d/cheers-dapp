import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPoolFactory, PoolListData, DaosData } from '../types'

describe('DaoPoolFactory', function () {

  let daoPoolFactory: DaoPoolFactory;
  let poolListData: PoolListData;
  let daosData: DaosData;

  async function fixture() {
    const [deployer, user1, pool1, pool2] = await ethers.getSigners();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    const daosDataFactory = await ethers.getContractFactory('DaosData');
    daosData = await daosDataFactory.deploy();
    await daosData.deployed();

    const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
    daoPoolFactory = await daoPoolFactoryFactory.deploy();
    await daoPoolFactory.deployed();

    await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
    await(await daoPoolFactory.setDaosData(daosData.address)).wait();

    return { daoPoolFactory, deployer, user1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { daoPoolFactory, deployer, user1 } = await loadFixture(fixture);
    });
  });

  describe('newDaoPoolFactory test', function () {
    it("Should create a new dao's pool", async () => {
      const { daoPoolFactory, deployer, user1 } = await loadFixture(fixture);
      let newDaoPoolFactory = await daoPoolFactory.connect(user1).newDaoPoolFactory("DAO1_Name", "DAO1_Profile", "DAO1_Icon");
      await newDaoPoolFactory.wait();
    });
  });
});

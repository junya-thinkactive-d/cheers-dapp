import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPoolFactory, PoolListData, DaosData } from '../types'

describe('DaoPoolFactory', function () {

  let daoPoolFactory: DaoPoolFactory;
  let poolListData: PoolListData;
  let daosData: DaosData;

  async function fixture() {
    const [deployer, dao1, dao2, pool1, pool2] = await ethers.getSigners();

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

    return { daoPoolFactory, daosData, poolListData, deployer, dao1, dao2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { daoPoolFactory, deployer, dao1 } = await loadFixture(fixture);
    });
  });

  describe('getAllDaoList test', function () {
    it("Should initial poolAddress be zero address", async () => {
      const { daosData, dao1 } = await loadFixture(fixture);

      let getAllDaoList = await daosData.connect(dao1.address).getAllDaoList();
      expect(getAllDaoList).to.deep.equal([]);
    });
  });

  describe('getMyPoolAddress test', function () {
    it("Should initial poolAddress be zero address", async () => {
      const { poolListData, dao1 } = await loadFixture(fixture);

      let getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);
    });
  });

  describe('getSearchWalletAddress test', function () {
    it("Should initial getSearchWalletAddress be zero address", async () => {
      const { poolListData, dao1 } = await loadFixture(fixture);

      let getSearchWalletAddress = await poolListData.getSearchWalletAddress(dao1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
    });
  });

  describe('newDaoPoolFactory test', function () {
    it("Should create a new dao's pool", async () => {
      const { daoPoolFactory, deployer, dao1 } = await loadFixture(fixture);

      let getAllDaoList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(dao1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
      
      const newDaoPoolAddress = await daoPoolFactory.connect(dao1).callStatic.newDaoPoolFactory(dao1.address,"DAO1_Name", "DAO1_Profile", "DAO1_Icon");

      let newDaoPoolFactory = await daoPoolFactory.connect(dao1).newDaoPoolFactory(dao1.address,"DAO1_Name", "DAO1_Profile", "DAO1_Icon");
      await newDaoPoolFactory.wait();

      getAllDaoList = await daosData.connect(dao1.address).getAllDaoList();

      expect(getAllDaoList.length).to.equal(1);

      expect(getAllDaoList[0][0]).to.equal(dao1.address);
      expect(getAllDaoList[0][1]).to.equal("DAO1_Name");
      expect(getAllDaoList[0][2]).to.equal("DAO1_Profile");
      expect(getAllDaoList[0][3]).to.equal("DAO1_Icon");

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(dao1.address);
    });
  });

  describe('newDaoPoolFactory test', function () {
    it("Should create new dao's pools", async () => {
      const { daoPoolFactory, deployer, dao1 ,dao2 } = await loadFixture(fixture);

      let getAllDaoList;
      let getMyPoolAddress;
      let getSearchWalletAddress;

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(dao1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);
      
      let newDaoPoolAddress = await daoPoolFactory.connect(dao1).callStatic.newDaoPoolFactory(dao1.address,"DAO1_Name", "DAO1_Profile", "DAO1_Icon");

      let newDaoPoolFactory = await daoPoolFactory.connect(dao1).newDaoPoolFactory(dao1.address,"DAO1_Name", "DAO1_Profile", "DAO1_Icon");
      await newDaoPoolFactory.wait();

      getAllDaoList = await daosData.connect(dao1.address).getAllDaoList();

      expect(getAllDaoList.length).to.equal(1);

      expect(getAllDaoList[0][0]).to.equal(dao1.address);
      expect(getAllDaoList[0][1]).to.equal("DAO1_Name");
      expect(getAllDaoList[0][2]).to.equal("DAO1_Profile");
      expect(getAllDaoList[0][3]).to.equal("DAO1_Icon");

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao1.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(dao1.address);

      
      
      newDaoPoolAddress = await daoPoolFactory.connect(dao2).callStatic.newDaoPoolFactory(dao2.address,"DAO2_Name", "DAO2_Profile", "DAO2_Icon");

      newDaoPoolFactory = await daoPoolFactory.connect(dao2).newDaoPoolFactory(dao2.address,"DAO2_Name", "DAO2_Profile", "DAO2_Icon");
      await newDaoPoolFactory.wait();

      getAllDaoList = await daosData.connect(dao2.address).getAllDaoList();

      expect(getAllDaoList.length).to.equal(2);

      expect(getAllDaoList[1][0]).to.equal(dao2.address);
      expect(getAllDaoList[1][1]).to.equal("DAO2_Name");
      expect(getAllDaoList[1][2]).to.equal("DAO2_Profile");
      expect(getAllDaoList[1][3]).to.equal("DAO2_Icon");

      getMyPoolAddress = await poolListData.getMyPoolAddress(dao2.address);
      expect(getMyPoolAddress).to.equal(newDaoPoolAddress);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(dao2.address);
    });
  });
});

import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPool, Cheers } from '../types'

describe('DaoPool', function () {

  let daoPool: DaoPool;
  let cheers: Cheers;

  async function fixture() {
    const [deployer, dao1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const daoPoolFactory = await ethers.getContractFactory('DaoPool');
    daoPool = await daoPoolFactory.deploy(dao1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
    await daoPool.deployed();

    return { daoPool, cheers, deployer, dao1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { daoPool, cheers, deployer, dao1 } = await loadFixture(fixture);
    });
  });

  describe('getDaoPoolAddress test', function () {
    it("Should get dao's pool address", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoPoolAddress = await daoPool.getDaoPoolAddress();
      expect(getDaoPoolAddress).to.equal(daoPool.address);
    });
  });

  describe('getDaoAddress test', function () {
    it("Should get dao's address", async () => {
      const { daoPool, dao1 } = await loadFixture(fixture);

      const getDaoAddress = await daoPool.getDaoAddress();
      expect(getDaoAddress).to.equal(dao1.address);
    });
  });

  describe('getDaoName test', function () {
    it("Should get dao's name", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoName = await daoPool.getDaoName();
      expect(getDaoName).to.equal("DAO1_Name");
    });
  });

  describe('getDaoProfile test', function () {
    it("Should get dao's profile", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoProfile = await daoPool.getDaoProfile();
      expect(getDaoProfile).to.equal("DAO1_Profile");
    });
  });

  describe('getDaoIcon test', function () {
    it("Should get dao's icon", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoIcon = await daoPool.getDaoIcon();
      expect(getDaoIcon).to.equal("DAO1_Icon");
    });
  });
});

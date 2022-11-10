import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { PoolListData } from '../types'

describe('PoolListData', function () {

  let poolListData: PoolListData;

  async function fixture() {
    const [deployer, user1, pool1, pool2] = await ethers.getSigners();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    return { poolListData, deployer, user1, pool1, pool2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { poolListData, deployer, user1, pool1, pool2 } = await loadFixture(fixture);
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

  describe('addMyPoolAddress test', function () {
    it("Should add poolAddress", async () => {
      const { poolListData, user1, pool1 } = await loadFixture(fixture);

      let getMyPoolAddress;
      let getSearchWalletAddress;
      let addMyPoolAddress;

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(ethers.constants.AddressZero);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(user1.address);
      expect(getSearchWalletAddress).to.equal(ethers.constants.AddressZero);

      addMyPoolAddress = await poolListData.addMyPoolAddress(user1.address, pool1.address);
      await addMyPoolAddress.wait();

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(pool1.address);

      getSearchWalletAddress = await poolListData.getSearchWalletAddress(getMyPoolAddress);
      expect(getSearchWalletAddress).to.equal(user1.address);
    });

    it("Should change poolAddress", async () => {
      const { poolListData, user1, pool1, pool2 } = await loadFixture(fixture);

      let getMyPoolAddress;
      let addMyPoolAddress;

      addMyPoolAddress = await poolListData.addMyPoolAddress(user1.address, pool1.address);
      await addMyPoolAddress.wait();

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(pool1.address);

      addMyPoolAddress = await poolListData.addMyPoolAddress(user1.address, pool2.address);
      await addMyPoolAddress.wait();

      getMyPoolAddress = await poolListData.getMyPoolAddress(user1.address);
      expect(getMyPoolAddress).to.equal(pool2.address);
    });
  });
});
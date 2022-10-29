import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { UserPool, Cheers } from '../types'

describe('UserPool', function () {

  let userPool: UserPool;
  let cheers: Cheers;

  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const userPoolFactory = await ethers.getContractFactory('UserPool');
    userPool = await userPoolFactory.deploy(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon", cheers.address);
    await userPool.deployed();

    return { userPool, cheers, deployer, user1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { userPool, cheers, deployer, user1 } = await loadFixture(fixture);
    });
  });

  describe('getUserPoolAddress test', function () {
    it("Should get user's pool address", async () => {
      const { userPool } = await loadFixture(fixture);

      const getUserPoolAddress = await userPool.getUserPoolAddress();
      expect(getUserPoolAddress).to.equal(userPool.address);
    });
  });

  describe('getUserAddress test', function () {
    it("Should get user's address", async () => {
      const { userPool, user1 } = await loadFixture(fixture);

      const getUserAddress = await userPool.getUserAddress();
      expect(getUserAddress).to.equal(user1.address);
    });
  });

  describe('getUserName test', function () {
    it("Should get user's name", async () => {
      const { userPool } = await loadFixture(fixture);

      const getUserName = await userPool.getUserName();
      expect(getUserName).to.equal("USER1_Name");
    });
  });

  describe('getUserProfile test', function () {
    it("Should get user's profile", async () => {
      const { userPool } = await loadFixture(fixture);

      const getUserProfile = await userPool.getUserProfile();
      expect(getUserProfile).to.equal("USER1_Profile");
    });
  });

  describe('getUserIcon test', function () {
    it("Should get user's icon", async () => {
      const { userPool } = await loadFixture(fixture);

      const getUserIcon = await userPool.getUserIcon();
      expect(getUserIcon).to.equal("USER1_Icon");
    });
  });
});

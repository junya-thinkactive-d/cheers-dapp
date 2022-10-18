import { time, loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Cheers', function () {
  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();
    const cheersFactory = await ethers.getContractFactory('Cheers');
    const cheers = await cheersFactory.deploy();

    return { cheers, deployer, user1 };
  }

  describe('Run test', function () {
    it('Should run test', async () => {
    });
  });

  describe('Run test', function () {
    it('Should run test', async () => {
      const [deployer, user1] = await ethers.getSigners();
      const cheersFactory = await ethers.getContractFactory('Cheers');
      const cheers = await cheersFactory.deploy();
    });
  });
});

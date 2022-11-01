import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import exp from 'constants';
import { ethers } from 'hardhat';
import { CHERToken, CherFaucet } from '../types'

describe('CherFaucet', function () {

  let CHER: CHERToken;
  let cherFaucet: CherFaucet;

  async function fixture() {
    const [deployer, CHERDeployer, user1, user2 ] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(5000);
    await CHER.deployed();

    const cherFaucetFactory = await ethers.getContractFactory('CherFaucet');
    cherFaucet = await cherFaucetFactory.deploy();
    await cherFaucet.deployed();

    const setCHER = await cherFaucet.setCHER(CHER.address);
    await setCHER.wait();

    return { CHER, cherFaucet, deployer, CHERDeployer, user1, user2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { CHER, cherFaucet, deployer, CHERDeployer, user1, user2 } = await loadFixture(fixture);
    });
  });

  describe('setOwner test', function () {
    it('Should check CHER address', async () => {
      const { CHER, cherFaucet } = await loadFixture(fixture);

      const CHER_CONTRACT_ADDRESS = await cherFaucet.CHER_CONTRACT_ADDRESS();
      expect(CHER_CONTRACT_ADDRESS).to.equal(CHER.address);
    });
  });

  describe('setOwner test', function () {
    it('Should set new owner of CherFaucet', async () => {
      const { cherFaucet, deployer, user1 } = await loadFixture(fixture);

      const setOwner = await cherFaucet.connect(deployer).setOwner(user1.address);
      await setOwner.wait();
    });
  });

  describe('balanceOf test', function () {
    it('Should check CHERs balance of CHER', async () => {
      const { CHER, cherFaucet, CHERDeployer, user1 } = await loadFixture(fixture);

      let balanceOf;
      balanceOf = await CHER.balanceOf(CHERDeployer.address);
      expect(balanceOf).to.equal(5000);
    });
  });

  describe('transfer test', function () {
    it('Should transfer CHERs to CherFaucet', async () => {
      const { CHER, cherFaucet, CHERDeployer } = await loadFixture(fixture);

      let balanceOf;
      balanceOf = await CHER.balanceOf(CHERDeployer.address);
      expect(balanceOf).to.equal(5000);

      let transfer;
      transfer = await CHER.connect(CHERDeployer).transfer(cherFaucet.address, 5000);
      await transfer.wait();

      balanceOf = await CHER.balanceOf(CHERDeployer.address);
      expect(balanceOf).to.equal(0);
    });
  });

  describe('getFaucetBalance test', function () {
    it('Should get CHERs balance of CherFaucet', async () => {
      const { CHER, cherFaucet, CHERDeployer, user1 } = await loadFixture(fixture);

      let getFaucetBalance;
      getFaucetBalance = await cherFaucet.getFaucetBalance();
      expect(getFaucetBalance).to.equal(0);
    });
  });

  describe('faucet test', function () {
    it('Should faucet CHERs from CherFaucet', async () => {
      const { CHER, cherFaucet, CHERDeployer, user1 } = await loadFixture(fixture);

      let transfer;
      transfer = await CHER.connect(CHERDeployer).transfer(cherFaucet.address, 5000);
      await transfer.wait();

      let getFaucetBalance;
      getFaucetBalance = await cherFaucet.getFaucetBalance();
      expect(getFaucetBalance).to.equal(5000);

      const faucet = await cherFaucet.connect(user1).faucet({ value: 1 });
      await faucet.wait();

      getFaucetBalance = await cherFaucet.getFaucetBalance();
      expect(getFaucetBalance).to.equal(4000);
    });
  });

  describe('withdraw test', function () {
    it('Should withdraw all CHERs from CherFaucet', async () => {
      const { CHER, cherFaucet, CHERDeployer, deployer } = await loadFixture(fixture);

      let transfer;
      transfer = await CHER.connect(CHERDeployer).transfer(cherFaucet.address, 5000);
      await transfer.wait();

      let getFaucetBalance;
      getFaucetBalance = await cherFaucet.getFaucetBalance();
      expect(getFaucetBalance).to.equal(5000);

      const withdraw = await cherFaucet.connect(deployer).withdraw();
      await withdraw.wait();

      getFaucetBalance = await cherFaucet.getFaucetBalance();
      expect(getFaucetBalance).to.equal(0);
    });
  });
});

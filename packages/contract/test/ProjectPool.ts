import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ProjectPool, PoolListData, DaoPool, CHERToken } from '../types'

describe('ProjectPool', function () {

  let projectPool: ProjectPool;
  let poolListData: PoolListData;
  let daoPool: DaoPool;
  let daoPool2: DaoPool;
  let daoPool3: DaoPool;
  let CHER: CHERToken;

  async function fixture() {
    const [deployer, CHERDeployer, cheers, user1, dao1, dao2, dao3] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(1000);
    await CHER.deployed();

    let transfer;
    transfer = await CHER.transfer(user1.address, 200);
    await transfer.wait();

    transfer = await CHER.transfer(dao1.address, 200);
    await transfer.wait();

    transfer = await CHER.transfer(dao2.address, 200);
    await transfer.wait();

    transfer = await CHER.transfer(dao3.address, 200);
    await transfer.wait();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    const daoPoolFactory = await ethers.getContractFactory('DaoPool');
    daoPool = await daoPoolFactory.deploy(dao1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
    await daoPool.deployed();

    daoPool2 = await daoPoolFactory.deploy(dao2.address, "DAO2_Name", "DAO2_Profile", "DAO2_Icon", cheers.address);
    await daoPool2.deployed();

    daoPool3 = await daoPoolFactory.deploy(dao3.address, "DAO3_Name", "DAO3_Profile", "DAO3_Icon", cheers.address);
    await daoPool3.deployed();

    const projectPoolFactory = await ethers.getContractFactory('ProjectPool');
    projectPool = await projectPoolFactory.deploy(user1.address, dao1.address, "Project_Name", "Project_Contents", "Project_Reword");
    await projectPool.deployed();

    let setCHER;
    setCHER = await daoPool.setCHER(CHER.address);
    await setCHER.wait();
    setCHER = await daoPool2.setCHER(CHER.address);
    await setCHER.wait();
    setCHER = await daoPool3.setCHER(CHER.address);
    await setCHER.wait();

    setCHER = await projectPool.setCHER(CHER.address);
    await setCHER.wait();

    const setPoolListData = await projectPool.setPoolListData(poolListData.address);
    await setPoolListData.wait();

    return { CHER, projectPool, poolListData, daoPool, daoPool2, cheers, deployer, user1, dao1, dao2, dao3 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { CHER, projectPool, deployer, user1, dao1 } = await loadFixture(fixture);
    });
  });

  describe('cher address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { projectPool } = await loadFixture(fixture);

      const cherAddress = await projectPool.cher();
      expect(cherAddress).to.equal(CHER.address);
    });
  });

  describe('poolListData address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { projectPool } = await loadFixture(fixture);

      const poolListDataAddress = await projectPool.poolListData();
      expect(poolListDataAddress).to.equal(poolListData.address);
    });
  });

  describe('getAllCheers test', function () {
    it("Should get all cheers", async () => {
      const { projectPool } = await loadFixture(fixture);

      const getAllCheers = await projectPool.getAllCheers();
      expect(getAllCheers).to.deep.equal([]);
    });
  });

  describe('getTotalCher test', function () {
    it("Should get all cheers", async () => {
      const { projectPool } = await loadFixture(fixture);

      const getTotalCher = await projectPool.getTotalCher();
      expect(getTotalCher).to.equal(0);
    });
  });

  describe('mintCheer test', function () {
    it("Should cheer the project and distribute CHER to supporters", async () => {
      const { projectPool, daoPool2, poolListData, user1, dao1, dao2, dao3 } = await loadFixture(fixture);

      let transfer;
      transfer = await CHER.connect(dao2).transfer(daoPool2.address, 200);
      await transfer.wait();
      transfer = await CHER.connect(dao3).transfer(daoPool3.address, 200);
      await transfer.wait();

      let approve;
      approve = await daoPool2.connect(dao2).approveCherToProjectPool(projectPool.address, 200);
      await approve.wait();
      approve = await daoPool3.connect(dao3).approveCherToProjectPool(projectPool.address, 200);
      await approve.wait();

      let allowance;
      allowance = await CHER.allowance(daoPool2.address, projectPool.address);
      expect(allowance).to.equal(200);
      allowance = await CHER.allowance(daoPool3.address, projectPool.address);
      expect(allowance).to.equal(200);

      let addMyPoolAddress;
      addMyPoolAddress = await poolListData.addMyPoolAddress(dao2.address, daoPool2.address);
      await addMyPoolAddress.wait();
      expect(await poolListData.getMyPoolAddress(dao2.address)).to.equal(daoPool2.address);
      addMyPoolAddress = await poolListData.addMyPoolAddress(dao3.address, daoPool3.address);
      await addMyPoolAddress.wait();
      expect(await poolListData.getMyPoolAddress(dao3.address)).to.equal(daoPool3.address);

      let mintCheer;
      mintCheer = await projectPool.connect(dao2).mintCheer(100, "ガンバッテ！");
      await mintCheer.wait();
      mintCheer = await projectPool.connect(dao3).mintCheer(100, "ファイト！");
      await mintCheer.wait();

      let balanceOf;
      balanceOf = await CHER.balanceOf(projectPool.address);
      expect(balanceOf).to.equal(0);

      const getAllCheers = await projectPool.getAllCheers();

      expect(getAllCheers.length).to.equal(2);

      expect(getAllCheers[0].cheerPoolAddress).to.equal(daoPool2.address);
      expect(getAllCheers[0].message).to.equal("ガンバッテ！");
      expect(getAllCheers[0].cher).to.equal(100);

      expect(getAllCheers[1].cheerPoolAddress).to.equal(daoPool3.address);
      expect(getAllCheers[1].message).to.equal("ファイト！");
      expect(getAllCheers[1].cher).to.equal(100);

      balanceOf = await CHER.balanceOf(daoPool2.address);
      console.log(balanceOf);
      balanceOf = await CHER.balanceOf(daoPool3.address);
      console.log(balanceOf);
      balanceOf = await CHER.balanceOf(user1.address);
      console.log(balanceOf);
      balanceOf = await CHER.balanceOf(dao1.address);
      console.log(balanceOf);

      // let getTotalCher;
      // getTotalCher = await projectPool.getTotalCher();
      // expect(getTotalCher).to.equal(200);
    });
  });
});

import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPool, Cheers, ProjectsData, CHERToken } from '../types'

describe('DaoPool', function () {

  let daoPool: DaoPool;
  let cheers: Cheers;
  let projectsData: ProjectsData;
  let CHER: CHERToken;

  async function fixture() {
    const [deployer, CHERDeployer, dao1, dao2, projectPool1] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(200);
    await CHER.deployed();

    const transfer = await CHER.transfer(dao1.address, 100);
    await transfer.wait();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const projectsDataFactory = await ethers.getContractFactory('ProjectsData');
    projectsData = await projectsDataFactory.deploy();
    await projectsData.deployed();

    const daoPoolFactory = await ethers.getContractFactory('DaoPool');
    daoPool = await daoPoolFactory.deploy(dao1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
    await daoPool.deployed();

    const setCHER = await daoPool.setCHER(CHER.address);
    await setCHER.wait();

    const setProjectsData = await daoPool.setProjectsData(projectsData.address);
    await setProjectsData.wait();

    return { CHER, daoPool, cheers, deployer, dao1, dao2, projectPool1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { CHER, daoPool, cheers, deployer, dao1 } = await loadFixture(fixture);
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
      const { CHER, daoPool, dao1 } = await loadFixture(fixture);

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

  describe('balance of Dao1 test', function () {
    it("Should CHER's balance of dao1 be 100", async () => {
      const { CHER, dao1 } = await loadFixture(fixture);

      const balanceOf = await CHER.balanceOf(dao1.address);
      expect(balanceOf).to.equal(100);
    });
  });

  describe('cher address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { daoPool } = await loadFixture(fixture);

      const cherAddress = await daoPool.cher();
      expect(cherAddress).to.equal(CHER.address);
    });
  });

  describe('chargeCher test', function () {
    it("Should charge 10CHER to DAO pool", async () => {
      const { daoPool, CHER, dao1 } = await loadFixture(fixture);

      let balanceOf;
      balanceOf = await CHER.balanceOf(daoPool.address);
      expect(balanceOf).to.equal(0);

      const approve = await CHER.connect(dao1).approve(daoPool.address, 10);
      await approve.wait();

      const chargeCher = await daoPool.connect(dao1).chargeCher(10);
      await chargeCher.wait();

      balanceOf = await CHER.balanceOf(daoPool.address);
      expect(balanceOf).to.equal(10);
    });
  });

  describe('withdrawCher test', function () {
    it("Should withdraw 10CHER from DAO pool", async () => {
      const { daoPool, CHER, dao1 } = await loadFixture(fixture);

      const approve = await CHER.connect(dao1).approve(daoPool.address, 10);
      await approve.wait();

      const chargeCher = await daoPool.connect(dao1).chargeCher(10);
      await chargeCher.wait();

      let balanceOf;
      balanceOf = await CHER.balanceOf(daoPool.address);
      expect(balanceOf).to.equal(10);

      const withdrawCher = await daoPool.connect(dao1).withdrawCher(10);
      await withdrawCher.wait();

      balanceOf = await CHER.balanceOf(daoPool.address);
      expect(balanceOf).to.equal(0);
    });
  });

  describe('getAllChallengeProjects test', function () {
    it("Should get all projects supported by DaoPool", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getAllChallengeProjects = await daoPool.getAllChallengeProjects();
      expect(getAllChallengeProjects).to.deep.equal([]);
    });
  });

  describe('newProjectFactory test', function () {
    it("Should create a new project", async () => {
      const { daoPool, dao1 } = await loadFixture(fixture);

      let getAllChallengeProjects;
      getAllChallengeProjects = await daoPool.getAllChallengeProjects();
      expect(getAllChallengeProjects).to.deep.equal([]);

      const newProjectFactory = await daoPool.connect(dao1).newProjectFactory("Project1_Name", "Project1_Contents", "Project1_Reword");
      await newProjectFactory.wait();

      getAllChallengeProjects = await daoPool.getAllChallengeProjects();

      expect(getAllChallengeProjects.length).to.equal(1);

      // expect(getAllChallengeProjects[0][0]).to.equal(newProjectFactory);
      expect(getAllChallengeProjects[0][1]).to.equal(daoPool.address);
      expect(getAllChallengeProjects[0][2]).to.equal("Project1_Name");
      expect(getAllChallengeProjects[0][3]).to.equal("Project1_Contents");
      expect(getAllChallengeProjects[0][4]).to.equal("Project1_Reword");
    });
  });

  describe('addCheerProject test', function () {
    it("Should add a CheerProject by DaoPool", async () => {
      const { daoPool, projectPool1 } = await loadFixture(fixture);

      const addCheerProject = await daoPool.addCheerProject(projectPool1.address);
      await addCheerProject.wait();

      const isCheer = await daoPool.isCheer(projectPool1.address);
      expect(isCheer).to.equal(true);
    });
  });

  describe('removeCheerProject test', function () {
    it("Should remove a CheerProject by DaoPool", async () => {
      const { daoPool, projectPool1 } = await loadFixture(fixture);

      const addCheerProject = await daoPool.addCheerProject(projectPool1.address);
      await addCheerProject.wait();

      const removeCheerProject = await daoPool.removeCheerProject(projectPool1.address);
      await removeCheerProject.wait();

      const isCheer = await daoPool.isCheer(projectPool1.address);
      expect(isCheer).to.equal(false);
    });
  });

  describe('approveCherToProjectPool test', function () {
    it("Should approve CHER transfer by project pool", async () => {
      const { daoPool, dao1, projectPool1 } = await loadFixture(fixture);

      let transfer;
      transfer = await CHER.connect(dao1).transfer(daoPool.address, 10);

      let balanceOf;
      balanceOf = await CHER.balanceOf(daoPool.address);
      expect(balanceOf).to.equal(10);

      balanceOf = await CHER.balanceOf(projectPool1.address);
      expect(balanceOf).to.equal(0);

      const approveCherToProjectPool = await daoPool.connect(dao1).approveCherToProjectPool(projectPool1.address, 10);
      await approveCherToProjectPool.wait();

      transfer = await CHER.connect(projectPool1).transferFrom(daoPool.address, projectPool1.address, 10);

      balanceOf = await CHER.balanceOf(projectPool1.address);
      expect(balanceOf).to.equal(10);
    });
  });
});

import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { UserPool, Cheers, ProjectsData, CHERToken  } from '../types'

describe('UserPool', function () {

  let userPool: UserPool;
  let cheers: Cheers;
  let projectsData: ProjectsData;
  let CHER: CHERToken;

  async function fixture() {
    const [deployer, CHERDeployer, user1, user2, projectPool1, daoPool1 ] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(200);
    await CHER.deployed();

    const transfer = await CHER.transfer(user1.address, 100);
    await transfer.wait();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const projectsDataFactory = await ethers.getContractFactory('ProjectsData');
    projectsData = await projectsDataFactory.deploy();
    await projectsData.deployed();

    const userPoolFactory = await ethers.getContractFactory('UserPool');
    userPool = await userPoolFactory.deploy(user1.address, "USER1_Name", "USER1_Profile", "USER1_Icon", cheers.address);
    await userPool.deployed();

    const setCHER = await userPool.setCHER(CHER.address);
    await setCHER.wait();

    const setProjectsData = await userPool.setProjectsData(projectsData.address);
    await setProjectsData.wait();

    return { CHER, userPool, cheers, deployer, user1, user2, projectPool1, daoPool1 };
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

  describe('balance of Dao1 test', function () {
    it("Should CHER's balance of user1 be 100", async () => {
      const { CHER, user1 } = await loadFixture(fixture);

      const balanceOf = await CHER.balanceOf(user1.address);
      expect(balanceOf).to.equal(100);
    });
  });

  describe('cher address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { userPool } = await loadFixture(fixture);

      const cherAddress = await userPool.cher();
      expect(cherAddress).to.equal(CHER.address);
    });
  });

  describe('chargeCher test', function () {
    it("Should charge 10CHER to User pool", async () => {
      const { userPool, CHER, user1 } = await loadFixture(fixture);

      let balanceOf;
      balanceOf = await CHER.balanceOf(userPool.address);
      expect(balanceOf).to.equal(0);

      const approve = await CHER.connect(user1).approve(userPool.address, 10);
      await approve.wait();

      const chargeCher = await userPool.connect(user1).chargeCher(10);
      await chargeCher.wait();

      balanceOf = await CHER.balanceOf(userPool.address);
      expect(balanceOf).to.equal(10);
    });
  });

  describe('withdrawCher test', function () {
    it("Should withdraw 10CHER from User pool", async () => {
      const { userPool, CHER, user1 } = await loadFixture(fixture);

      const approve = await CHER.connect(user1).approve(userPool.address, 10);
      await approve.wait();

      const chargeCher = await userPool.connect(user1).chargeCher(10);
      await chargeCher.wait();

      let balanceOf;
      balanceOf = await CHER.balanceOf(userPool.address);
      expect(balanceOf).to.equal(10);

      const withdrawCher = await userPool.connect(user1).withdrawCher(10);
      await withdrawCher.wait();

      balanceOf = await CHER.balanceOf(userPool.address);
      expect(balanceOf).to.equal(0);
    });
  });

  describe('getAllChallengeProjects test', function () {
    it("Should get all projects supported by UserPool", async () => {
      const { userPool } = await loadFixture(fixture);

      const getAllChallengeProjects = await userPool.getAllChallengeProjects();
      expect(getAllChallengeProjects).to.deep.equal([]);
    });
  });

  describe('newProjectFactory test', function () {
    it("Should create a new project", async () => {
      const { userPool, user1, daoPool1 } = await loadFixture(fixture);

      let getAllChallengeProjects;
      getAllChallengeProjects = await userPool.getAllChallengeProjects();
      expect(getAllChallengeProjects).to.deep.equal([]);

      const newProjectFactory = await userPool.connect(user1).newProjectFactory(daoPool1.address,"Project1_Name", "Project1_Contents", "Project1_Reword");
      await newProjectFactory.wait();

      getAllChallengeProjects = await userPool.getAllChallengeProjects();

      expect(getAllChallengeProjects.length).to.equal(1);

      // // expect(getAllChallengeProjects[0][0]).to.equal(newProjectFactory);
      expect(getAllChallengeProjects[0][1]).to.equal(daoPool1.address);
      expect(getAllChallengeProjects[0][2]).to.equal("Project1_Name");
      expect(getAllChallengeProjects[0][3]).to.equal("Project1_Contents");
      expect(getAllChallengeProjects[0][4]).to.equal("Project1_Reword");
    });
  });

  describe('addCheerProject test', function () {
    it("Should add a CheerProject by DaoPool", async () => {
      const { userPool, projectPool1 } = await loadFixture(fixture);

      const addCheerProject = await userPool.addCheerProject(projectPool1.address);
      const aaa = await addCheerProject.wait();

      const isCheer = await userPool.isCheer(projectPool1.address);
      expect(isCheer).to.equal(true);
    });
  });

  describe('removeCheerProject test', function () {
    it("Should remove a CheerProject by UserPool", async () => {
      const { userPool, projectPool1 } = await loadFixture(fixture);

      const addCheerProject = await userPool.addCheerProject(projectPool1.address);
      await addCheerProject.wait();

      const removeCheerProject = await userPool.removeCheerProject(projectPool1.address);
      await removeCheerProject.wait();

      const isCheer = await userPool.isCheer(projectPool1.address);
      expect(isCheer).to.equal(false);
    });
  });

  describe('approveCherToProjectPool test', function () {
    it("Should approve CHER transfer by project pool", async () => {
      const { userPool, user1, projectPool1 } = await loadFixture(fixture);

      let transfer;
      transfer = await CHER.connect(user1).transfer(userPool.address, 10);

      let balanceOf;
      balanceOf = await CHER.balanceOf(userPool.address);
      expect(balanceOf).to.equal(10);

      balanceOf = await CHER.balanceOf(projectPool1.address);
      expect(balanceOf).to.equal(0);

      const approveCherToProjectPool = await userPool.connect(user1).approveCherToProjectPool(projectPool1.address, 10);
      await approveCherToProjectPool.wait();

      transfer = await CHER.connect(projectPool1).transferFrom(userPool.address, projectPool1.address, 10);

      balanceOf = await CHER.balanceOf(projectPool1.address);
      expect(balanceOf).to.equal(10);
    });
  });
});

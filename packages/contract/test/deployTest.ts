import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { CherFaucet, UsersData, DaosData, ProjectsData, PoolListData, UserPoolFactory, DaoPoolFactory, Cheers } from '../types';

describe('deployTest', function () {
    let cherFaucet: CherFaucet;
  
    let usersData: UsersData;
    let daosData: DaosData;
    let projectsData: ProjectsData;
    let poolListData: PoolListData;
    
    let userPoolFactory: UserPoolFactory;
    let daoPoolFactory: DaoPoolFactory;
    let cheers: Cheers;

  async function fixture() {
    const [deployer] = await ethers.getSigners();
  

  const cherFaucetFactory = await ethers.getContractFactory("CherFaucet");
  cherFaucet = await cherFaucetFactory.deploy();
  await cherFaucet.deployed();
  console.log("CherFaucet deployed to:", cherFaucet.address);


  const usersDataFactory = await ethers.getContractFactory("UsersData");
  usersData = await usersDataFactory.deploy();
  await usersData.deployed();
  console.log("UsersData deployed to:", usersData.address);

  const daosDataFactory = await ethers.getContractFactory('DaosData');
  daosData = await daosDataFactory.deploy();
  await daosData.deployed();
  console.log("DaosData deployed to:", daosData.address);

  const projectsDataFactory = await ethers.getContractFactory('ProjectsData');
  projectsData = await projectsDataFactory.deploy();
  await projectsData.deployed();
  console.log("ProjectsData deployed to:", projectsData.address);

  const poolListDataFactory = await ethers.getContractFactory('PoolListData');
  poolListData = await poolListDataFactory.deploy();
  await poolListData.deployed();
  console.log("PoolListData deployed to:", poolListData.address);


  const userPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
  userPoolFactory = await userPoolFactoryFactory.deploy();
  await userPoolFactory.deployed();
  console.log("UserPoolFactory deployed to:", userPoolFactory.address);

  const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
  daoPoolFactory = await daoPoolFactoryFactory.deploy();
  await daoPoolFactory.deployed();
  console.log("DaoPoolFactory deployed to:", daoPoolFactory.address);

  let setPoolListData;
  setPoolListData = await daoPoolFactory.setPoolListData(poolListData.address);
  await setPoolListData.wait();
  

  const cheersFactory = await ethers.getContractFactory('Cheers');
  cheers = await cheersFactory.deploy();
  await cheers.deployed();
  console.log("Cheers deployed to:", cheers.address);

  const setDaoPoolFactory = await cheers.setDaoPoolFactory(daoPoolFactory.address);
  await setDaoPoolFactory.wait();

  const setUserPoolFactory = await cheers.setUserPoolFactory(userPoolFactory.address);
  await setUserPoolFactory.wait();


    return { cherFaucet, usersData, daosData, projectsData, poolListData, userPoolFactory, daoPoolFactory, cheers, deployer };
  }

  describe('Deploy test', async () => {
    it('Should deploy', async () => {
      const { cherFaucet, usersData, daosData, projectsData, poolListData, userPoolFactory, daoPoolFactory, cheers, deployer } = await loadFixture(fixture);
    });
  });

  describe('removeCheerProject test', async () => {

    const { cherFaucet, usersData, daosData, projectsData, poolListData, userPoolFactory, daoPoolFactory, cheers, deployer } = await loadFixture(fixture);

    it('Should remove a CheerProject by DaoPool', async () => {

      const addCheerProject = await daoPool.addCheerProject(projectPool1.address);
      await addCheerProject.wait();

      const removeCheerProject = await daoPool.removeCheerProject(projectPool1.address);
      await removeCheerProject.wait();

      const isCheer = await daoPool.isCheer(projectPool1.address);
      expect(isCheer).to.equal(false);
    });
  });
});

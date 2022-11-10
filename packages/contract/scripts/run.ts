import { ethers } from "hardhat";
import { CherFaucet, CheerListData, UsersData, DaosData, ProjectsData, PoolListData, UserPoolFactory, DaoPoolFactory, Cheers } from '../types';

async function main() {
    
  let cherFaucet: CherFaucet;

  let cheerListData: CheerListData;
  let usersData: UsersData;
  let daosData: DaosData;
  let projectsData: ProjectsData;
  let poolListData: PoolListData;
  
  let userPoolFactory: UserPoolFactory;
  let daoPoolFactory: DaoPoolFactory;
  let cheers: Cheers;
        
  const cherFaucetFactory = await ethers.getContractFactory("CherFaucet");
  cherFaucet = await cherFaucetFactory.deploy();
  await cherFaucet.deployed();
  console.log("CherFaucet deployed to:", cherFaucet.address);


  const cheerListDataFactory = await ethers.getContractFactory("CheerListData");
  cheerListData = await cheerListDataFactory.deploy();
  await cheerListData.deployed();
  console.log("CheerListData deployed to:", cheerListData.address);

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
  
  const cheersFactory = await ethers.getContractFactory('Cheers');
  cheers = await cheersFactory.deploy();
  await cheers.deployed();
  console.log("Cheers deployed to:", cheers.address);

  await (await cheers.setDaoPoolFactory(daoPoolFactory.address)).wait();
  await (await cheers.setUserPoolFactory(userPoolFactory.address)).wait();
  // await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
  // await(await daoPoolFactory.setDaosData(daosData.address)).wait();
  // await(await userPoolFactory.setPoolListData(poolListData.address)).wait();
  // await(await userPoolFactory.setUsersData(usersData.address)).wait();

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
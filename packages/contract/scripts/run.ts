import { ethers } from "hardhat";
import { CHERToken, UsersData, DaosData, ProjectsData, PoolListData } from '../types';

async function main() {
  let cherToken: CHERToken;
  let usersData: UsersData;
  let daosData: DaosData;
  let projectsData: ProjectsData;
  let poolListData: PoolListData;

  const cherTokenFactory = await ethers.getContractFactory("CHERToken");
  cherToken = await cherTokenFactory.deploy(1000);
  await cherToken.deployed();
  console.log("CHERToken deployed to:", cherToken.address);

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


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

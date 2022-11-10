import { ethers } from "hardhat";
import { CherFaucet, CheerListData, UsersData, DaosData, ProjectsData, PoolListData } from '../types';

async function main() {
    
  // let cherFaucet: CherFaucet;

  let cheerListData: CheerListData;
  let usersData: UsersData;
  let daosData: DaosData;
  let projectsData: ProjectsData;
  let poolListData: PoolListData;
        
  // const cherFaucetFactory = await ethers.getContractFactory("CherFaucet");
  // cherFaucet = await cherFaucetFactory.deploy();
  // await cherFaucet.deployed();
  // console.log("CherFaucet deployed to:", cherFaucet.address);


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

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
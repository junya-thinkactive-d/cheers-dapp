import { ethers } from "hardhat";
import { DaoPool, ProjectPool, UserPool } from '../types';

async function main() {

  let daoPool: DaoPool;
  let projectPool: ProjectPool;
  let userPool: UserPool;
        
  const daoPoolFactory = await ethers.getContractFactory("DaoPool");
  daoPool = await daoPoolFactory.deploy("0xEef377Bdf67A227a744e386231fB3f264C158CDF", 'DAO1_Name', 'DAO1_Profile', 'DAO1_Icon', "0xEef377Bdf67A227a744e386231fB3f264C158CDF");
  await daoPool.deployed();
  console.log("DaoPool deployed to:", daoPool.address);

  const projectPoolFactory = await ethers.getContractFactory("ProjectPool");
  projectPool = await projectPoolFactory.deploy("0xEef377Bdf67A227a744e386231fB3f264C158CDF", "0xEef377Bdf67A227a744e386231fB3f264C158CDF", "Project_Name", "Project_Contents", "Project_Reword");
  await projectPool.deployed();
  console.log("ProjectPool deployed to:", projectPool.address);

  const userPoolFactory = await ethers.getContractFactory("UserPool");
  userPool = await userPoolFactory.deploy("0xEef377Bdf67A227a744e386231fB3f264C158CDF", "USER1_Name", "USER1_Profile", "USER1_Icon", "0xEef377Bdf67A227a744e386231fB3f264C158CDF");
  await userPool.deployed();
  console.log("UserPool deployed to:", userPool.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
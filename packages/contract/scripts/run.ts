import { ethers } from "hardhat";
import { UsersData } from '../types';

async function main() {
  
  let usersData: UsersData;
  const usersDataFactory = await ethers.getContractFactory("UsersData");
  usersData = await usersDataFactory.deploy();
  await usersData.deployed();

  console.log("UsersData deployed to:", usersData.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

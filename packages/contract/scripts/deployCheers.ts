import { ethers } from "hardhat";
import { UserPoolFactory, DaoPoolFactory, Cheers } from '../types';

async function main() {
  
  // let userPoolFactory: UserPoolFactory;
  // let daoPoolFactory: DaoPoolFactory;
  let cheers: Cheers;

  // const userPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
  // userPoolFactory = await userPoolFactoryFactory.deploy();
  // await userPoolFactory.deployed();
  // console.log("UserPoolFactory deployed to:", userPoolFactory.address);

  // const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
  // daoPoolFactory = await daoPoolFactoryFactory.deploy();
  // await daoPoolFactory.deployed();
  // console.log("DaoPoolFactory deployed to:", daoPoolFactory.address);
  
  const cheersFactory = await ethers.getContractFactory('Cheers');
  cheers = await cheersFactory.deploy();
  await cheers.deployed();
  console.log("Cheers deployed to:", cheers.address);

  // await (await cheers.setDaoPoolFactory(daoPoolFactory.address)).wait();
  // await (await cheers.setUserPoolFactory(userPoolFactory.address)).wait();
  // await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
  // await(await daoPoolFactory.setDaosData(daosData.address)).wait();
  // await(await userPoolFactory.setPoolListData(poolListData.address)).wait();
  // await(await userPoolFactory.setUsersData(usersData.address)).wait();

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
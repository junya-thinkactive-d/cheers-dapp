import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { CherFaucet, CheerListData, UsersData, DaosData, ProjectsData, PoolListData, UserPoolFactory, DaoPoolFactory, Cheers } from '../types'

describe('DeployTest',  async () => {

    let cherFaucet: CherFaucet;

    let cheerListData: CheerListData;
    let usersData: UsersData;
    let daosData: DaosData;
    let projectsData: ProjectsData;
    let poolListData: PoolListData;
    
    let userPoolFactory: UserPoolFactory;
    let daoPoolFactory: DaoPoolFactory;
    let cheers: Cheers;
    let deployer: SignerWithAddress;


    before(async () => {

        [deployer] = await ethers.getSigners();
        
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
        await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
        await(await daoPoolFactory.setDaosData(daosData.address)).wait();
        await(await userPoolFactory.setPoolListData(poolListData.address)).wait();
        await(await userPoolFactory.setUsersData(usersData.address)).wait();

    });

    it("Should set daoPoolFactory in cheers", async () => {
        const daoPoolFactoryAddress = await cheers.daoPoolFactory();
        expect(daoPoolFactoryAddress).to.equal(daoPoolFactory.address);
    });

    it("Should set userPoolFactory in cheers", async () => {
        const userPoolFactoryAddress = await cheers.userPoolFactory();
        expect(userPoolFactoryAddress).to.equal(userPoolFactory.address);
    });

    it("Should set poolListData in userPoolFactory", async () => {
        const poolListDataAddress = await userPoolFactory.poolListData();
        expect(poolListDataAddress).to.equal(poolListData.address);
    });

    it("Should set usersData in userPoolFactory", async () => {
        const usersDataAddress = await userPoolFactory.usersData();
        expect(usersDataAddress).to.equal(usersData.address);
    });

    it("Should set poolListData in daoPoolFactory", async () => {
        const poolListDataAddress = await daoPoolFactory.poolListData();
        expect(poolListDataAddress).to.equal(poolListData.address);
    });

    it("Should set daosData in daoPoolFactory", async () => {
        const daosDataAddress = await daoPoolFactory.daosData();
        expect(daosDataAddress).to.equal(daosData.address);
    });
});
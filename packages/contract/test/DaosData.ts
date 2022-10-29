import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaosData } from '../types'

describe('DaosData', function () {

  let daosData: DaosData;

  async function fixture() {
    const [deployer, user1, dao1, dao2] = await ethers.getSigners();

    const daosDataFactory = await ethers.getContractFactory('DaosData');
    daosData = await daosDataFactory.deploy();
    await daosData.deployed();

    return { daosData, deployer, user1, dao1, dao2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { daosData, deployer, user1, dao1, dao2 } = await loadFixture(fixture);
    });
  });

  describe('getAllDaoList test', function () {
    it("Should initial poolAddress be zero address", async () => {
      const { daosData, user1 } = await loadFixture(fixture);

      let getAllDaoList = await daosData.connect(user1.address).getAllDaoList();
      expect(getAllDaoList).to.deep.equal([]);
    });
  });

  describe('addDaos test', function () {
    it("Should add dao", async () => {
      const { daosData, user1, dao1 } = await loadFixture(fixture);

      let getAllDaoList;
      let addDaos;

      getAllDaoList = await daosData.connect(user1.address).getAllDaoList();
      expect(getAllDaoList).to.deep.equal([]);

      addDaos = await daosData.addDaos(dao1.address, "DAO1_Name","DAO1_Profile","DAO1_Icon");
      await addDaos.wait();

      getAllDaoList = await daosData.connect(user1.address).getAllDaoList();

      expect(getAllDaoList.length).to.equal(1);

      expect(getAllDaoList[0][0]).to.equal(dao1.address);
      expect(getAllDaoList[0][1]).to.equal("DAO1_Name");
      expect(getAllDaoList[0][2]).to.equal("DAO1_Profile");
      expect(getAllDaoList[0][3]).to.equal("DAO1_Icon");
    });

    it("Should add daos", async () => {
        const { daosData, user1, dao1, dao2 } = await loadFixture(fixture);
  
        let getAllDaoList;
        let addDaos;
  
        getAllDaoList = await daosData.connect(user1.address).getAllDaoList();
        expect(getAllDaoList).to.deep.equal([]);
  
        addDaos = await daosData.addDaos(dao1.address, "DAO1_Name","DAO1_Profile","DAO1_Icon");
        await addDaos.wait();
  
        addDaos = await daosData.addDaos(dao2.address, "DAO2_Name","DAO2_Profile","DAO2_Icon");
        await addDaos.wait();
  
        getAllDaoList = await daosData.connect(user1.address).getAllDaoList();

        expect(getAllDaoList.length).to.equal(2);

        expect(getAllDaoList[0][0]).to.equal(dao1.address);
        expect(getAllDaoList[0][1]).to.equal("DAO1_Name");
        expect(getAllDaoList[0][2]).to.equal("DAO1_Profile");
        expect(getAllDaoList[0][3]).to.equal("DAO1_Icon");

        expect(getAllDaoList[1][0]).to.equal(dao2.address);
        expect(getAllDaoList[1][1]).to.equal("DAO2_Name");
        expect(getAllDaoList[1][2]).to.equal("DAO2_Profile");
        expect(getAllDaoList[1][3]).to.equal("DAO2_Icon");
    });
  });
});

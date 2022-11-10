import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { CheerListData } from '../types'

describe('CheerListData', function () {

  let cheerListData: CheerListData;

  async function fixture() {
    const [deployer, user1, user2, dao1, project1, project2, userPool1, userPool2] = await ethers.getSigners();

    const cheerListDataFactory = await ethers.getContractFactory('CheerListData');
    cheerListData = await cheerListDataFactory.deploy();
    await cheerListData.deployed();

    return { cheerListData, deployer, user1, user2, dao1, project1, project2, userPool1, userPool2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { cheerListData, deployer, user1, user2, dao1, project1 } = await loadFixture(fixture);
    });
  });

  describe('getMyPoolCheerDataList test', function () {
    it('Should get myPoolCheerDataList', async () => {
      const { cheerListData, deployer, user1, user2, dao1, project1 } = await loadFixture(fixture);

      let getMyPoolCheerDataList = await cheerListData.getMyPoolCheerDataList(user1.address);
      expect(getMyPoolCheerDataList).to.deep.equal([]);
    });
  });

  describe('getMyProjectCheerDataList test', function () {
    it('Should get myProjectCheerDataList', async () => {
      const { cheerListData, deployer, user1, user2, dao1, project1 } = await loadFixture(fixture);

      let getMyProjectCheerDataList = await cheerListData.getMyProjectCheerDataList(user1.address);
      expect(getMyProjectCheerDataList).to.deep.equal([]);
    });
  });

  describe('addCheerDataList test', function () {
    it('Should add CheerDataLists', async () => {
      const { cheerListData, deployer, user1, user2, dao1, project1, project2, userPool1, userPool2 } = await loadFixture(fixture);

      let getMyPoolCheerDataList;
      let getMyProjectCheerDataList;
      let addCheerDataList;

      getMyPoolCheerDataList= await cheerListData.getMyPoolCheerDataList(user1.address);
      expect(getMyPoolCheerDataList).to.deep.equal([]);

      getMyProjectCheerDataList = await cheerListData.getMyProjectCheerDataList(project1.address);
      expect(getMyProjectCheerDataList).to.deep.equal([]);

      addCheerDataList = await cheerListData.addCheerDataList(project1.address, userPool1.address, 123, "ガンバ！", 100);

      getMyPoolCheerDataList = await cheerListData.getMyPoolCheerDataList(userPool1.address);
      expect(getMyPoolCheerDataList[0][0]).to.equal(project1.address);
      expect(getMyPoolCheerDataList[0][1]).to.equal(userPool1.address);
      expect(getMyPoolCheerDataList[0][2]).to.equal(123);
      expect(getMyPoolCheerDataList[0][3]).to.equal("ガンバ！");
      expect(getMyPoolCheerDataList[0][4]).to.equal(100);

      getMyProjectCheerDataList = await cheerListData.getMyProjectCheerDataList(userPool1.address);
      expect(getMyProjectCheerDataList[0][0]).to.equal(project1.address);
      expect(getMyProjectCheerDataList[0][1]).to.equal(userPool1.address);
      expect(getMyProjectCheerDataList[0][2]).to.equal(123);
      expect(getMyProjectCheerDataList[0][3]).to.equal("ガンバ！");
      expect(getMyProjectCheerDataList[0][4]).to.equal(100);



      addCheerDataList = await cheerListData.addCheerDataList(project2.address, userPool2.address, 456, "Foo", 200);

      getMyPoolCheerDataList = await cheerListData.getMyPoolCheerDataList(userPool2.address);
      expect(getMyPoolCheerDataList[0][0]).to.equal(project2.address);
      expect(getMyPoolCheerDataList[0][1]).to.equal(userPool2.address);
      expect(getMyPoolCheerDataList[0][2]).to.equal(456);
      expect(getMyPoolCheerDataList[0][3]).to.equal("Foo");
      expect(getMyPoolCheerDataList[0][4]).to.equal(200);

      getMyProjectCheerDataList = await cheerListData.getMyProjectCheerDataList(userPool2.address);
      expect(getMyProjectCheerDataList[0][0]).to.equal(project2.address);
      expect(getMyProjectCheerDataList[0][1]).to.equal(userPool2.address);
      expect(getMyProjectCheerDataList[0][2]).to.equal(456);
      expect(getMyProjectCheerDataList[0][3]).to.equal("Foo");
      expect(getMyProjectCheerDataList[0][4]).to.equal(200);
    
    });
  });
});
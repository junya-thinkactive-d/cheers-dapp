import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { UsersData } from '../types'

describe('UsersData', function () {

  let usersData: UsersData;

  async function fixture() {
    const [deployer, user1, user2] = await ethers.getSigners();

    const usersDataFactory = await ethers.getContractFactory('UsersData');
    usersData = await usersDataFactory.deploy();
    await usersData.deployed();

    return { usersData, deployer, user1, user2 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { usersData, deployer, user1, user2 } = await loadFixture(fixture);
    });
  });

  describe('getAllUserList test', function () {
    it("Should initial poolAddress be zero address", async () => {
      const { usersData, user1 } = await loadFixture(fixture);

      let getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);
    });
  });

  describe('addUsers test', function () {
    it("Should add user", async () => {
      const { usersData, user1 } = await loadFixture(fixture);

      let getAllUserList;
      let addUsers;

      getAllUserList = await usersData.connect(user1.address).getAllUserList();
      expect(getAllUserList).to.deep.equal([]);

      addUsers = await usersData.addUsers(user1.address, "USER1_Name","USER1_Profile","USER1_Icon");
      await addUsers.wait();

      getAllUserList = await usersData.connect(user1.address).getAllUserList();

      expect(getAllUserList.length).to.equal(1);

      expect(getAllUserList[0][0]).to.equal(user1.address);
      expect(getAllUserList[0][1]).to.equal("USER1_Name");
      expect(getAllUserList[0][2]).to.equal("USER1_Profile");
      expect(getAllUserList[0][3]).to.equal("USER1_Icon");
    });

    it("Should add users", async () => {
        const { usersData, user1, user2 } = await loadFixture(fixture);
  
        let getAllUserList;
        let addUsers;
  
        getAllUserList = await usersData.connect(user1.address).getAllUserList();
        expect(getAllUserList).to.deep.equal([]);
  
        addUsers = await usersData.addUsers(user1.address, "USER1_Name","USER1_Profile","USER1_Icon");
        await addUsers.wait();
  
        addUsers = await usersData.addUsers(user2.address, "USER2_Name","USER2_Profile","USER2_Icon");
        await addUsers.wait();
  
        getAllUserList = await usersData.connect(user1.address).getAllUserList();

        expect(getAllUserList.length).to.equal(2);

        expect(getAllUserList[0][0]).to.equal(user1.address);
        expect(getAllUserList[0][1]).to.equal("USER1_Name");
        expect(getAllUserList[0][2]).to.equal("USER1_Profile");
        expect(getAllUserList[0][3]).to.equal("USER1_Icon");

        expect(getAllUserList[1][0]).to.equal(user2.address);
        expect(getAllUserList[1][1]).to.equal("USER2_Name");
        expect(getAllUserList[1][2]).to.equal("USER2_Profile");
        expect(getAllUserList[1][3]).to.equal("USER2_Icon");
    });
  });
});

import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ProjectsData } from '../types'

describe('ProjectsData', function () {

  let projectsData: ProjectsData;

  async function fixture() {
    const [deployer, user1, user2, dao1, project1] = await ethers.getSigners();

    const projectsDataFactory = await ethers.getContractFactory('ProjectsData');
    projectsData = await projectsDataFactory.deploy();
    await projectsData.deployed();

    return { projectsData, deployer, user1, user2, dao1, project1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { projectsData, deployer, user1, user2, dao1, project1 } = await loadFixture(fixture);
    });
  });

  describe('getEachProjectList test', function () {
    it("Should initial eachProjectsList be an empty array", async () => {
      const { projectsData, user1 } = await loadFixture(fixture);

      let getEachProjectList = await projectsData.getEachProjectList(user1.address);
      expect(getEachProjectList).to.deep.equal([]);
    });
  });

  describe('getAllProjectList test', function () {
    it("Should initial getAllProjectList be an empty array", async () => {
      const { projectsData } = await loadFixture(fixture);

      let getAllProjectList = await projectsData.getAllProjectList();
      expect(getAllProjectList).to.deep.equal([]);
    });
  });

  describe('addProjects test', function () {
    it("Should add a project to eachProjectsList", async () => {
      const { projectsData, user1, dao1, project1 } = await loadFixture(fixture);

      let getEachProjectList;
      let getAllProjectList;
      let addProjects;

      getEachProjectList = await projectsData.getEachProjectList(user1.address);
      getAllProjectList = await projectsData.getAllProjectList();

      expect(getEachProjectList).to.deep.equal([]);
      expect(getAllProjectList).to.deep.equal([]);

      addProjects = await projectsData.addProjects(user1.address, project1.address, dao1.address, "PROJECTS1_Name", "PROJECTS1_Contents", "PROJECTS1_ProjectReword");
      await addProjects.wait();

      getEachProjectList = await projectsData.getEachProjectList(user1.address);
      getAllProjectList = await projectsData.getAllProjectList();

      expect(getEachProjectList.length).to.equal(1);
      expect(getAllProjectList.length).to.equal(1);

      expect(getEachProjectList[0][0]).to.equal(project1.address);
      expect(getEachProjectList[0][1]).to.equal(dao1.address);
      expect(getEachProjectList[0][2]).to.equal("PROJECTS1_Name");
      expect(getEachProjectList[0][3]).to.equal("PROJECTS1_Contents");
      expect(getEachProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");

      expect(getAllProjectList[0][0]).to.equal(project1.address);
      expect(getAllProjectList[0][1]).to.equal(dao1.address);
      expect(getAllProjectList[0][2]).to.equal("PROJECTS1_Name");
      expect(getAllProjectList[0][3]).to.equal("PROJECTS1_Contents");
      expect(getAllProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");
    });
    
    it("Should add projects to eachProjectsList by same user", async () => {
        const { projectsData, user1, user2, dao1, project1 } = await loadFixture(fixture);

        let getEachProjectList;
        let getAllProjectList;
        let addProjects;

        getEachProjectList = await projectsData.getEachProjectList(user1.address);
        getAllProjectList = await projectsData.getAllProjectList();

        expect(getEachProjectList).to.deep.equal([]);
        expect(getAllProjectList).to.deep.equal([]);
  
        addProjects = await projectsData.addProjects(user1.address, project1.address, dao1.address, "PROJECTS1_Name", "PROJECTS1_Contents", "PROJECTS1_ProjectReword");
        await addProjects.wait();

        addProjects = await projectsData.addProjects(user1.address, project1.address, dao1.address, "PROJECTS2_Name", "PROJECTS2_Contents", "PROJECTS2_ProjectReword");
        await addProjects.wait();
  
        getEachProjectList = await projectsData.getEachProjectList(user1.address);
        getAllProjectList = await projectsData.getAllProjectList();
  
        expect(getEachProjectList.length).to.equal(2);
        expect(getAllProjectList.length).to.equal(2);
  
        expect(getEachProjectList[0][0]).to.equal(project1.address);
        expect(getEachProjectList[0][1]).to.equal(dao1.address);
        expect(getEachProjectList[0][2]).to.equal("PROJECTS1_Name");
        expect(getEachProjectList[0][3]).to.equal("PROJECTS1_Contents");
        expect(getEachProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");
  
        expect(getEachProjectList[0][0]).to.equal(project1.address);
        expect(getEachProjectList[1][1]).to.equal(dao1.address);
        expect(getEachProjectList[1][2]).to.equal("PROJECTS2_Name");
        expect(getEachProjectList[1][3]).to.equal("PROJECTS2_Contents");
        expect(getEachProjectList[1][4]).to.equal("PROJECTS2_ProjectReword");

        expect(getAllProjectList[0][0]).to.equal(project1.address);
        expect(getAllProjectList[0][1]).to.equal(dao1.address);
        expect(getAllProjectList[0][2]).to.equal("PROJECTS1_Name");
        expect(getAllProjectList[0][3]).to.equal("PROJECTS1_Contents");
        expect(getAllProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");
  
        expect(getAllProjectList[1][0]).to.equal(project1.address);
        expect(getAllProjectList[1][1]).to.equal(dao1.address);
        expect(getAllProjectList[1][2]).to.equal("PROJECTS2_Name");
        expect(getAllProjectList[1][3]).to.equal("PROJECTS2_Contents");
        expect(getAllProjectList[1][4]).to.equal("PROJECTS2_ProjectReword");
    });
    
    it("Should add projects to eachProjectsList by different users", async () => {
        const { projectsData, user1, user2, dao1, project1 } = await loadFixture(fixture);

        let getEachProjectList;
        let getAllProjectList;
        let addProjects;

        getEachProjectList = await projectsData.getEachProjectList(user1.address);
        getAllProjectList = await projectsData.getAllProjectList();

        expect(getEachProjectList).to.deep.equal([]);
        expect(getAllProjectList).to.deep.equal([]);
  
        addProjects = await projectsData.addProjects(user1.address, project1.address, dao1.address, "PROJECTS1_Name", "PROJECTS1_Contents", "PROJECTS1_ProjectReword");
        await addProjects.wait();

        addProjects = await projectsData.addProjects(user2.address, project1.address, dao1.address, "PROJECTS2_Name", "PROJECTS2_Contents", "PROJECTS2_ProjectReword");
        await addProjects.wait();
  
        getEachProjectList = await projectsData.getEachProjectList(user1.address);
        getAllProjectList = await projectsData.getAllProjectList();
  
        expect(getEachProjectList.length).to.equal(1);
  
        expect(getEachProjectList[0][0]).to.equal(project1.address);
        expect(getEachProjectList[0][1]).to.equal(dao1.address);
        expect(getEachProjectList[0][2]).to.equal("PROJECTS1_Name");
        expect(getEachProjectList[0][3]).to.equal("PROJECTS1_Contents");
        expect(getEachProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");
  
        getEachProjectList = await projectsData.getEachProjectList(user2.address);
  
        expect(getEachProjectList.length).to.equal(1);
  
        expect(getEachProjectList[0][0]).to.equal(project1.address);
        expect(getEachProjectList[0][1]).to.equal(dao1.address);
        expect(getEachProjectList[0][2]).to.equal("PROJECTS2_Name");
        expect(getEachProjectList[0][3]).to.equal("PROJECTS2_Contents");
        expect(getEachProjectList[0][4]).to.equal("PROJECTS2_ProjectReword");

        expect(getAllProjectList.length).to.equal(2);

        expect(getAllProjectList[0][0]).to.equal(project1.address);
        expect(getAllProjectList[0][1]).to.equal(dao1.address);
        expect(getAllProjectList[0][2]).to.equal("PROJECTS1_Name");
        expect(getAllProjectList[0][3]).to.equal("PROJECTS1_Contents");
        expect(getAllProjectList[0][4]).to.equal("PROJECTS1_ProjectReword");
  
        expect(getAllProjectList[1][0]).to.equal(project1.address);
        expect(getAllProjectList[1][1]).to.equal(dao1.address);
        expect(getAllProjectList[1][2]).to.equal("PROJECTS2_Name");
        expect(getAllProjectList[1][3]).to.equal("PROJECTS2_Contents");
        expect(getAllProjectList[1][4]).to.equal("PROJECTS2_ProjectReword");
    });
  });
});
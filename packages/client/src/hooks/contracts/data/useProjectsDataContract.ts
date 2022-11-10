import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import ProjectsDataContractABI from '@/libs/hardhat/artifacts/contracts/data/ProjectsData.sol/ProjectsData.json';
import type { ProjectsData as ProjectsDataType } from '@/libs/hardhat/types';
import { ProjectType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x5CE46cA237c357970ee6DCe0e64d1d3dF506514d';
const CONTRACT_ABI = ProjectsDataContractABI.abi;

type Props = {
  projectOwnerAddress?: string;
  projectPoolAddress?: string;
};

type ReturnProjectsDataContract = {
  eachProjectList: ProjectType[];
  allProjectList: ProjectType[];
  projectAddressToProjectData: ProjectType;
};

export const useProjectsDataContract = ({
  projectOwnerAddress,
  projectPoolAddress,
}: Props): ReturnProjectsDataContract => {
  const [projectAddressToProjectData, setProjectAddressToProjectData] = useState<ProjectType>({
    projectOwnerAddress: '',
    projectAddress: 'noData',
    belongDaoAddress: 'noData',
    projectName: 'noData',
    projectContents: 'noData',
    projectReword: 'noData',
    timestamp: new Date('2022-11-06T23:59:59'),
  });
  const [eachProjectList, setEachProjectList] = useState<ProjectType[]>([]);
  const [allProjectList, setAllProjectList] = useState<ProjectType[]>([]);

  const ethereum = getEthereumSafety();

  const projectsDataContract: ProjectsDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as ProjectsDataType;
  }, [ethereum]);

  const handleGetProjectAddressToProjectData = useCallback(async () => {
    try {
      if (!projectsDataContract) return;
      if (!projectPoolAddress) return;
      const getProjectAddressToProjectData = await projectsDataContract.getProjectAddressToProjectData(
        projectPoolAddress,
      );
      const projectAddressToProjectDataOrganize = {
        projectOwnerAddress: getProjectAddressToProjectData.projectOwnerAddress,
        projectAddress: getProjectAddressToProjectData.projectAddress,
        belongDaoAddress: getProjectAddressToProjectData.belongDaoAddress,
        projectName: getProjectAddressToProjectData.projectName,
        projectContents: getProjectAddressToProjectData.projectContents,
        projectReword: getProjectAddressToProjectData.projectReword,
        timestamp: new Date(getProjectAddressToProjectData.creationTime.toNumber() * 1000),
      };
      setProjectAddressToProjectData(projectAddressToProjectDataOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [projectPoolAddress, projectsDataContract]);

  const handleGetEachProjectList = useCallback(async () => {
    try {
      if (!projectsDataContract) return;
      if (!projectOwnerAddress) return;
      const getEachProjectList = await projectsDataContract.getEachProjectList(projectOwnerAddress);
      const eachProjectListOrganize = getEachProjectList.map((project) => {
        return {
          projectOwnerAddress: project.projectOwnerAddress,
          projectAddress: project.projectAddress,
          belongDaoAddress: project.belongDaoAddress,
          projectName: project.projectName,
          projectContents: project.projectContents,
          projectReword: project.projectReword,
          timestamp: new Date(project.creationTime.toNumber() * 1000),
        };
      });
      setEachProjectList(eachProjectListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [projectOwnerAddress, projectsDataContract]);

  const handleGetAllProjectList = useCallback(async () => {
    try {
      if (!projectsDataContract) return;
      const getAllProjectList = await projectsDataContract.getAllProjectList();
      const allProjectListOrganize = getAllProjectList.map((project) => {
        return {
          projectOwnerAddress: project.projectOwnerAddress,
          projectAddress: project.projectAddress,
          belongDaoAddress: project.belongDaoAddress,
          projectName: project.projectName,
          projectContents: project.projectContents,
          projectReword: project.projectReword,
          timestamp: new Date(project.creationTime.toNumber() * 1000),
        };
      });
      setAllProjectList(allProjectListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [projectsDataContract]);

  useEffect(() => {
    handleGetProjectAddressToProjectData();
    handleGetEachProjectList();
    handleGetAllProjectList();
  }, [handleGetAllProjectList, handleGetEachProjectList, handleGetProjectAddressToProjectData]);

  return {
    eachProjectList,
    allProjectList,
    projectAddressToProjectData,
  };
};

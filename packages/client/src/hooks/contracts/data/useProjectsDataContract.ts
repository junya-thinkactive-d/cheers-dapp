import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import ProjectsDataContractABI from '@/libs/hardhat/artifacts/contracts/data/ProjectsData.sol/ProjectsData.json';
import type { ProjectsData as ProjectsDataType } from '@/libs/hardhat/types';
import { ProjectType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = ProjectsDataContractABI.abi;

type Props = {
  projectOwnerAddress?: string;
};

type ReturnProjectsDataContract = {
  eachProjectList: ProjectType[] | undefined;
  allProjectList: ProjectType[] | undefined;
};

export const useProjectsDataContract = ({ projectOwnerAddress }: Props): ReturnProjectsDataContract => {
  const [eachProjectList, setEachProjectList] = useState<ProjectType[]>();
  const [allProjectList, setAllProjectList] = useState<ProjectType[]>();

  const ethereum = getEthereumSafety();

  const projectsDataContract: ProjectsDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as ProjectsDataType;
  }, [ethereum]);

  const handleGetEachProjectList = useCallback(async () => {
    try {
      if (!projectsDataContract) return;
      if(!projectOwnerAddress) return;
      const getEachProjectList = await projectsDataContract.getEachProjectList(projectOwnerAddress);
      const eachProjectListOrganize = getEachProjectList.map((project) => {
        return {
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
    handleGetAllProjectList();
  }, [handleGetAllProjectList, handleGetEachProjectList]);

  return {
    eachProjectList,
    allProjectList,
  };
};

import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import ProjectsDataContractABI from '@/libs/hardhat/artifacts/contracts/data/ProjectsData.sol/ProjectsData.json';
import type { ProjectsData as ProjectsDataType } from '@/libs/hardhat/types';
import { ProjectType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = ProjectsDataContractABI.abi;

type Props = {};

type ReturnProjectsDataContract = {
  handleGetEachProjectList: (_projectOwnerAddress: string) => void;
  allProjectList: ProjectType[] | undefined;
};

export const useProjectsDataContract = ({}: Props): ReturnProjectsDataContract => {
  const [allProjectList, setAllProjectList] = useState<ProjectType[]>();
  const ethereum = getEthereumSafety();

  const projectsDataContract: ProjectsDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as ProjectsDataType;
  }, [ethereum]);

  const handleGetEachProjectList = useCallback(
    async (projectOwnerAddress: string) => {
      try {
        if (!projectsDataContract) return;
        const getEachProjectList = await projectsDataContract.getEachProjectList(projectOwnerAddress);
        const eachProjectListOrganize = getEachProjectList.map((project) => {
          return {
            projectAddress: project.projectAddress,
            belongDaoAddress: project.belongDaoAddress,
            projectName: project.projectName,
            projectContents: project.projectContents,
            projectReword: project.projectReword,
          };
        });
        return eachProjectListOrganize;
      } catch (error) {
        console.error(error);
      }
    },
    [projectsDataContract],
  );

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
    handleGetEachProjectList,
    allProjectList,
  };
};

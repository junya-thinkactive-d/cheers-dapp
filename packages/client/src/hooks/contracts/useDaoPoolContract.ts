import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import DaoPoolContractABI from '@/libs/hardhat/artifacts/contracts/DaoPool.sol/DaoPool.json';
import type { DaoPool as DaoPoolTypes } from '@/libs/hardhat/types';
import { DaoProjectFactory } from '@/types/contractTypes';
import { ProjectType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

import { usePoolListDataContract } from './data/usePoolListDataContract';

const CONTRACT_ABI = DaoPoolContractABI.abi;

type Props = {
  daoOwnerAddress: string;
};

type ReturnUseDaoPoolContract = {
  daoPoolAddress: string;
  daoAddress: string;
  daoName: string;
  daoProfile: string;
  daoIcon: string;
  allChallengeProjects: ProjectType[];
  totalCher: string;
  mining: boolean;
  handleDaoChargeCher: (_amount: number) => Promise<void>;
  handleDaoWithdrawCher: (_mount: number) => Promise<void>;
  handleNewProjectFactory: (_inputProject: DaoProjectFactory) => Promise<void>;
  handleApproveCherToProjectPool: (_projectAddress: string, _cherAmount: ethers.BigNumberish) => Promise<void>;
};

export const useDaoPoolContract = ({ daoOwnerAddress }: Props): ReturnUseDaoPoolContract => {
  const ownerAddress = daoOwnerAddress;
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });

  const CONTRACT_ADDRESS = myPoolAddress;

  const [daoPoolAddress, setDaoPoolAddress] = useState<string>('');
  const [daoAddress, setDaoAddress] = useState<string>('');
  const [daoName, setDaoName] = useState<string>('');
  const [daoProfile, setDaoProfile] = useState<string>('');
  const [daoIcon, setDaoIcon] = useState<string>('');
  const [allChallengeProjects, setAllChallengeProjects] = useState<ProjectType[]>([]);
  const [totalCher, setTotalCher] = useState<string>('');
  const [mining, setMining] = useState<boolean>(false);
  const ethereum = getEthereumSafety();

  const daoPoolContract: DaoPoolTypes | null = useMemo(() => {
    if (!ethereum) return null;
    if (!CONTRACT_ADDRESS) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as DaoPoolTypes;
  }, [CONTRACT_ADDRESS, ethereum]);

  const handleGetDaoPoolAddress = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getDaoPoolAddress = await daoPoolContract.getDaoPoolAddress();
      setDaoPoolAddress(getDaoPoolAddress);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleGetDaoAddress = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getDaoAddress = await daoPoolContract.getDaoAddress();
      setDaoAddress(getDaoAddress);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleGetDaoName = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getDaoName = await daoPoolContract.getDaoName();
      setDaoName(getDaoName);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleGetDaoProfile = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getDaoProfile = await daoPoolContract.getDaoProfile();
      setDaoProfile(getDaoProfile);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleGetDaoIcon = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getDaoIcon = await daoPoolContract.getDaoIcon();
      setDaoIcon(getDaoIcon);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleDaoChargeCher = useCallback(
    async (amount: number) => {
      try {
        if (!daoPoolContract) return;
        const chargeCherTxn = await daoPoolContract.chargeCher(amount);
        setMining(true);
        await chargeCherTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [daoPoolContract],
  );

  const handleDaoWithdrawCher = useCallback(
    async (amount: number) => {
      try {
        if (!daoPoolContract) return;
        const withdrawCherTxn = await daoPoolContract.withdrawCher(amount);
        setMining(true);
        await withdrawCherTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [daoPoolContract],
  );

  const handleNewProjectFactory = useCallback(
    async (inputProject: DaoProjectFactory) => {
      try {
        if (!daoPoolContract) return;
        const newProjectFactory = await daoPoolContract.newProjectFactory(
          inputProject.projectName,
          inputProject.projectContents,
          inputProject.projectReword,
        );
        setMining(true);
        await newProjectFactory.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [daoPoolContract],
  );

  const handleGetAllChallengeProjects = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getAllChallengeProjects = await daoPoolContract.getAllChallengeProjects();
      const allChallengeProjectsOrganize = getAllChallengeProjects.map((challengeProject) => {
        return {
          projectOwnerAddress: challengeProject.projectOwnerAddress,
          projectAddress: challengeProject.projectAddress,
          belongDaoAddress: challengeProject.belongDaoAddress,
          projectName: challengeProject.projectName,
          projectContents: challengeProject.projectContents,
          projectReword: challengeProject.projectReword,
          timestamp: new Date(challengeProject.creationTime.toNumber() * 1000),
        };
      });
      setAllChallengeProjects(allChallengeProjectsOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleGetTotalCher = useCallback(async () => {
    try {
      if (!daoPoolContract) return;
      const getTotalCher = await daoPoolContract.getTotalCher();
      const getTotalCherOrganize = ethers.utils.formatEther(getTotalCher);
      setTotalCher(getTotalCherOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [daoPoolContract]);

  const handleApproveCherToProjectPool = useCallback(
    async (projectAddress: string, cherAmount: ethers.BigNumberish) => {
      try {
        if (!daoPoolContract) return;
        const approveCheerToProjectPool = await daoPoolContract.approveCherToProjectPool(projectAddress, cherAmount);
        setMining(true);
        await approveCheerToProjectPool.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [daoPoolContract],
  );

  useEffect(() => {
    handleGetDaoPoolAddress();
    handleGetDaoAddress();
    handleGetDaoName();
    handleGetDaoProfile();
    handleGetDaoIcon();
    handleGetAllChallengeProjects();
    handleGetTotalCher();
  }, [
    handleGetAllChallengeProjects,
    handleGetDaoAddress,
    handleGetDaoIcon,
    handleGetDaoName,
    handleGetDaoPoolAddress,
    handleGetDaoProfile,
    handleGetTotalCher,
  ]);

  return {
    daoPoolAddress,
    daoAddress,
    daoName,
    daoProfile,
    daoIcon,
    allChallengeProjects,
    totalCher,
    mining,
    handleDaoChargeCher,
    handleDaoWithdrawCher,
    handleNewProjectFactory,
    handleApproveCherToProjectPool,
  };
};

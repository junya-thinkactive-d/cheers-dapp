import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import UserPoolContractABI from '@/libs/hardhat/artifacts/contracts/UserPool.sol/UserPool.json';
import type { UserPool as UserPoolTypes } from '@/libs/hardhat/types';
import { UserProjectFactory } from '@/types/contractTypes';
import { ProjectType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

import { usePoolListDataContract } from './data/usePoolListDataContract';

const CONTRACT_ABI = UserPoolContractABI.abi;

type Props = {
  ownerAddress: string;
};

type ReturnUseUserPoolContract = {
  userPoolAddress: string | undefined;
  userAddress: string | undefined;
  userName: string | undefined;
  userProfile: string | undefined;
  userIcon: string | undefined;
  allChallengeProjects: ProjectType[] | undefined;
  totalCher: string | undefined;
  mining: boolean;
  handleChargeCher: (_amount: string) => Promise<void>;
  handleWithdrawCher: (_mount: string) => Promise<void>;
  handleNewProjectFactory: (_inputProject: UserProjectFactory) => Promise<void>;
};

export const useUserPoolContract = ({ ownerAddress }: Props): ReturnUseUserPoolContract => {
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });

  const CONTRACT_ADDRESS = myPoolAddress;

  const [userPoolAddress, setUserPoolAddress] = useState<string>();
  const [userAddress, setUserAddress] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [userProfile, setUserProfile] = useState<string>();
  const [userIcon, setUserIcon] = useState<string>();
  const [allChallengeProjects, setAllChallengeProjects] = useState<ProjectType[]>();
  const [totalCher, setTotalCher] = useState<string>();
  const [mining, setMining] = useState<boolean>(false);
  const ethereum = getEthereumSafety();

  const userPoolContract: UserPoolTypes | null = useMemo(() => {
    if (!ethereum) return null;
    if (!CONTRACT_ADDRESS) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as UserPoolTypes;
  }, [CONTRACT_ADDRESS, ethereum]);

  const handleGetUserPoolAddress = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getUserPoolAddress = await userPoolContract.getUserPoolAddress();
      setUserPoolAddress(getUserPoolAddress);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  const handleGetUserAddress = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getUserAddress = await userPoolContract.getUserAddress();
      setUserAddress(getUserAddress);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  const handleGetUserName = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getUserName = await userPoolContract.getUserName();
      setUserName(getUserName);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  const handleGetUserProfile = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getUserProfile = await userPoolContract.getUserProfile();
      setUserProfile(getUserProfile);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  const handleGetUserIcon = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getUserIcon = await userPoolContract.getUserIcon();
      setUserIcon(getUserIcon);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  const handleChargeCher = useCallback(
    async (amount: string) => {
      try {
        if (!userPoolContract) return;
        const chargeCherTxn = await userPoolContract.chargeCher(amount);
        setMining(true);
        await chargeCherTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [userPoolContract],
  );

  const handleWithdrawCher = useCallback(
    async (amount: string) => {
      try {
        if (!userPoolContract) return;
        const withdrawCherTxn = await userPoolContract.withdrawCher(amount);
        setMining(true);
        await withdrawCherTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [userPoolContract],
  );

  const handleNewProjectFactory = useCallback(
    async (inputProject: UserProjectFactory) => {
      try {
        if (!userPoolContract) return;
        const newProjectFactory = await userPoolContract.newProjectFactory(
          inputProject.belongDaoAddress,
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
    [userPoolContract],
  );

  const handleGetAllChallengeProjects = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getAllChallengeProjects = await userPoolContract.getAllChallengeProjects();
      const allChallengeProjectsOrganize = getAllChallengeProjects.map((challengeProject) => {
        return {
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
  }, [userPoolContract]);

  const handleGetTotalCher = useCallback(async () => {
    try {
      if (!userPoolContract) return;
      const getTotalCher = await userPoolContract.getTotalCher();
      const getTotalCherOrganize = ethers.utils.formatEther(getTotalCher);
      setTotalCher(getTotalCherOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [userPoolContract]);

  useEffect(() => {
    handleGetUserPoolAddress();
    handleGetUserAddress();
    handleGetUserName();
    handleGetUserProfile();
    handleGetUserIcon();
    handleGetAllChallengeProjects();
    handleGetTotalCher();
  }, [
    handleGetAllChallengeProjects,
    handleGetTotalCher,
    handleGetUserAddress,
    handleGetUserIcon,
    handleGetUserName,
    handleGetUserPoolAddress,
    handleGetUserProfile,
  ]);

  return {
    userPoolAddress,
    userAddress,
    userName,
    userProfile,
    userIcon,
    allChallengeProjects,
    totalCher,
    mining,
    handleChargeCher,
    handleWithdrawCher,
    handleNewProjectFactory,
  };
};

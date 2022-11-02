import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import ProjectPoolContractABI from '@/libs/hardhat/artifacts/contracts/ProjectPool.sol/ProjectPool.json';
import type { ProjectPool as ProjectPoolTypes } from '@/libs/hardhat/types';
import { ProjectCheer } from '@/types/contractTypes';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ABI = ProjectPoolContractABI.abi;

type Props = {
  projectPoolAddress: string;
};

type ReturnProjectPoolDataContract = {
  mining: boolean;
  handleMintCheer: (_cher: number, _message: string) => Promise<void>;
  allCheers: ProjectCheer[] | undefined;
  totalCher: string | undefined;
};

export const useProjectPoolContract = ({ projectPoolAddress }: Props): ReturnProjectPoolDataContract => {
  const [mining, setMining] = useState<boolean>(false);
  const [allCheers, setAllCheers] = useState<ProjectCheer[]>();
  const [totalCher, setTotalCher] = useState<string>();
  const CONTRACT_ADDRESS = projectPoolAddress;

  const ethereum = getEthereumSafety();

  const projectPoolContract: ProjectPoolTypes | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore:
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as ProjectPoolTypes;
  }, [CONTRACT_ADDRESS, ethereum]);

  const handleMintCheer = useCallback(
    async (cher: number, message: string) => {
      try {
        if (!projectPoolContract) return;
        const mintCheerTxn = await projectPoolContract.mintCheer(cher, message);
        setMining(true);
        await mintCheerTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [projectPoolContract],
  );

  const handleGetAllCheers = useCallback(async () => {
    try {
      if (!projectPoolContract) return;
      const getAllCheers = await projectPoolContract.getAllCheers();
      const getAllCheersOrganize = getAllCheers.map((cheer) => {
        return {
          cheerPoolAddress: cheer.cheerPoolAddress,
          timestamp: new Date(cheer.timestamp.toNumber() * 1000),
          message: cheer.message,
          cher: ethers.utils.formatEther(cheer.cher),
        };
      });
      setAllCheers(getAllCheersOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [projectPoolContract]);

  const handleGetTotalCher = useCallback(async () => {
    try {
      if (!projectPoolContract) return;
      const getTotalCher = await projectPoolContract.getTotalCher();
      const getTotalCherOrganize = ethers.utils.formatEther(getTotalCher);
      setTotalCher(getTotalCherOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [projectPoolContract]);

  useEffect(() => {
    handleGetAllCheers();
    handleGetTotalCher();
  }, [handleGetAllCheers, handleGetTotalCher]);

  return {
    mining,
    handleMintCheer,
    allCheers,
    totalCher,
  };
};

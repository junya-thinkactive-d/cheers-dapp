import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import ProjectPoolContractABI from '@/libs/hardhat/artifacts/contracts/ProjectPool.sol/ProjectPool.json';
import type { ProjectPool as ProjectPoolTypes } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ABI = ProjectPoolContractABI.abi;

type Props = {
  projectPoolAddress: string;
};

type ReturnProjectPoolDataContract = {
  mining: boolean;
  handleMintCheer: (_cher: number, _message: string) => Promise<void>;
  totalCher: string;
};

export const useProjectPoolContract = ({ projectPoolAddress }: Props): ReturnProjectPoolDataContract => {
  const [mining, setMining] = useState<boolean>(false);
  const [totalCher, setTotalCher] = useState<string>('');
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
    handleGetTotalCher();
  }, [handleGetTotalCher]);

  return {
    mining,
    handleMintCheer,
    totalCher,
  };
};

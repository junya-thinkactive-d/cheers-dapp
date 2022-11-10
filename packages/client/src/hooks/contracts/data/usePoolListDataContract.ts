import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import PoolListDataContractABI from '@/libs/hardhat/artifacts/contracts/data/PoolListData.sol/PoolListData.json';
import type { PoolListData as PoolListDataType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x35FA06F351ED31f8eAd5DcDF1E586e47fc064376';
const CONTRACT_ABI = PoolListDataContractABI.abi;

type Props = {
  ownerAddress?: string;
  poolAddress?: string;
};

type ReturnPoolListDataContract = {
  myPoolAddress: string;
  myWalletAddress: string;
};

export const usePoolListDataContract = ({ ownerAddress, poolAddress }: Props): ReturnPoolListDataContract => {
  const [myPoolAddress, setMyPoolAddress] = useState<string>('');
  const [myWalletAddress, setMyWalletAddress] = useState<string>('');
  const ethereum = getEthereumSafety();

  const poolListDataContract: PoolListDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as PoolListDataType;
  }, [ethereum]);

  const handleGetMyPoolAddress = useCallback(async () => {
    try {
      if (!poolListDataContract) return;
      if (!ownerAddress) return;
      const getMyPoolAddress = await poolListDataContract.getMyPoolAddress(ownerAddress);
      setMyPoolAddress(getMyPoolAddress);
    } catch (error) {
      console.error(error);
    }
  }, [ownerAddress, poolListDataContract]);

  const handleGetSearchWalletAddress = useCallback(async () => {
    try {
      if (!poolListDataContract) return;
      if (!poolAddress) return;
      const getSearchWalletAddress = await poolListDataContract.getSearchWalletAddress(poolAddress);
      setMyWalletAddress(getSearchWalletAddress);
    } catch (error) {
      console.error(error);
    }
  }, [poolAddress, poolListDataContract]);

  useEffect(() => {
    handleGetMyPoolAddress();
    handleGetSearchWalletAddress();
  }, [handleGetMyPoolAddress, handleGetSearchWalletAddress]);

  return {
    myPoolAddress,
    myWalletAddress,
  };
};

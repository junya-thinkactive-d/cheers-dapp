import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import PoolListDataContractABI from '@/libs/hardhat/artifacts/contracts/data/PoolListData.sol/PoolListData.json';
import type { PoolListData as PoolListDataType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = PoolListDataContractABI.abi;

type Props = {
  ownerAddress: string;
};

type ReturnPoolListDataContract = {
  myPoolAddress:string|undefined;
};

export const usePoolListDataContract = ({ ownerAddress }: Props): ReturnPoolListDataContract => {
  const [myPoolAddress, setMyPoolAddress] = useState<string>();
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
      const getMyPoolAddress = poolListDataContract.getMyPoolAddress(ownerAddress);
      setMyPoolAddress(await getMyPoolAddress);
    } catch (error) {
      console.error(error);
    }
  }, [ownerAddress, poolListDataContract]);

  useEffect(() => {
    handleGetMyPoolAddress()
  },[handleGetMyPoolAddress])

  return {
    myPoolAddress
  };
};

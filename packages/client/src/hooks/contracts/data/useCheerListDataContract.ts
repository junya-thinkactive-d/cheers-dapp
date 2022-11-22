import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import CheerListDataContractABI from '@/libs/hardhat/artifacts/contracts/data/CheerListData.sol/CheerListData.json';
import type { CheerListData as CheerListDataTypes } from '@/libs/hardhat/types';
import { CheerType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0xcE9aDb57464657D74d8A8260b29B29bD07e2c3eb';
const CONTRACT_ABI = CheerListDataContractABI.abi;

type Props = {
  cheerPoolAddress?: string;
  projectPoolAddress?: string;
};

type ReturnCheerListDataContract = {
  myPoolCheerDataList: CheerType[];
  myProjectCheerDataList: CheerType[];
};

export const useCheerListDataContract = ({
  cheerPoolAddress,
  projectPoolAddress,
}: Props): ReturnCheerListDataContract => {
  const [myPoolCheerDataList, setMyPoolCheerDataList] = useState<CheerType[]>([]);
  const [myProjectCheerDataList, setMyProjectCheerDataList] = useState<CheerType[]>([]);
  const ethereum = getEthereumSafety();

  const cheerListDataContract: CheerListDataTypes | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as CheerListDataTypes;
  }, [ethereum]);

  const handleGetMyPoolCheerDataList = useCallback(async () => {
    try {
      if (!cheerListDataContract) return;
      if (!cheerPoolAddress) return;
      const getMyProjectCheerDataList = await cheerListDataContract.getMyPoolCheerDataList(cheerPoolAddress);
      const myProjectCheerDataListOrganize = getMyProjectCheerDataList.map((cheerData) => {
        return {
          projectAddress: cheerData.projectAddress,
          cheerPoolAddress: cheerData.cheerPoolAddress,
          timestamp: new Date(cheerData.creationTime.toNumber() * 1000),
          message: cheerData.message,
          cher: cheerData.cher.toString(),
        };
      });
      setMyPoolCheerDataList(myProjectCheerDataListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [cheerListDataContract, cheerPoolAddress]);

  const handleGetMyProjectCheerDataList = useCallback(async () => {
    try {
      if (!cheerListDataContract) return;
      if (!projectPoolAddress) return;
      const getMyPoolCheerDataList = await cheerListDataContract.getMyProjectCheerDataList(projectPoolAddress);
      const myPoolCheerDataListOrganize = getMyPoolCheerDataList.map((cheerData) => {
        return {
          projectAddress: cheerData.projectAddress,
          cheerPoolAddress: cheerData.cheerPoolAddress,
          timestamp: new Date(cheerData.creationTime.toNumber() * 1000),
          message: cheerData.message,
          cher: ethers.utils.formatEther(cheerData.cher),
        };
      });
      setMyProjectCheerDataList(myPoolCheerDataListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [cheerListDataContract, projectPoolAddress]);

  useEffect(() => {
    handleGetMyPoolCheerDataList();
    handleGetMyProjectCheerDataList();
  }, [handleGetMyPoolCheerDataList, handleGetMyProjectCheerDataList]);

  return {
    myPoolCheerDataList,
    myProjectCheerDataList,
  };
};

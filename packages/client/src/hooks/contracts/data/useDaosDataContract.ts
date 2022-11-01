import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import DaosDataContractABI from '@/libs/hardhat/artifacts/contracts/data/DaosData.sol/DaosData.json';
import type { DaosData as DaosDataType } from '@/libs/hardhat/types';
import { SharedStruct } from '@/libs/hardhat/types/contracts/data/DaosData';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = DaosDataContractABI.abi;

type Props = {};

type ReturnUseDaosDataContract = {};

export const useDaosDataContract = ({}: Props): ReturnUseDaosDataContract => {
  const [allDaoList, setAllDaoList] = useState<SharedStruct.DaoStruct[]>();
  const ethereum = getEthereumSafety();

  const daosDataContract: DaosDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as DaosDataType;
  }, [ethereum]);

  const handleGetAllDaoList = useCallback(async () => {
    try {
      if (!daosDataContract) return;
      const getAllDaoList =await daosDataContract.getAllDaoList();
      const allDaoListOrganize =(getAllDaoList).map((dao)=>{
        return{
          daoAddress:dao.daoAddress,
          daoName:dao.daoName,
          daoProfile:dao.daoProfile,
          daoIcon:dao.daoIcon
        }
      })
      setAllDaoList(allDaoListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [daosDataContract]);

  useEffect(() => {
    allDaoList;
    handleGetAllDaoList();
  }, [allDaoList, handleGetAllDaoList]);

  return {
    allDaoList,
  };
};

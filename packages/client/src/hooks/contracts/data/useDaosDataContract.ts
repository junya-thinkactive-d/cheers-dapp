import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import DaosDataContractABI from '@/libs/hardhat/artifacts/contracts/data/DaosData.sol/DaosData.json';
import type { DaosData as DaosDataType } from '@/libs/hardhat/types';
import { DaoType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0xa1c94AE2029Ef112386707A9DbD5501FCAfD37c4';
const CONTRACT_ABI = DaosDataContractABI.abi;

type Props = {};

type ReturnUseDaosDataContract = {
  allDaoList: DaoType[];
};

export const useDaosDataContract = ({}: Props): ReturnUseDaosDataContract => {
  const [allDaoList, setAllDaoList] = useState<DaoType[]>([
    { daoWalletAddress: '', daoName: '', daoProfile: '', daoIcon: '', timestamp: new Date(2022, 11 - 1, 6) },
  ]);
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
      const getAllDaoList = await daosDataContract.getAllDaoList();
      const allDaoListOrganize = getAllDaoList.map((dao) => {
        return {
          daoWalletAddress: dao.daoAddress,
          daoName: dao.daoName,
          daoProfile: dao.daoProfile,
          daoIcon: dao.daoIcon,
          timestamp: new Date(dao.creationTime.toNumber() * 1000),
        };
      });
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

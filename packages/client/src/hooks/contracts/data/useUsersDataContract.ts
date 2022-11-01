import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import UsersDataContractABI from '@/libs/hardhat/artifacts/contracts/data/UsersData.sol/UsersData.json';
import type { UsersData as UsersDataType } from '@/libs/hardhat/types';
import { SharedStruct } from '@/libs/hardhat/types/contracts/data/UsersData';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = UsersDataContractABI.abi;

type Props = {};
type ReturnUsersDataContract = {};

export const useUsersDataContract = ({}: Props): ReturnUsersDataContract => {
  const [allUserList, setAllUserList] = useState<SharedStruct.UserStruct[]>();
  const ethereum = getEthereumSafety();

  const usersDataContract: UsersDataType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as UsersDataType;
  }, [ethereum]);

  const handleGetAllUserList = useCallback(async () => {
    try {
      if (!usersDataContract) return;
      const getAllUserList = await usersDataContract.getAllUserList();
      const allUserListOrganize = getAllUserList.map((user) => {
        return {
          userAddress: user.userAddress,
          userName: user.userName,
          userProfile: user.userProfile,
          userIcon: user.userIcon,
        };
      });
      setAllUserList(allUserListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [usersDataContract]);

  useEffect(() => {
    allUserList;
    handleGetAllUserList();
  }, [allUserList, handleGetAllUserList]);

  return {
    allUserList,
  };
};

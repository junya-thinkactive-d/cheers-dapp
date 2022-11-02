import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import UsersDataContractABI from '@/libs/hardhat/artifacts/contracts/data/UsersData.sol/UsersData.json';
import type { UsersData as UsersDataType } from '@/libs/hardhat/types';
import { UserType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = UsersDataContractABI.abi;

type Props = {};
type ReturnUsersDataContract = {
  allUserList: UserType[] | undefined;
};

export const useUsersDataContract = ({}: Props): ReturnUsersDataContract => {
  const [allUserList, setAllUserList] = useState<UserType[]>();
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
          timestamp: new Date(user.creationTime.toNumber() * 1000),
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

import { useCallback, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import CheersContractABI from '@/libs/hardhat/artifacts/contracts/Cheers.sol/Cheers.json';
import type { Cheers as CheersType } from '@/libs/hardhat/types';
import { DaoFactory, UserFactory } from '@/types/contractTypes';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x4711313De918B66661fC826497e228526Cbc1067';
const CONTRACT_ABI = CheersContractABI.abi;

type Props = {};

type ReturnUseCheersContract = {
  mining: boolean;
  handleNewDaoPoolFactory: (_inputDao: DaoFactory) => Promise<void>;
  handleNewUserPoolFactory: (_inputUser: UserFactory) => Promise<void>;
};

export const useCheersContract = ({}: Props): ReturnUseCheersContract => {
  const [mining, setMining] = useState<boolean>(false);
  const ethereum = getEthereumSafety();

  const cheersContract: CheersType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as CheersType;
  }, [ethereum]);

  const handleNewDaoPoolFactory = useCallback(
    async (inputDao: DaoFactory) => {
      try {
        if (!cheersContract) return;
        const newDaoPoolFactoryTxn = await cheersContract.newDaoPoolFactory(
          inputDao.daoName,
          inputDao.daoProfile,
          inputDao.daoIcon,
        {gasLimit: ethers.utils.parseEther('0.1')});
        setMining(true);
        await newDaoPoolFactoryTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cheersContract],
  );
  const handleNewUserPoolFactory = useCallback(
    async (inputUser: UserFactory) => {
      try {
        if (!cheersContract) return;
        const newUserPoolFactoryTxn = await cheersContract.newDaoPoolFactory(
          inputUser.userName,
          inputUser.userProfile,
          inputUser.userIcon,
        {gasLimit: ethers.utils.parseEther('0.1')});
        setMining(true);
        await newUserPoolFactoryTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cheersContract],
  );

  return {
    mining,
    handleNewDaoPoolFactory,
    handleNewUserPoolFactory,
  };
};

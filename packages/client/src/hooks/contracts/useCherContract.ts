import { useCallback, useMemo, useState, useEffect } from 'react';

import { ethers } from 'ethers';

import CherContractABI from '@/libs/hardhat/artifacts/contracts/interfaces/IERC20.sol/IERC20.json';
import type { CHERToken as CHERTokenType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0xc87D7FE5E5Af9cfEDE29F8d362EEb1a788c539cf';
const CONTRACT_ABI = CherContractABI.abi;

type Props = {
  address?: string;
};

type ReturnUseCherContract = {
  mining: boolean;
  cherBalance: string;
  handleTransfer: (_toAddress: string, _amount: number) => void;
};

export const useCherContract = ({ address }: Props): ReturnUseCherContract => {
  const [cherBalance, setCherBalance] = useState<string>('');
  const [mining, setMining] = useState<boolean>(false);
  const ethereum = getEthereumSafety();

  const cherContract: CHERTokenType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore:
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as CHERTokenType;
  }, [ethereum]);

  const handleBalanceOf = useCallback(async () => {
    try {
      if (!cherContract) return;
      if (!address) return;
      const balanceOf = await cherContract.balanceOf(address);
      const balanceOfNumber = balanceOf;
      setCherBalance(balanceOfNumber.toString());
    } catch (error) {
      console.error(error);
    }
  }, [address, cherContract]);

  const handleTransfer = useCallback(
    async (toAddress: string, amount: number) => {
      try {
        if (!cherContract) return;
        const transfer = await cherContract.transfer(toAddress, amount);
        setMining(true);
        await transfer.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cherContract],
  );

  useEffect(() => {
    handleBalanceOf();
  }, [handleBalanceOf]);

  useEffect(() => {
    handleBalanceOf();
  }, [handleBalanceOf]);

  return {
    mining,
    cherBalance,
    handleTransfer,
  };
};

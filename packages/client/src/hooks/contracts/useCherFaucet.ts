import { useCallback, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import CherFaucetABI from '@/libs/hardhat/artifacts/contracts/CherFaucet.sol/CherFaucet.json';
import type { CherFaucet as CherFaucetType } from '@/libs/hardhat/types';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '0x049Af7DE8b1a25658BBD6a0F6f8aE23632975b50';
const CONTRACT_ABI = CherFaucetABI.abi;

type Props = {};

type ReturnUseCherFaucet = {
  mining: boolean;
  handleSetOwner: (_ownerAddress: string) => void;
  handleSetCHER: (_CHERAddress: string) => void;
  handleFaucet: () => void;
  handleWithdraw: () => void;
  handleExchange: (_cherAmount: number) => void;
};

export const useCherFaucetContract = ({}: Props): ReturnUseCherFaucet => {
  const [mining, setMining] = useState<boolean>(false);
  const ethereum = getEthereumSafety();

  const cherFaucetContract: CherFaucetType | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as CherFaucetType;
  }, [ethereum]);

  const handleSetOwner = useCallback(
    async (ownerAddress: string) => {
      try {
        if (!cherFaucetContract) return;
        const setOwnerTxn = await cherFaucetContract.setOwner(ownerAddress);
        setMining(true);
        await setOwnerTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cherFaucetContract],
  );

  const handleSetCHER = useCallback(
    async (CHERAddress: string) => {
      try {
        if (!cherFaucetContract) return;
        const setCHERTxn = await cherFaucetContract.setCHER(CHERAddress);
        setMining(true);
        await setCHERTxn.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cherFaucetContract],
  );

  const handleFaucet = useCallback(async () => {
    try {
      if (!cherFaucetContract) return;
      const faucetTxn = await cherFaucetContract.faucet();
      setMining(true);
      await faucetTxn.wait();
      setMining(false);
    } catch (error) {
      console.error(error);
    }
  }, [cherFaucetContract]);

  const handleWithdraw = useCallback(async () => {
    try {
      if (!cherFaucetContract) return;
      const withdraw = await cherFaucetContract.withdraw();
      setMining(true);
      await withdraw.wait();
      setMining(false);
    } catch (error) {
      console.error(error);
    }
  }, [cherFaucetContract]);

  const handleExchange = useCallback(
    async (cherAmount: number) => {
      try {
        if (!cherFaucetContract) return;
        const exchange = await cherFaucetContract.exchange(cherAmount);
        setMining(true);
        await exchange.wait();
        setMining(false);
      } catch (error) {
        console.error(error);
      }
    },
    [cherFaucetContract],
  );

  return {
    mining,
    handleSetOwner,
    handleSetCHER,
    handleFaucet,
    handleWithdraw,
    handleExchange,
  };
};

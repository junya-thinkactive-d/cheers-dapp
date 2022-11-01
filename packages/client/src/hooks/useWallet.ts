import { useCallback, useEffect, useMemo, useState } from 'react';

import { GOERLI_CHAIN_ID } from '@/constants';
import { getEthereumSafety } from '@/utils';

type ReturnUseWallet = {
  isGoerliTestNetwork: boolean;
  currentAccount: string | undefined;
  connectWallet: () => void;
  checkIfWalletIsConnected: () => void;
};

export const useWallet = (): ReturnUseWallet => {
  const [currentAccount, setCurrentAccount] = useState<string>();
  const [currentChainId, setCurrentChainId] = useState<string>();
  const ethereum = getEthereumSafety();

  const isGoerliTestNetwork = useMemo(() => {
    return currentChainId === GOERLI_CHAIN_ID;
  }, [currentChainId]);

  const handleSetAccount = useCallback((accounts: unknown) => {
    if (!Array.isArray(accounts)) return;
    if (!accounts || accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      alert('No authorized account found');
    }
  }, []);

  const checkIfWalletIsConnected = useCallback(async () => {
    if (!ethereum) return;
    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      if (typeof chainId === 'string') {
        setCurrentChainId(chainId);
      }
      handleSetAccount(accounts);
    } catch (err) {
      console.error(err);
    }
  }, [ethereum, handleSetAccount]);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert('Get Metamask!');
        return;
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      handleSetAccount(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!ethereum) return;
    checkIfWalletIsConnected();
    const handleChainChanged = (chainId: unknown) => {
      if (typeof chainId === 'string') {
        setCurrentChainId(chainId);
      }
    };
    ethereum.on('chainChanged', handleChainChanged);
    return () => {
      if (ethereum?.off) {
        ethereum.off('chainChanged', handleChainChanged);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isGoerliTestNetwork,
    currentAccount,
    connectWallet,
    checkIfWalletIsConnected,
  };
};

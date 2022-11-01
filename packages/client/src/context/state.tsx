import { createContext, ReactNode, useContext } from 'react';

import { useWallet } from '../hooks/useWallet';

type WalletContextType = {
  currentAccount: string | undefined;
  connectWallet: () => void;
};

type Props = {
  children: ReactNode;
};

const WalletCtx = createContext<WalletContextType | null>(null);

export const MyProvider = ({ children }: Props) => {
  const { currentAccount, connectWallet } = useWallet();
  const sharedState = { currentAccount, connectWallet };

  return <WalletCtx.Provider value={sharedState}>{children}</WalletCtx.Provider>;
};

export const useWalletContext = () => {
  return useContext(WalletCtx);
};

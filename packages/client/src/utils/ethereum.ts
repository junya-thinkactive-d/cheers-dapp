import { EthereumType } from '@/types';

export const getEthereumSafety = (): EthereumType | null => {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const { ethereum } = window;
    return ethereum;
  }
  return null;
};

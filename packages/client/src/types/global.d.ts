import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

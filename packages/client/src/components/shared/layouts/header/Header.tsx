import React from 'react';

import Link from 'next/link';

// import { InputSearch as InputSearch } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';

import ConnectedWalletButton from './ConnectedWalletButton';
import ConnectWalletButton from './ConnectWalletButton';

const Header = () => {
  const walletContext = useWalletContext();

  return (
    <div className="sticky top-0 h-20 bg-primary z-50">
      <div className="flex justify-between items-center px-12 h-full">
        <Link href="/">
          <div className="px-4 py-2 bg-gradient-to-r from-cherGreen to-cherBlue cursor-pointer">CHEERS</div>
        </Link>
        <div>
          <div>{walletContext?.currentAccount}</div>
        </div>
        <div>
          {!walletContext?.currentAccount ? (
            <ConnectWalletButton />
          ) : (
            <ConnectedWalletButton url={walletContext?.currentAccount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

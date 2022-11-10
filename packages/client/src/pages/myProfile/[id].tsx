import React, { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { BeforeCreatePool, BeforeLogin } from '@/components/pages/home';
import { MyProfileCard } from '@/components/pages/myProfile';
import { useWalletContext } from '@/context/state';
import { usePoolListDataContract } from '@/hooks/contracts/data';

const Profile = () => {
  const [ownerAddress, setOwnerAddress] = useState<string>('');
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';
  const handleSetOwnerAddress = useCallback(() => {
    walletContext?.currentAccount && setOwnerAddress(walletContext.currentAccount);
  }, [walletContext?.currentAccount]);
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  useEffect(() => {
    handleSetOwnerAddress();
  }, [handleSetOwnerAddress]);

  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforeLogin />
      ) : (
        <>
          {id != walletContext?.currentAccount ? (
            <>
              <BeforeLogin />
            </>
          ) : myPoolAddress === '' ? (
            <>
              <BeforeCreatePool />
            </>
          ) : (
            <>
              <MyProfileCard ownerAddress={id} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Profile;

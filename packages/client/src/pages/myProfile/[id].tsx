import React from 'react';

import { useRouter } from 'next/router';

import { BeforeLogin } from '@/components/pages/home';
import { MyProfileCard } from '@/components/pages/myProfile';
import { useWalletContext } from '@/context/state';

const Profile = () => {
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';
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

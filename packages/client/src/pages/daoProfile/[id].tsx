import React from 'react';

import { useRouter } from 'next/router';

import { DaoProfileCard } from '@/components/pages/daoProfile';
import { BeforeLogin } from '@/components/pages/home';
import { ChallengeProjects, CheerProjects, PageTitle } from '@/components/shared/parts';
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
          <PageTitle title="USER PROFILE" />
          <DaoProfileCard daoOwnerAddress={id} />
          <ChallengeProjects projectOwnerAddress={id} />
          <CheerProjects ownerAddress={id} />
        </>
      )}
    </>
  );
};

export default Profile;

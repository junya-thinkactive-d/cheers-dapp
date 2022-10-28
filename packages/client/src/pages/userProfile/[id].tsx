import React from 'react';

import { BeforeLogin } from '@/components/pages/home';
import { UserProfileCard } from '@/components/pages/userProfile';
import { ChallengeProjects, CheerProjects, PageTitle } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';

const UserProfile = () => {
  const walletContext = useWalletContext();
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforeLogin />
      ) : (
        <>
          <PageTitle title="USER PROFILE" />
          <UserProfileCard />
          <ChallengeProjects />
          <CheerProjects />
        </>
      )}
    </>
  );
};

export default UserProfile;

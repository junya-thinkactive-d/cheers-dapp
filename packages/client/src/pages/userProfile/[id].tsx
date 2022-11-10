import React from 'react';

import { useRouter } from 'next/router';

import { BeforeLogin } from '@/components/pages/home';
import { UserProfileCard } from '@/components/pages/userProfile';
import { ChallengeProjects, CheerProjects, PageTitle } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';

const UserProfile = () => {
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
          <UserProfileCard userOwnerAddress={id} />
          <ChallengeProjects ownerWalletAddress={id} />
          <CheerProjects ownerWalletAddress={id} />
        </>
      )}
    </>
  );
};

export default UserProfile;

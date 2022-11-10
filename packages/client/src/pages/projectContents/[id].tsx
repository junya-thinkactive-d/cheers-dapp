import React from 'react';

import { useRouter } from 'next/router';

import { BeforeLogin } from '@/components/pages/home';
import { CheerThisProject } from '@/components/pages/project';
import { ProjectMainCard } from '@/components/shared/card';
import { ProjectCheers } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';
import { useProjectsDataContract } from '@/hooks/contracts/data';

const Project = () => {
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';

  const projectPoolAddress = id;

  const { projectAddressToProjectData } = useProjectsDataContract({ projectPoolAddress });
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforeLogin />
      ) : (
        <>
          <ProjectMainCard projectData={projectAddressToProjectData} />
          <CheerThisProject projectPoolAddress={projectPoolAddress} />
          <ProjectCheers projectPoolAddress={projectPoolAddress} />
        </>
      )}
    </>
  );
};

export default Project;

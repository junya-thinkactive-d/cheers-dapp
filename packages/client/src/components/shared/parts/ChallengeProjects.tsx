import React from 'react';

import { ProjectCard } from '@/components/shared/card';
// import { projectsData } from '@/mock';
import { Nodata } from '@/components/shared/parts';
import { usePoolListDataContract, useProjectsDataContract } from '@/hooks/contracts/data';

type Props = {
  ownerWalletAddress: string;
};

const ChallengeProjects = ({ ownerWalletAddress }: Props) => {
  const ownerAddress = ownerWalletAddress;
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const projectOwnerAddress = myPoolAddress;
  const { eachProjectList } = useProjectsDataContract({ projectOwnerAddress });
  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Challenge Projects</div>
      <div className="flex flex-wrap">
        {eachProjectList ? eachProjectList.map((project, i) => <ProjectCard key={i} project={project} />) : <Nodata />}
      </div>
    </div>
  );
};

export default ChallengeProjects;

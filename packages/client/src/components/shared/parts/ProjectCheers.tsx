import React from 'react';

import { CheerCardForProject } from '@/components/shared/card';
import { useCheerListDataContract } from '@/hooks/contracts/data';

type Props = {
  projectPoolAddress: string;
};

const ProjectCheers = ({ projectPoolAddress }: Props) => {
  const {myProjectCheerDataList} =useCheerListDataContract({projectPoolAddress})

  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Cheer Projects</div>
      <div className="flex flex-wrap">
        {myProjectCheerDataList.map((cheerData, i) => (
            <CheerCardForProject key={i} cheerData={cheerData} />
          ))}
      </div>
    </div>
  );
};

export default ProjectCheers;

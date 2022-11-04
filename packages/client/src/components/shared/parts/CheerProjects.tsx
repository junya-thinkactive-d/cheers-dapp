import React from 'react';

import { useCheerListDataContract } from '../../../hooks/contracts/data/useCheerListDataContract';
import { usePoolListDataContract } from '../../../hooks/contracts/data/usePoolListDataContract';
import { CheerCard } from '../card';

type Props = {
  ownerAddress: string;
};

const CheerProjects = ({ ownerAddress }: Props) => {
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const cheerPoolAddress = myPoolAddress;
  const { myPoolCheerDataList } = useCheerListDataContract({ cheerPoolAddress });

  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Cheer Projects</div>
      <div className="flex flex-wrap">
        {myPoolCheerDataList.map((cheerData, i) => (
            <CheerCard key={i} cheerData={cheerData} />
          ))}
      </div>
    </div>
  );
};

export default CheerProjects;

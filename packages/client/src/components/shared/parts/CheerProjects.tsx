import React from 'react';

import { CheerCard } from '@/components/shared/card';
import { cheersData } from '@/data';

const CheerProjects = () => {
  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Cheer Projects</div>
      <div className="flex flex-wrap">
        {cheersData.map((cheer, i) => (
          <CheerCard
            key={i}
            challengerName={cheer.challengerName}
            challengerIcon={cheer.challengerIcon}
            belongDao={cheer.belongDao}
            projectName={cheer.projectName}
            comment={cheer.comment}
            throwCher={cheer.throwCher}
          />
        ))}
      </div>
    </div>
  );
};

export default CheerProjects;

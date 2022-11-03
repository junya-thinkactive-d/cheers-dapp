import React from 'react';

import { ProjectCard } from '@/components/shared/card';
import { projectsData } from '@/mock';

const ChallengeProjects = () => {
  return (
    <div className="p-12">
      <div className="text-4xl mb-12">Challenge Projects</div>
      <div className="flex flex-wrap">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ChallengeProjects;

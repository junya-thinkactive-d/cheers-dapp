import React from 'react';

import { ProjectCard } from '@/components/shared/card';
// import { projectsData } from '@/mock';
import { Nodata } from '@/components/shared/parts';
import { useProjectsDataContract } from '@/hooks/contracts/data';

type Props = {};

const AllProjects = ({}: Props) => {
  const { allProjectList } = useProjectsDataContract({});
  return (
    <div className="p-12">
      <div className="flex flex-wrap">
        {allProjectList ? allProjectList.map((project, i) => <ProjectCard key={i} project={project} />) : <Nodata />}
      </div>
    </div>
  );
};

export default AllProjects;

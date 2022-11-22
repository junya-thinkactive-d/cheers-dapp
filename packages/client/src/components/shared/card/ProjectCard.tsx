import React from 'react';

import Link from 'next/link';

import { useProjectPoolContract } from '@/hooks/contracts';
import { ProjectType } from '@/types/struct';

import { ChangeBelongDaoName } from '../parts';

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  const address = project.projectAddress;
  const projectPoolAddress = project.projectAddress;
  const { totalCher } = useProjectPoolContract({ projectPoolAddress });

  return (
    <>
      <Link href={`/projectContents/${address}`}>
        <div className="min-w-72 w-72 p-4 my-4 rounded-lg bg-secondary cursor-pointer">
          <div className="flex items-center text-xs mb-2">
            <ChangeBelongDaoName belongDaoAddress={project.belongDaoAddress} />
          </div>
          <div className="text-cherGreen mb-2 text-sm">{project.projectName}</div>
          <div className="text-xs mb-2 h-20">{project.projectContents}</div>
          <div className="flex items-start h-8 text-cherYellow">
            <div className="text-xs  mr-1">reword:</div>
            <div className="text-xs">{project.projectReword}</div>
          </div>
          <div className="flex items-center text-lg">
            <div>💰</div>
            <div className="flex items-end">
              <div className="ml-1 text-sm">CHER: {totalCher ? totalCher : 0}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;

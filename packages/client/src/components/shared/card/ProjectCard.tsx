import React from 'react';

import Link from 'next/link';

type Props = {
  belongDao: string;
  projectName: string;
  projectContent: string;
  reword: string;
  totalCher: number;
};

const ProjectCard = ({ belongDao, projectName, projectContent, reword, totalCher }: Props) => {
  return (
    <>
      <Link href="#">
        <div className="w-80 p-4 mx-4 my-4 rounded-lg bg-secondary cursor-pointer">
          <div className="flex items-center text-xs mb-2">
            <div className="p-1 bg-cherBlue rounded-lg">{belongDao}</div>
          </div>
          <div className="text-cherGreen mb-2 text-sm">{projectName}</div>
          <div className="text-xs mb-2 h-20">{projectContent}</div>
          <div className="flex items-start h-8 text-cherYellow">
            <div className="text-xs  mr-1">reword:</div>
            <div className="text-xs">{reword}</div>
          </div>
          <div className="flex items-center text-lg">
            <div>💰</div>
            <div className="flex items-end">
              <div className="translate-y-0.5">{totalCher.toLocaleString()}</div>
              <div className="ml-1 text-sm">CHER</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;

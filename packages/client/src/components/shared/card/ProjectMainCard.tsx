import React, { useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { DaoPoolToName } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';
import { ProjectType } from '@/types/struct';

type Props = {
  projectData: ProjectType;
};

const ProjectMainCard = ({ projectData }: Props) => {
  const [name, setName] = useState<string>('');
  const poolAddress = projectData.projectOwnerAddress;
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const userOwnerAddress = myWalletAddress;
  const daoOwnerAddress = myWalletAddress;
  const { userName, userPoolAddress } = useUserPoolContract({ userOwnerAddress });
  const { daoName, daoPoolAddress } = useDaoPoolContract({ daoOwnerAddress });

  const setProjectOwnerName = useCallback(async () => {
    if (userPoolAddress !== '') {
      setName(userName);
    } else if (daoPoolAddress !== '') {
      setName(daoName);
    } else {
      setName('');
    }
  }, [daoName, daoPoolAddress, userName, userPoolAddress]);

  useEffect(() => {
    setProjectOwnerName();
  }, [setProjectOwnerName]);

  return (
    <div className="flex justify-center">
      <div className="w-[800px] h-[500px] my-12">
        <div className="w-full h-full rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px]">
          <div className="w-full h-full bg-secondary rounded-xl p-4">
            <div className="flex">
              <div className="mr-2">Project Address:</div>
              <div>{projectData.projectAddress}</div>
            </div>
            <div className="flex">
              <div>Project Owner:</div>
              <div>{name}</div>
            </div>
            <div className="flex justify-start items-center">
              <div>Belong Dao:</div>
              <DaoPoolToName poolAddress={projectData.belongDaoAddress} />
            </div>
            <div>Project Name: {projectData.projectName}</div>
            <div>Project Contents: {projectData.projectContents}</div>
            <div>Project Reword: {projectData.projectReword}</div>
            <div>Created At: {dayjs(projectData.timestamp.toString()).format('YYYY/M/D/H:m:s')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainCard;

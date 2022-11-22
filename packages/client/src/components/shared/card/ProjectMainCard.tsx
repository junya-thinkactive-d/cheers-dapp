import React, { useCallback, useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { DaoPoolToName } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';
import { useCherContract } from '@/hooks/contracts/useCherContract';
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
  const address = projectData.projectAddress;
  const { cherBalance } = useCherContract({ address });

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
              <div className="mr-2 text-cherYellow">Project Address:</div>
              <div>{projectData.projectAddress}</div>
            </div>
            <div className="flex">
              <div className="mr-2 text-cherYellow">Project Owner:</div>
              <div>{name}</div>
            </div>
            <div className="flex justify-start items-center">
              <div className="mr-2 text-cherYellow">Belong Dao:</div>
              <DaoPoolToName poolAddress={projectData.belongDaoAddress} />
            </div>
            <div className="mr-2 text-cherYellow">Project Name:</div>
            <div>{projectData.projectName}</div>
            <div className="mr-2 text-cherYellow">Project Contents:</div> <div>{projectData.projectContents}</div>
            <div className="mr-2 text-cherYellow">Project Reword: </div>
            <div>{projectData.projectReword}</div>
            <div className="mr-2 text-cherYellow">Created At:</div>{' '}
            <div>{dayjs(projectData.timestamp.toString()).format('YYYY/M/D/H:m:s')}</div>
            <div className="mr-2 text-cherYellow">Cher Balance:</div> <div>{cherBalance}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMainCard;

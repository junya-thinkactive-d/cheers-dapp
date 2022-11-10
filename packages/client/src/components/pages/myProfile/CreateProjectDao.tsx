import React, { useCallback, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button } from '@/components/shared/parts';
import { useDaoPoolContract } from '@/hooks/contracts';

type Props = {
  daoOwnerAddress: string;
};

const CreateProjectDao = ({ daoOwnerAddress }: Props) => {
  const [projectName, setProjectName] = useState<string>('');
  const [projectContents, setProjectContents] = useState<string>('');
  const [projectReword, setProjectReword] = useState<string>('');

  const { daoMining, handleNewProjectFactory } = useDaoPoolContract({ daoOwnerAddress });

  const onClickEvent = useCallback(async () => {
    try {
      await handleNewProjectFactory({ projectName, projectContents, projectReword });
      setProjectName('');
      setProjectContents('');
      setProjectReword('');
    } catch (error) {
      alert(error);
    }
  }, [handleNewProjectFactory, projectContents, projectName, projectReword]);

  return (
    <div className="flex justify-start items-start pt-12">
      <Mining mining={daoMining} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl text-cherRed">PROJECT FACTORY</div>
        <div className="flex flex-col justify-center items-center mt-12">
          <div>PROJECT NAME:</div>
          <input
            className="w-96 text-primary p-2 mx-2 rounded-lg"
            type="text"
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <div>PROJECT CONTENTS:</div>
          <textarea
            className="w-96 h-40 text-primary p-2 mx-2 rounded-lg resize-none"
            onChange={(e) => setProjectContents(e.target.value)}
            placeholder="Project Contents..."
          />
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div>PROJECT REWARD:</div>
          <input
            className="w-96 text-primary p-2 mx-2 rounded-lg"
            type="text"
            onChange={(e) => setProjectReword(e.target.value)}
            placeholder="Project Reward"
          />
        </div>
        <Button buttonName="CREATE POOL" onClickEvent={onClickEvent} />
      </div>
    </div>
  );
};

export default CreateProjectDao;

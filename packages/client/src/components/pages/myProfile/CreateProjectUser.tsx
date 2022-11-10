import React, { useCallback, useEffect, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button } from '@/components/shared/parts';
import { useUserPoolContract } from '@/hooks/contracts';
import { useDaosDataContract, usePoolListDataContract } from '@/hooks/contracts/data';

type Props = {
  userOwnerAddress: string;
};

const CreateProjectUser = ({ userOwnerAddress }: Props) => {
  const [belongDaoName, setBelongDaoName] = useState<string>('');
  const [daoNameList, setDaoNameList] = useState<string[]>([]);
  const [belongDaoWalletAddress, setBelongDaoWalletAddress] = useState<string>('');
  const [belongDaoAddress, setBelongDaoAddress] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const [projectContents, setProjectContents] = useState<string>('');
  const [projectReword, setProjectReword] = useState<string>('');
  const [buttonOpen, setButtonOpen] = useState<boolean>(false);

  const { userMining, handleNewProjectFactory } = useUserPoolContract({ userOwnerAddress });

  const { allDaoList } = useDaosDataContract({});

  const createDaoNameList = useCallback(async () => {
    const daoNameArray: string[] = [];
    allDaoList.map((dao) => {
      daoNameArray.push(dao.daoName);
    });
    setDaoNameList(daoNameArray);
  }, [allDaoList]);

  const handleSetBelongDaoName = useCallback(
    async (e: any) => {
      setBelongDaoName(daoNameList[e.target.value]);
      setButtonOpen(true);
    },
    [daoNameList],
  );

  const handleSelectedButton = useCallback(async () => {
    allDaoList.map((dao) => {
      if (dao.daoName === belongDaoName) {
        setBelongDaoWalletAddress(dao.daoWalletAddress);
      }
      setButtonOpen(false);
    });
  }, [allDaoList, belongDaoName, setBelongDaoWalletAddress]);
  const poolAddress = belongDaoWalletAddress;

  const { myPoolAddress } = usePoolListDataContract({ poolAddress });

  const handleSetBelongDaoAddress = useCallback(async () => {
    setBelongDaoAddress(myPoolAddress);
  }, [myPoolAddress]);

  const onClickEvent = useCallback(async () => {
    handleNewProjectFactory({ belongDaoAddress, projectName, projectContents, projectReword });
  }, [belongDaoAddress, handleNewProjectFactory, projectContents, projectName, projectReword]);

  useEffect(() => {
    createDaoNameList();
    handleSetBelongDaoAddress();
  }, [createDaoNameList, handleSetBelongDaoAddress]);

  return (
    <div className="flex justify-start items-start pt-12">
      <Mining mining={userMining} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl text-cherBlue">PROJECT FACTORY</div>
        <div className="flex flex-col justify-center items-center mt-12">
          <div>SELECT BELONG DAO:</div>
          <select onChange={handleSetBelongDaoName} className="w-96 text-primary p-2 mx-2 rounded-lg">
            {daoNameList.map((daoName, i) => (
              <option key={i} value={i} className="text-secondary">
                {daoName}
              </option>
            ))}
          </select>
          {buttonOpen && (
            <button className="bg-secondary p-2 mt-2 mx-2 rounded-lg" onClick={handleSelectedButton}>
              Set Belong DAO
            </button>
          )}
        </div>
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

export default CreateProjectUser;

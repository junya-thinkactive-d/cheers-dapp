import React, { useCallback, useEffect, useState } from 'react';

import { DaoSelect } from '@/components/pages/myProfile';
import { Mining } from '@/components/shared/layouts';
import { Button } from '@/components/shared/parts';
import { useUserPoolContract } from '@/hooks/contracts';
import { useDaosDataContract, usePoolListDataContract } from '@/hooks/contracts/data';

type Props = {
  userOwnerAddress: string;
};

type NameListType = {
  value: string;
  text: string;
};

const CreateProjectUser = ({ userOwnerAddress }: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [options, setOptions] = useState<NameListType[]>([]);
  const [buttonOpen, setButtonOpen] = useState<boolean>(false);
  const [ownerAddress, setOwnerAddress] = useState<string>('');
  const [belongDaoAddress, setBelongDaoAddress] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const [projectContents, setProjectContents] = useState<string>('');
  const [projectReword, setProjectReword] = useState<string>('');

  const { userMining, handleNewProjectFactory } = useUserPoolContract({ userOwnerAddress });
  const { allDaoList } = useDaosDataContract({});
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });

  const handleSelectClick = useCallback(async () => {
    setButtonOpen(true);
  }, []);

  const handleSetOptions = useCallback(() => {
    const optionItem: NameListType[] = [{ value: '', text: 'Please Select DAO' }];
    allDaoList.map((dao) => {
      optionItem.push({ value: dao.daoName, text: dao.daoName });
    });
    setOptions(optionItem);
  }, [allDaoList]);

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSelected(e.target.value);
  };

  const handleSetBelongDaoAddress = useCallback(async () => {
    allDaoList.map((dao) => {
      if (dao.daoName === selected) {
        setOwnerAddress(dao.daoWalletAddress);
      }
    });
    setBelongDaoAddress(myPoolAddress);
    setButtonOpen(false);
  }, [allDaoList, myPoolAddress, selected]);

  const onClickEvent = useCallback(async () => {
    try {
      await handleNewProjectFactory({ belongDaoAddress, projectName, projectContents, projectReword });
      setProjectName('');
      setProjectContents('');
      setProjectReword('');
    } catch (error) {
      alert(error);
    }
  }, [belongDaoAddress, handleNewProjectFactory, projectContents, projectName, projectReword]);

  useEffect(() => {
    handleSetOptions();
  }, [handleSetOptions]);

  return (
    <div className="flex justify-center items-center pt-12">
      <Mining mining={userMining} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl text-cherBlue">PROJECT FACTORY</div>
        <DaoSelect
          selected={selected}
          handleSelectClick={handleSelectClick}
          handleChange={handleChange}
          options={options}
          buttonOpen={buttonOpen}
          handleSetBelongDaoAddress={handleSetBelongDaoAddress}
        />
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

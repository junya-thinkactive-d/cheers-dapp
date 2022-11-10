import React, { useCallback, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button } from '@/components/shared/parts';
import { useCheersContract } from '@/hooks/contracts';

const DaoPoolCreate = () => {
  const [daoName, setDaoName] = useState<string>('');
  const [daoIcon, setDaoIcon] = useState<string>('');
  const [daoProfile, setDaoProfile] = useState<string>('');
  const { mining, handleNewDaoPoolFactory } = useCheersContract({});

  const setClearState = useCallback(async () => {
    setDaoName('');
    setDaoIcon('');
    setDaoProfile('');
  }, []);

  const onClickEvent = useCallback(async () => {
    try {
      await handleNewDaoPoolFactory({ daoName, daoIcon, daoProfile });
      await setClearState();
    } catch (error) {
      alert(error);
    }
  }, [daoIcon, daoName, daoProfile, handleNewDaoPoolFactory, setClearState]);

  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <Mining mining={mining} />
      <div className="text-4xl text-cherRed">DAO FACTORY</div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>DAO NAME:</div>
        <input
          className="w-96 text-primary p-2 mx-2 rounded-lg"
          type="text"
          onChange={(e) => setDaoName(e.target.value)}
          placeholder="Dao Name"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>DAO ICON URL:</div>
        <input
          className="w-96 text-primary p-2 mx-2 rounded-lg"
          type="text"
          onChange={(e) => setDaoIcon(e.target.value)}
          placeholder="Twitter Icon URL Only"
        />
      </div>
      <div className="text-cherPink">※Sorry! Currently, only Twitter icons are reflected.</div>
      <div className="flex flex-col justify-center items-center my-12">
        <div>DAO PROFILE:</div>
        <textarea
          className="w-96 h-40 text-primary p-2 mx-2 rounded-lg resize-none"
          onChange={(e) => setDaoProfile(e.target.value)}
          placeholder="Dao Profile..."
        />
      </div>
      <Button buttonName="CREATE POOL" onClickEvent={onClickEvent} />
    </div>
  );
};

export default DaoPoolCreate;

import React, { useCallback, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button } from '@/components/shared/parts';
import { useCheersContract } from '@/hooks/contracts';

const UserPoolCreate = () => {
  const [userName, setUserName] = useState<string>('');
  const [userIcon, setUserIcon] = useState<string>('');
  const [userProfile, setUserProfile] = useState<string>('');
  const { mining, handleNewUserPoolFactory } = useCheersContract({});

  const setClearState = useCallback(async () => {
    setUserName('');
    setUserIcon('');
    setUserProfile('');
  }, []);

  const onClickEvent = useCallback(async () => {
    try {
      await handleNewUserPoolFactory({ userName, userIcon, userProfile });
      await setClearState();
    } catch (error) {
      alert(error);
    }
  }, [handleNewUserPoolFactory, setClearState, userIcon, userName, userProfile]);

  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <Mining mining={mining} />
      <div className="text-4xl text-cherBlue">USER FACTORY</div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>YOUR NAME:</div>
        <input
          className="w-96 text-primary p-2 mx-2 rounded-lg"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div>YOUR ICON URL:</div>
        <input
          className="w-96 text-primary p-2 mx-2 rounded-lg"
          type="text"
          onChange={(e) => setUserIcon(e.target.value)}
        />
      </div>
      <div className="text-cherPink">※Sorry! Currently, only Twitter icons are reflected.</div>
      <div className="flex flex-col justify-center items-center my-12">
        <div>YOUR PROFILE:</div>
        <textarea
          className="w-96 h-40 text-primary p-2 mx-2 rounded-lg resize-none"
          onChange={(e) => setUserProfile(e.target.value)}
        />
      </div>
      <Button buttonName="CREATE POOL" onClickEvent={onClickEvent} />
    </div>
  );
};

export default UserPoolCreate;

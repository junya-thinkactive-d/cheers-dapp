import React, { useCallback, useEffect, useState } from 'react';

import {
  BuyCher,
  CreateProjectDao,
  CreateProjectUser,
  SellCher,
  SendCher,
  Withdraw,
} from '@/components/pages/myProfile';
import { ChallengeProjects, CheerProjects } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';
import { useCherContract } from '@/hooks/contracts/useCherContract';

type Props = {
  ownerAddress: string;
};

const MyProfileCard = ({ ownerAddress }: Props) => {
  const [poolAddressType, setPoolAddressType] = useState<{ type: string; name: string; poolAddress: string }>({
    type: '',
    name: '',
    poolAddress: '',
  });

  const userOwnerAddress = ownerAddress;
  const { userPoolAddress, userName } = useUserPoolContract({ userOwnerAddress });
  const daoOwnerAddress = ownerAddress;
  const { daoPoolAddress, daoName } = useDaoPoolContract({ daoOwnerAddress });
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const projectOwnerAddress = myPoolAddress;
  const address = myPoolAddress;
  const { cherBalance } = useCherContract({ address });

  const setPoolType = useCallback(() => {
    if (userPoolAddress !== '') {
      setPoolAddressType({ type: 'User', name: userName, poolAddress: userPoolAddress });
    } else if (daoPoolAddress !== '') {
      setPoolAddressType({ type: 'Dao', name: daoName, poolAddress: daoPoolAddress });
    } else {
      setPoolAddressType({ type: '', name: '', poolAddress: '' });
    }
  }, [daoName, daoPoolAddress, userName, userPoolAddress]);

  useEffect(() => {
    setPoolType();
  }, [setPoolType]);

  return (
    <>
      <div className="m-12">
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <div>
              <span className="text-cherYellow mx-1">Type:</span>
              {poolAddressType.type}
            </div>
            <div>
              <span className="text-cherYellow mx-1">{`${poolAddressType.type}`}Name:</span>
              {poolAddressType.name}
            </div>
            <div>
              <span className="text-cherYellow mx-1">{`${poolAddressType.type}`}Wallet Address:</span>
              {ownerAddress}
            </div>
            <div>
              <span className="text-cherYellow mx-1">{`${poolAddressType.type}`}Pool Address:</span>
              {poolAddressType.poolAddress}
            </div>
            <div>
              <span className="text-cherYellow mx-1">Pool Total CHER:</span>
              {cherBalance}
            </div>
            <div className="my-8">
              <BuyCher />
            </div>
            <div className="my-8">
              <SendCher ownerAddress={ownerAddress} />
            </div>
            <div className="my-8">
              <Withdraw ownerAddress={ownerAddress} />
            </div>
            <div className="my-8">
              <SellCher />
            </div>
          </div>
          <div className="w-1/2">
            {poolAddressType.type === 'Dao' ? (
              <CreateProjectDao daoOwnerAddress={daoOwnerAddress} />
            ) : poolAddressType.type === 'User' ? (
              <CreateProjectUser userOwnerAddress={userOwnerAddress} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div></div>
      </div>
      <div className="col-span-1">
        <ChallengeProjects poolAddress={projectOwnerAddress} />
        <CheerProjects ownerWalletAddress={ownerAddress} />
      </div>
    </>
  );
};

export default MyProfileCard;

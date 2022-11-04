import React, { useCallback, useEffect, useState } from 'react';

import { BuyCher, SellCher, SendCher, Withdraw } from '@/components/pages/myProfile';
import { ChallengeProjects, CheerProjects } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';

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

  const setPoolType = useCallback(() => {
    if (userPoolAddress != '') {
      setPoolAddressType({ type: 'user', name: userName, poolAddress: userPoolAddress });
    } else if (daoPoolAddress != '') {
      setPoolAddressType({ type: 'dao', name: daoName, poolAddress: daoPoolAddress });
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
        <div>Type: {poolAddressType.type}</div>
        <div>Name: {poolAddressType.name}</div>
        <div>Wallet Address: {ownerAddress}</div>
        <div>Pool Address: {poolAddressType.poolAddress}</div>
        <div>Total CHER: 100,000</div>
        <div className="my-8">
          <BuyCher />
        </div>
        <div className="my-8">
          <SendCher />
        </div>
        <div className="my-8">
          <Withdraw id={poolAddressType.poolAddress} />
        </div>
        <div className="my-8">
          <SellCher />
        </div>
      </div>
      <div className="col-span-1">
        <ChallengeProjects projectOwnerAddress={projectOwnerAddress} />
        <CheerProjects ownerAddress={ownerAddress} />
      </div>
    </>
  );
};

export default MyProfileCard;

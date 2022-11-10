import React, { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useUserPoolContract, useDaoPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';
import { CheerType } from '@/types/struct';

type Props = {
  cheerData: CheerType;
};

const CheerCardForProject = ({ cheerData }: Props) => {
  const poolAddress = cheerData.cheerPoolAddress;
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const userOwnerAddress = myWalletAddress;
  const daoOwnerAddress = myWalletAddress;
  const { userName, userIcon, userPoolAddress } = useUserPoolContract({ userOwnerAddress });
  const { daoName, daoIcon, daoPoolAddress } = useDaoPoolContract({ daoOwnerAddress });
  const [name, setName] = useState<string>('');
  const [icon, setIcon] = useState<string>('');

  const setCheerData = useCallback(async () => {
    if (userPoolAddress != '') {
      setName(userName);
      setIcon(userIcon);
    } else if (daoPoolAddress != '') {
      setName(daoName);
      setIcon(daoIcon);
    } else {
      setName('');
      setIcon('');
    }
  }, [daoIcon, daoName, daoPoolAddress, userIcon, userName, userPoolAddress]);

  useEffect(() => {
    setCheerData();
  }, [setCheerData]);

  return (
    <>
      <Link href={`/userProfile/${cheerData.cheerPoolAddress}`}>
        <div className="flex  flex-col w-80 p-4 mx-4 rounded-lg bg-secondary cursor-pointer mb-6">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex flex-col justify-center items-center bg-primary p-1 border">
              <div className="text-xs mb-1 text-cherRed">Cheer</div>
              <div className="relative w-10 h-10 my-1">
                <Image src={icon} layout="fill" objectFit="contain" alt="challenger icon" className="rounded-full" />
              </div>
              <div className="text-xs text-cherRed">{name}</div>
            </div>
          </div>
          <div className="p-2 mt-2 text-sm border border-white bg-primary">{cheerData.message}</div>
          <div className="flex items-center text-lg mt-1 ">
            <div>💰</div>
            <div className="flex items-end">
              <div className="translate-y-0.5">{cheerData.cher}</div>
              <div className="ml-1 text-sm">CHER</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CheerCardForProject;

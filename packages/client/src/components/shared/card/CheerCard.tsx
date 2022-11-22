import React, { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { DaoPoolToName } from '@/components/shared/parts';
import { useUserPoolContract, useProjectPoolContract, useDaoPoolContract } from '@/hooks/contracts';
import { useProjectsDataContract, usePoolListDataContract } from '@/hooks/contracts/data';
import { CheerType } from '@/types/struct';

type Props = {
  cheerData: CheerType;
};

const CheerCard = ({ cheerData }: Props) => {
  const projectPoolAddress = cheerData.projectAddress;
  // const poolAddress = cheerData.cheerPoolAddress;
  const { projectAddressToProjectData } = useProjectsDataContract({ projectPoolAddress });
  const poolAddress = projectAddressToProjectData.projectOwnerAddress;
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const userOwnerAddress = myWalletAddress;
  const daoOwnerAddress = myWalletAddress;
  const { userName, userIcon } = useUserPoolContract({ userOwnerAddress });
  const { daoName, daoIcon } = useDaoPoolContract({ daoOwnerAddress });
  const { totalCher } = useProjectPoolContract({ projectPoolAddress });

  const [name, setName] = useState<string>('');
  const [icon, setIcon] = useState<string>('');

  const handleSetNameAndSetIcon = useCallback(async () => {
    if (userName) {
      setName(userName);
      setIcon(userIcon);
    } else {
      setName(daoName);
      setIcon(daoIcon);
    }
  }, [daoIcon, daoName, userIcon, userName]);

  useEffect(()=>{
    handleSetNameAndSetIcon()
  },[handleSetNameAndSetIcon])

  return (
    <>
      <Link href={`/projectContents/${projectPoolAddress}`}>
        <div className="flex  flex-col w-80 p-4 mx-4 rounded-lg bg-secondary cursor-pointer mb-6">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex flex-col justify-center items-center bg-primary p-1 border">
              <div className="text-xs mb-1 text-cherRed">Challenger</div>
              <div className="relative w-10 h-10 my-1">
                <Image
                  src={icon}
                  layout="fill"
                  objectFit="contain"
                  alt="challenger icon"
                  className="rounded-full"
                />
              </div>
              <div className="text-xs text-cherYellow">{name}</div>
            </div>
            <div className="col-span-3 pl-2">
              <div className="flex items-center text-xs mb-2">
                <div className="p-1 bg-cherBlue rounded-lg"><DaoPoolToName poolAddress={projectAddressToProjectData.belongDaoAddress} /></div>
              </div>
              <div className=" text-xs">
                <div className="text-cherGreen">ProjectName:</div>
                <div>{projectAddressToProjectData.projectName}</div>
              </div>
              <div className="text-xs">
                <div className="text-cherGreen">Project Total CHER:</div>
                <div>{totalCher}</div>
              </div>
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

export default CheerCard;

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useUserPoolContract, useProjectPoolContract } from '@/hooks/contracts';
import { useProjectsDataContract, usePoolListDataContract } from '@/hooks/contracts/data';
import { CheerType } from '@/types/struct';

type Props = {
  cheerData: CheerType;
};

const CheerCard = ({ cheerData }: Props) => {
  const projectPoolAddress = cheerData.projectAddress;
  const poolAddress = cheerData.cheerPoolAddress;
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const userOwnerAddress = myWalletAddress;
  const { userName, userIcon } = useUserPoolContract({ userOwnerAddress });
  const { projectAddressToProjectData } = useProjectsDataContract({ projectPoolAddress });
  const { totalCher } = useProjectPoolContract({ projectPoolAddress });
  return (
    <>
      <Link href="#">
        <div className="flex  flex-col w-80 p-4 mx-4 rounded-lg bg-secondary cursor-pointer mb-6">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex flex-col justify-center items-center bg-primary p-1 border">
              <div className="text-xs mb-1 text-cherRed">Challenger</div>
              <div className="relative w-10 h-10 my-1">
                <Image
                  src={userIcon}
                  layout="fill"
                  objectFit="contain"
                  alt="challenger icon"
                  className="rounded-full"
                />
              </div>
              <div className="text-xs text-cherRed">{userName}</div>
            </div>
            <div className="col-span-3 pl-2">
              <div className="flex items-center text-xs mb-2">
                <div className="p-1 bg-cherBlue rounded-lg">{projectAddressToProjectData.belongDaoAddress}</div>
              </div>
              <div className="text-xs text-cherGreen">{projectAddressToProjectData.projectName}</div>
            </div>
          </div>
          <div className="p-2 mt-2 text-sm border border-white bg-primary">{}</div>
          <div className="flex items-center text-lg mt-1 ">
            <div>💰</div>
            <div className="flex items-end">
              <div className="translate-y-0.5">{totalCher}</div>
              <div className="ml-1 text-sm">CHER</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CheerCard;

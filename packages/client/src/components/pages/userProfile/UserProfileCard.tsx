import React, { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { ChangeBelongDaoName, Level, Nodata } from '@/components/shared/parts';
import { useUserPoolContract } from '@/hooks/contracts';
import { useProjectsDataContract, usePoolListDataContract } from '@/hooks/contracts/data';

type Props = {
  userOwnerAddress: string;
};

const UserProfileCard = ({ userOwnerAddress }: Props) => {
  const { userName, userProfile, userIcon, totalCher } = useUserPoolContract({ userOwnerAddress });
  const ownerAddress = userOwnerAddress;
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const projectOwnerAddress = myPoolAddress;
  const { eachProjectList } = useProjectsDataContract({ projectOwnerAddress });

  const [belongDaoAddressList, setBelongDaoAddressList] = useState<string[]>([]);

  const setBelongDaos = useCallback(async () => {
    const projectList: string[] = [];
    eachProjectList.map((project) => {
      projectList.push(project.belongDaoAddress);
    });
    setBelongDaoAddressList(projectList);
  }, [eachProjectList]);

  useEffect(() => {
    setBelongDaos();
  }, [setBelongDaos]);

  return (
    <div className="flex justify-center items-center w-full">
      {userName ? (
        <div className="w-[800px] h-[500px] my-12">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px]">
            <div className="w-full h-full bg-secondary rounded-xl grid grid-cols-4 grid-rows-4">
              <div className="col-span-2 row-span-2 py-8 px-12">
                <div className="relative w-full h-full">
                  <Image src={userIcon} layout="fill" objectFit="cover" alt="user icon" className="rounded-lg" />
                </div>
              </div>
              <div className="row-start-3 col-span-2 row-span-2 flex flex-col justify-between py-8 px-12 text-lg">
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">name:</div>
                  <div className="ml-4 text-2xl">{userName}</div>
                </div>
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">profile:</div>
                  <div className="ml-4 text-xl">{userProfile}</div>
                </div>
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">total ex:</div>
                  <div className="ml-4 text-xl">{totalCher}</div>
                </div>
              </div>
              <div className="col-start-3 col-span-2 row-span-2 flex flex-col justify-center items-left py-8 px-12">
                {/* level
              challenger */}
                <div className="flex justify-between mb-2">
                  <div className="flex flex-col justify-center items-center w-3/12">
                    <div className="text-xl">🗡️</div>
                    <div className="text-xs">challenger</div>
                  </div>
                  <Level ex={totalCher} />
                </div>
                {/* level
              cheer */}
                <div className="flex justify-between mb-2">
                  <div className="flex flex-col justify-center items-center w-3/12">
                    <div className="text-2xl">🛡️</div>
                    <div className="text-xs">cheer</div>
                  </div>
                  <Level ex={totalCher} />
                </div>
              </div>
              <div className="col-start-3 row-start-3 col-span-2 row-span-2 flex flex-col justify-start items-left py-8 px-12">
                <div className="text-xl mb-2">Belong DAO:</div>
                <div className="flex">
                  {belongDaoAddressList.map((belongDaoAddress, i) => (
                    <ChangeBelongDaoName key={i} belongDaoAddress={belongDaoAddress} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Nodata />
      )}
    </div>
  );
};

export default UserProfileCard;

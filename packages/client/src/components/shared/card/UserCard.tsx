import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Level } from '@/components/shared/parts';
import { useCherContract } from '@/hooks/contracts';
import { usePoolListDataContract, useProjectsDataContract } from '@/hooks/contracts/data';
import { UserType } from '@/types/struct';

type Props = {
  userData: UserType;
};

const UserCard = ({ userData }: Props) => {
  const projectOwnerAddress = userData.userWalletAddress;
  const ownerAddress = userData.userWalletAddress;
  const { eachProjectList } = useProjectsDataContract({ projectOwnerAddress });
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const address = myPoolAddress;
  const { cherBalance } = useCherContract({ address });

  return (
    <div className="min-w-72 w-72 mr-12 p-4 break-words bg-white bg-opacity-5 border border-secondary rounded-lg">
      {/* icon */}
      <div className="relative w-full h-20 mb-2">
        <Image src={userData.userIcon} layout="fill" objectFit="cover" alt="user icon" className="rounded-lg" />
      </div>
      {/* name */}
      <div className="text-2xl font-black mt-4">{userData.userName}</div>
      {/* belong dao */}
      <div className="flex mt-1 mb-3">
        {eachProjectList &&
          eachProjectList.map((project, i) => (
            <div key={i} className="text-xs rounded-md mr-2 p-1 bg-cherBlue">
              {project.belongDaoAddress}
            </div>
          ))}
      </div>
      {/* level
      challenger */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center items-center w-3/12">
          <div className="text-xl">🗡️</div>
          <div className="text-xs">challenger</div>
        </div>
        <Level ex={cherBalance} />
      </div>
      {/* level
      cheer */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center items-center w-3/12">
          <div className="text-2xl">🛡️</div>
          <div className="text-xs">cheer</div>
        </div>
        <Level ex={cherBalance} />
      </div>
      {/* to profile */}
      <Link href={`/userProfile/${userData.userWalletAddress}`}>
        <button className="w-full h-12 rounded-md bg-cherGreen">Go to profile</button>
      </Link>
    </div>
  );
};

export default UserCard;

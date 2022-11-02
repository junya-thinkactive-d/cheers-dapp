import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Level } from '@/components/shared/parts';
import { DaoType } from '@/types/struct';

type Props = {
  daoData: DaoType;
};

const DaoCard = ({ daoData }: Props) => {
  return (
    <div className="min-w-72 w-72 mr-12 p-4 break-words bg-white bg-opacity-5 border border-secondary rounded-lg">
      {/* icon */}
      <div className="relative w-full h-20 mb-2">
        <Image src={daoData.daoIcon} layout="fill" objectFit="cover" alt="dao icon" className="rounded-lg" />
      </div>
      {/* name */}
      <div className="text-2xl font-black mt-4">{daoData.daoName}</div>
      {/* belong dao */}
      {/* <div className="flex mt-1 mb-3">
        {daoData.daos.map((dao, i) => (
          <div key={i} className="text-xs rounded-md mr-2 p-1 bg-cherBlue">
            {dao}
          </div>
        ))}
      </div> */}
      {/* level
      challenger */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center items-center w-3/12">
          <div className="text-xl">🗡️</div>
          <div className="text-xs">challenger</div>
        </div>
        <Level ex={1000} />
      </div>
      {/* level
      cheer */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-col justify-center items-center w-3/12">
          <div className="text-2xl">🛡️</div>
          <div className="text-xs">cheer</div>
        </div>
        <Level ex={1000} />
      </div>
      {/* to profile */}
      <Link href={`/daoProfile/${daoData.daoAddress}`}>
        <button className="w-full h-12 rounded-md bg-cherGreen">Go to profile</button>
      </Link>
    </div>
  );
};

export default DaoCard;

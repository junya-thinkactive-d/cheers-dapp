import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  challengerName: string;
  challengerIcon: string;
  belongDao: string;
  projectName: string;
  comment: string;
  throwCher: number;
};

const CheerCard = ({ challengerName, challengerIcon, belongDao, projectName, comment, throwCher }: Props) => {
  return (
    <>
      <Link href="#">
        <div className="flex  flex-col w-80 p-4 mx-4 rounded-lg bg-secondary cursor-pointer mb-6">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex flex-col justify-center items-center bg-primary p-1 border">
              <div className="text-xs mb-1 text-cherRed">Challenger</div>
              <div className="relative w-10 h-10 my-1">
                <Image
                  src={challengerIcon}
                  layout="fill"
                  objectFit="contain"
                  alt="challenger icon"
                  className="rounded-full"
                />
              </div>
              <div className="text-xs text-cherRed">{challengerName}</div>
            </div>
            <div className="col-span-3 pl-2">
              <div className="flex items-center text-xs mb-2">
                <div className="p-1 bg-cherBlue rounded-lg">{belongDao}</div>
              </div>
              <div className="text-xs text-cherGreen">{projectName}</div>
            </div>
          </div>
          <div className="p-2 mt-2 text-sm border border-white bg-primary">{comment}</div>
          <div className="flex items-center text-lg mt-1 ">
            <div>💰</div>
            <div className="flex items-end">
              <div className="translate-y-0.5">{throwCher.toLocaleString()}</div>
              <div className="ml-1 text-sm">CHER</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CheerCard;

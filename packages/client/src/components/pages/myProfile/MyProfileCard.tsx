import React from 'react';

import { ChallengeProjects, CheerProjects, NumberSubmitForm } from '@/components/shared/parts';

type Props = {
  id: string;
};

const MyProfileCard = ({ id }: Props) => {
  return (
    <>
      <div className="m-12">
        <div>name: junya</div>
        <div>Wallet Address: {id}</div>
        <div>Pool Address: {id}</div>
        <div>Total CHER: 100,000</div>
        <div className="my-8">
          <div className="flex flex-col justify-center items-start">
            <div className='mb-2'>
              CHERを購入する <span className="text-sm text-cherGreen">Change ETH</span>
            </div>
            <NumberSubmitForm buttonName="BUY CHER !" />
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-col justify-center items-start">
            <div  className='mb-2'>
              CHERをプールに送る
              <span className="text-sm text-cherBlue">
                To Pool <span className="bg-cherBlue text-white">{id}</span>
              </span>
            </div>
            <NumberSubmitForm buttonName="SENT CHER !" />
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-col justify-center items-start">
            <div  className='mb-2'>
              CHERをプールから引き出す
              <span className="text-sm text-cherYellow">
                From Pool <span className="bg-cherYellow text-white">{id}</span>
              </span>
            </div>
            <NumberSubmitForm buttonName="SENT CHER !" />
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-col justify-center items-start">
            <div  className='mb-2'>
              CHERをETHと交換する
              <span className="text-sm text-cherPink">Change CHER</span>
            </div>
            <NumberSubmitForm buttonName="SENT CHER !" />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <ChallengeProjects />
        <CheerProjects />
      </div>
    </>
  );
};

export default MyProfileCard;

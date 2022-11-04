import React from 'react';

import { NumberSubmitForm } from '@/components/shared/parts';

type Props ={
id:string;
}

const Withdraw = ({id}) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="mb-2">
        CHERをプールから引き出す
        <span className="text-sm text-cherYellow">
          From Pool <span className="bg-cherYellow text-white">{id}</span>
        </span>
      </div>
      <NumberSubmitForm buttonName="SENT CHER !" />
    </div>
  );
};

export default Withdraw;

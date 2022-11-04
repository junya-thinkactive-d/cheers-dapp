import React from 'react';

import { NumberSubmitForm } from '@/components/shared/parts';

const SendCher = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="mb-2">
        CHERを購入する <span className="text-sm text-cherGreen">Change ETH</span>
      </div>
      <NumberSubmitForm buttonName="BUY CHER !" />
    </div>
  );
};

export default SendCher;

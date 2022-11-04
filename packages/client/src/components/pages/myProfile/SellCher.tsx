import React from 'react';

import { NumberSubmitForm } from '@/components/shared/parts';

const SellCher = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="mb-2">
        CHERをETHと交換する
        <span className="text-sm text-cherPink">Change CHER</span>
      </div>
      <NumberSubmitForm buttonName="SENT CHER !" />
    </div>
  );
};

export default SellCher;

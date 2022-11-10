import React, { useCallback, useState } from 'react';

import { InputCher } from '@/components/pages/project';
import { Mining } from '@/components/shared/layouts';
import { ButtonRed } from '@/components/shared/parts';
import { useProjectPoolContract } from '@/hooks/contracts';

type Props = {
  projectPoolAddress: string;
};

const OpenedMessageColumn = ({ projectPoolAddress }: Props) => {
  const { mining, handleMintCheer } = useProjectPoolContract({ projectPoolAddress });
  const [message, setMessage] = useState<string>('');
  const [cher, setCher] = useState<number>();

  const sendMintCheer = useCallback(async () => {
    if (!cher) return;
    return handleMintCheer(cher, message);
  }, [cher, handleMintCheer, message]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Mining mining={mining} />
      <textarea
        className="w-[500px] h-[200px] resize-none my-12 p-4 text-justify rounded-lg border-4 border-white bg-primary"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <InputCher setCher={setCher} />
      <div className="my-4 px-4 py-2 bg-cherGreen">SET CHER: {cher}</div>
      <ButtonRed buttonName="CHEER" onClickEvent={sendMintCheer} />
    </div>
  );
};

export default OpenedMessageColumn;

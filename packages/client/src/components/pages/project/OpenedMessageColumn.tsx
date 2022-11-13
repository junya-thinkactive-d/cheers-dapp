import React, { useCallback, useState } from 'react';

import { InputCher } from '@/components/pages/project';
import { Mining } from '@/components/shared/layouts';
import { ButtonRed } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';
import { useDaoPoolContract, useProjectPoolContract, useUserPoolContract } from '@/hooks/contracts';


type Props = {
  projectPoolAddress: string;
};

const OpenedMessageColumn = ({ projectPoolAddress }: Props) => {

  const walletContext = useWalletContext();
  const userOwnerAddress = walletContext?.currentAccount ? walletContext?.currentAccount : '';
  const daoOwnerAddress = walletContext?.currentAccount ? walletContext?.currentAccount : '';
  const { mining, handleMintCheer } = useProjectPoolContract({ projectPoolAddress });
  const {userPoolAddress,handleUserApproveCherToProjectPool} = useUserPoolContract({ userOwnerAddress });
  const {daoPoolAddress, handleDaoApproveCherToProjectPool} = useDaoPoolContract({ daoOwnerAddress });
  const [message, setMessage] = useState<string>('');
  const [cher, setCher] = useState<number>();

  
  const sendMintCheer = useCallback(async () => {
    if (!cher) return;
    if(userPoolAddress !== '') {
     await handleUserApproveCherToProjectPool(projectPoolAddress,cher)
    } else if (daoPoolAddress !== '') {
     await  handleDaoApproveCherToProjectPool(projectPoolAddress,cher)
    }
    return handleMintCheer(cher, message);
  }, [cher, daoPoolAddress, handleDaoApproveCherToProjectPool, handleMintCheer, handleUserApproveCherToProjectPool, message, projectPoolAddress, userPoolAddress]);

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

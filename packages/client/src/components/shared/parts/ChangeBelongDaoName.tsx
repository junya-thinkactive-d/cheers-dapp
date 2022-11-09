import React from 'react';

import Link from 'next/link';

import { useDaoPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';

type Props = {
  belongDaoAddress: string;
};

const ChangeBelongDaoName = ({ belongDaoAddress }: Props) => {
  const poolAddress = belongDaoAddress;
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const daoOwnerAddress = myWalletAddress;
  const { daoName } = useDaoPoolContract({ daoOwnerAddress });

  return (
    <Link href={`/daoProfile/${daoOwnerAddress}`}>
      <div className="flex justify-center items-center p-2 rounded-md bg-cherBlue mr-2 cursor-pointer hover:bg-cherGreen">
        <div className="text-xs">{daoName}</div>
      </div>
    </Link>
  );
};

export default ChangeBelongDaoName;

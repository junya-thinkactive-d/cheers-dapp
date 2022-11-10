import React from 'react';

import { useDaoPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';

type Props = {
  poolAddress: string;
};

const DaoPoolToName = ({ poolAddress }: Props) => {
  const { myWalletAddress } = usePoolListDataContract({ poolAddress });
  const daoOwnerAddress = myWalletAddress;
  const { daoName } = useDaoPoolContract({ daoOwnerAddress });
  return <div>{daoName}</div>;
};

export default DaoPoolToName;

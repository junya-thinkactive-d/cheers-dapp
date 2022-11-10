import React, { useCallback, useEffect, useState } from 'react';

import { BeforeCreatePool, DaosInfo, UsersInfo } from '@/components/pages/home';
import { AllProjects } from '@/components/shared/card';
import { Nodata } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';
import { useUsersDataContract, useDaosDataContract, usePoolListDataContract } from '@/hooks/contracts/data';
// import { daosData, usersData } from '@/mock';

const AfterLogin = () => {
  const [ownerAddress, setOwnerAddress] = useState<string>('');
  const walletContext = useWalletContext();
  const { allUserList } = useUsersDataContract({});
  const { allDaoList } = useDaosDataContract({});
  const handleSetOwnerAddress = useCallback(() => {
    walletContext?.currentAccount && setOwnerAddress(walletContext.currentAccount);
  }, [walletContext?.currentAccount]);
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });

  useEffect(() => {
    handleSetOwnerAddress();
  }, [handleSetOwnerAddress]);

  return (
    <div className="w-full min-h-screen">
      {myPoolAddress === '0x0000000000000000000000000000000000000000' ? (
        <>
          <BeforeCreatePool />
        </>
      ) : (
        <>
          <div className="text-2xl ml-4 mt-12 mb-4 font-bold">ALL USER</div>
          {allUserList ? <UsersInfo usersData={allUserList} /> : <Nodata />}
          <div className="text-2xl ml-4 mt-12 mb-4 font-bold">ALL DAO</div>
          {allDaoList ? <DaosInfo daosData={allDaoList} /> : <Nodata />}
          <div className="text-2xl ml-4 mt-12 mb-4 font-bold">ALL PROJECTS</div>
          <AllProjects />
        </>
      )}
    </div>
  );
};

export default AfterLogin;

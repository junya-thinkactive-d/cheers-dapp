import React from 'react';

import { DaosInfo, UsersInfo } from '@/components/pages/home';
import { Nodata } from '@/components/shared/parts';
// import { useUsersDataContract, useDaosDataContract } from '@/hooks/contracts/data';
import { daosData, usersData } from '@/mock';

const AfterLogin = () => {
  // const { allUserList } = useUsersDataContract({});
  // const { allDaoList } = useDaosDataContract({});
  return (
    <div className="w-full min-h-screen">
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT USER</div>
      {usersData ? <UsersInfo usersData={usersData} /> : <Nodata />}
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT DAO</div>
      {daosData ? <DaosInfo daosData={daosData} /> : <Nodata />}
    </div>
  );
};

export default AfterLogin;

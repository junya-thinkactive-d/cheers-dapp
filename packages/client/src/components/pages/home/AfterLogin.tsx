import React from 'react';

import { DaosInfo, UsersInfo } from '@/components/pages/home';

const AfterLogin = () => {
  const {}
  return (
    <div className="w-full min-h-screen">
      <DaosInfo />
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT CHEERS</div>
      <UsersInfo />
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT CHALLENGER</div>
      <UsersInfo />
    </div>
  );
};

export default AfterLogin;

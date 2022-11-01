import React from 'react';

import { UserCard } from '@/components/shared/card';
import { usersData } from '@/data';

const UsersInfo = () => {
  return (
    <div className="flex justify-start w-full pl-12">
      {usersData.map((userData, i) => (
        <UserCard key={i} userData={userData} />
      ))}
    </div>
  );
};

export default UsersInfo;

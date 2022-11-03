import React, { useCallback, useEffect, useState } from 'react';


import { Level } from '@/components/shared/parts';
import { useUserPoolContract} from '@/hooks/contracts'
import { useUsersDataContract } from '@/hooks/contracts/data';
import { UserType } from '@/types/struct';

type Props = {
  id: string;
};

const UserProfileCard = ({ id }: Props) => {
  const ownerAddress = id
  const { allUserList } = useUsersDataContract({});
  const {userPoolAddress} = useUserPoolContract({ownerAddress})

  const [userList, setUserList] = useState<UserType>();

  const getUserData = useCallback(async () => {
    if (!allUserList) return;
    allUserList.map((user) => {
      if (id == user.userAddress) {
        setUserList(user);
      }
    });
  }, [allUserList, id]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className="flex justify-center items-center w-full">
      {userList && (
         <div className="w-[800px] h-[500px] my-12">
        <div className="w-full h-full rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px]">
          <div className="w-full h-full bg-secondary rounded-xl grid grid-cols-4 grid-rows-4">
            <div className="col-span-2 row-span-2 py-8 px-12">
              <div className="w-full h-full bg-cherBlue"></div>
            </div>
            <div className="row-start-3 col-span-2 row-span-2 flex flex-col justify-between py-8 px-12 text-lg">
              <div className=" flex justify-left items-baseline border-b">
                <div className="text-xl">name:</div>
                <div className="ml-4 text-2xl">{userList.userName}</div>
              </div>
              <div className=" flex justify-left items-baseline border-b">
                <div className="text-xl">profile:</div>
                <div className="ml-4 text-xl">{userList.userProfile}</div>
              </div>
              <div className=" flex justify-left items-baseline border-b">
                <div className="text-xl">total ex:</div>
                <div className="ml-4 text-xl">3333</div>
              </div>
            </div>
            <div className="col-start-3 col-span-2 row-span-2 flex flex-col justify-center items-left py-8 px-12">
              {/* level
              challenger */}
              <div className="flex justify-between mb-2">
                <div className="flex flex-col justify-center items-center w-3/12">
                  <div className="text-xl">🗡️</div>
                  <div className="text-xs">challenger</div>
                </div>
                <Level ex={1111} />
              </div>
              {/* level
              cheer */}
              <div className="flex justify-between mb-2">
                <div className="flex flex-col justify-center items-center w-3/12">
                  <div className="text-2xl">🛡️</div>
                  <div className="text-xs">cheer</div>
                </div>
                <Level ex={2222} />
              </div>
            </div>
            <div className="col-start-3 row-start-3 col-span-2 row-span-2 flex flex-col justify-start items-left py-8 px-12">
              <div className="text-xl mb-2">Belong DAO:</div>
              <div className="flex">
                <div className="flex justify-center items-center p-2 rounded-md bg-cherBlue mr-2">
                  <div className="text-xs">UNCHAIN</div>
                </div>
                <div className="flex justify-center items-center p-2 rounded-md bg-cherBlue">
                  <div className="text-xs">cheers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
     
    </div>
  );
};

export default UserProfileCard;

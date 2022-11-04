import React, { useCallback, useEffect, useState } from 'react';

import { Level, Nodata } from '@/components/shared/parts';
import { useDaoPoolContract } from '@/hooks/contracts';
import { useDaosDataContract} from '@/hooks/contracts/data';
import { DaoType } from '@/types/struct';

type Props = {
  daoOwnerAddress: string;
};

const DaoProfileCard = ({ daoOwnerAddress }: Props) => {
  const { allDaoList } = useDaosDataContract({});
  const { totalCher } = useDaoPoolContract({ daoOwnerAddress });

  const [daoList, setDaoList] = useState<DaoType>();

  const getDaoData = useCallback(async () => {
    if (!allDaoList) return;
    allDaoList.map((dao) => {
      if (daoOwnerAddress == dao.daoAddress) {
        setDaoList(dao);
      }
    });
  }, [allDaoList, daoOwnerAddress]);

  useEffect(() => {
    getDaoData();
  }, [getDaoData]);

  return (
    <div className="flex justify-center items-center w-full">
      {daoList && totalCher ? (
        <div className="w-[800px] h-[500px] my-12">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-cherGreen to-cherBlue p-[3px]">
            <div className="w-full h-full bg-secondary rounded-xl grid grid-cols-4 grid-rows-4">
              <div className="col-span-2 row-span-2 py-8 px-12">
                <div className="w-full h-full bg-cherBlue"></div>
              </div>
              <div className="row-start-3 col-span-2 row-span-2 flex flex-col justify-between py-8 px-12 text-lg">
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">name:</div>
                  <div className="ml-4 text-2xl">{daoList.daoName}</div>
                </div>
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">profile:</div>
                  <div className="ml-4 text-xl">{daoList.daoProfile}</div>
                </div>
                <div className=" flex justify-left items-baseline border-b">
                  <div className="text-xl">total ex:</div>
                  <div className="ml-4 text-xl">{totalCher}</div>
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
                  <Level ex={totalCher} />
                </div>
                {/* level
              cheer */}
                <div className="flex justify-between mb-2">
                  <div className="flex flex-col justify-center items-center w-3/12">
                    <div className="text-2xl">🛡️</div>
                    <div className="text-xs">cheer</div>
                  </div>
                  <Level ex={totalCher} />
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
      ) : (
        <Nodata />
      )}
    </div>
  );
};

export default DaoProfileCard;

import React from 'react';

import Link from 'next/link';

import { Button, ButtonRed } from '@/components/shared/parts';

const BeforeCreatePool = () => {
  return (
    <div className="pt-60">
      <div className="flex justify-center items-center mb-12">
        <div className="text-2xl">Which type of registration do you want?</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-12">
          <Link href="/userPoolCreate">
            <a>
              <Button buttonName="USER" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/daoPoolCreate">
            <a>
              <ButtonRed buttonName="DAO" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeforeCreatePool;

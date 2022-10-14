import React from 'react';
import { Button, InputSerch } from '../../../shared';

const Header = () => {
  return (
    <div className="sticky top-0 h-20 bg-primary z-50">
      <div className="flex justify-between items-center px-12 h-full">
        <div className='px-4 py-2 bg-gradient-to-r from-cherGreen to-cherBulue'>CHEERS</div>
        <div>
          <InputSerch />
        </div>
        <div>
          <Button buttonName="CONECT WALLET" fontSize="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Header;

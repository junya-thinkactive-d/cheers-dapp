import React from 'react';

const BeforeLogin = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-96 mt-24">
        <div className="w-1/2 h-96 pl-12 flex justify-start items-center">
          <div className="text-white w-full text-6xl font-black">
            CHEERING AND CHALLENGING PROJECTS ARE MORE COMMONPLACE.
          </div>
        </div>
        <div className="w-1/2">
          <div className="px-4 py-2 bg-gradient-to-r from-cherGreen to-cherBlue text-8xl">CHEERS</div>
        </div>
      </div>
      <div className="mt-12 text-4xl text-cherPink text-center">PLEASE CONNECTED WALLET</div>
    </div>
  );
};

export default BeforeLogin;

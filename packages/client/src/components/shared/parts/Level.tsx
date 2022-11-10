import React from 'react';

type Props = {
  ex: string;
};

const Level = ({ ex }: Props) => {
  const level = Math.floor(Number(ex) / 100);
  const remainingEx = Number(ex) % 100;

  return (
    <div className="flex flex-col justify-center w-8/12">
      <div className="text-xs">Lv.{level}</div>
      <div className="border border-white h-4 rounded-sm w-full">
        <div className={`h-[14px] w-[${remainingEx}%] bg-cherBlue`}></div>
      </div>
    </div>
  );
};

export default Level;

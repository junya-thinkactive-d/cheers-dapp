import React from 'react';

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex justify-center items-center bg-gradient-to-r from-cherGreen to-cherBlue w-80 h-10">
        <div className="text-xl">{title}</div>
      </div>
    </div>
  );
};

export default PageTitle;

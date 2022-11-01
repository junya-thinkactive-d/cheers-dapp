import React from 'react';

type Props = {
  buttonName: string;
  onClickEvent?: () => void;
};

const Button = ({ buttonName, onClickEvent }: Props) => {
  return (
    <button className="w-40 rounded-lg bg-gradient-to-r from-cherGreen to-cherBlue p-2" onClick={onClickEvent}>
      {buttonName}
    </button>
  );
};

export default Button;

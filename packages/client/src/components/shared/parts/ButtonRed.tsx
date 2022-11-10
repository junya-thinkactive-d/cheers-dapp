import React from 'react';

type Props = {
  buttonName: string;
  onClickEvent?: () => void;
};

const ButtonRed = ({ buttonName, onClickEvent }: Props) => {
  return (
    <button className="w-40 rounded-lg bg-gradient-to-r from-cherPink to-cherRed p-2" onClick={onClickEvent}>
      {buttonName}
    </button>
  );
};

export default ButtonRed;

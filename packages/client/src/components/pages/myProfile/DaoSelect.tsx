import React from 'react';

type Props = {
  selected: string;
  handleSelectClick: () => void;
  handleChange: (_e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  options: { value: string; text: string }[];
  buttonOpen: boolean;
  handleSetBelongDaoAddress: () => void;
};

const DaoSelect = ({
  selected,
  handleSelectClick,
  handleChange,
  options,
  buttonOpen,
  handleSetBelongDaoAddress,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div>SELECT BELONG DAO:</div>
      <select
        value={selected}
        onClick={handleSelectClick}
        onChange={handleChange}
        className="w-96 text-primary p-2 mx-2 rounded-lg"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-secondary">
            {option.text}
          </option>
        ))}
      </select>
      {buttonOpen && (
        <button className="bg-secondary p-2 mt-2 mx-2 rounded-lg" onClick={handleSetBelongDaoAddress}>
          Set Belong DAO
        </button>
      )}
    </div>
  );
};

export default DaoSelect;

import React, { useState } from 'react';

type Props = {
  value: number;
  onChange: (_value: number) => void;
  onInvalidNumber: (_value: string) => void;
};

const InputNumber = ({ value, onChange, onInvalidNumber }: Props) => {
  const [localValue, setLocalValue] = useState<string>(`${value}`);

  const onChangeHandler = (value: string) => {
    const v = value.replace(/[０-９.]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
    if (isNaN(Number(v))) {
      setLocalValue(value);
      onInvalidNumber(value);
    } else {
      setLocalValue(v);
      onChange(Number(v));
    }
  };

  return (
    <input
      className="text-primary text-right p-2 mx-2 rounded-lg"
      type="text"
      inputMode="numeric"
      value={localValue}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

export default InputNumber;

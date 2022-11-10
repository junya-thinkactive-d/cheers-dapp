import React, { FormEvent, useState } from 'react';

import { InputNumber } from '@/components/shared/parts';
import { Form, FormErrors } from '@/types/form';

type Props = {
  setCher: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const InputCher = ({ setCher }: Props) => {
  const [errors, setErrors] = useState<FormErrors>();
  const [form, setForm] = useState<Form>({
    amount: 0,
  });

  const handleChangeAmount = (value: number) => {
    setErrors({});
    setForm({ amount: value });
    setCher(value);
  };

  const handleInvalidAmount = (_value: string) => {
    setErrors({ amount: '数値のみを入力してください' });
  };

  const handleSubmit = (e: FormEvent) => {
    // console.log(`request API with form`);
    // console.table(form);
    return e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <InputNumber value={form.amount} onChange={handleChangeAmount} onInvalidNumber={handleInvalidAmount} />
        <div className="h-4">{errors?.amount && <p className="text-cherRed">{errors.amount}</p>}</div>
      </div>
    </form>
  );
};

export default InputCher;

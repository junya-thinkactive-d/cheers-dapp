import React, { FormEvent, useState } from 'react';

import { Button, InputNumber } from '@/components/shared/parts';
import { Form, FormErrors } from '@/types/form';

type Props = {
  buttonName: string;
  onClickEvent?: () => void;
};

const EtherSubmitForm = ({ buttonName, onClickEvent }: Props) => {
  const [errors, setErrors] = useState<FormErrors>();
  const [form, setForm] = useState<Form>({
    amount: 0,
  });

  const handleChangeAmount = (value: number) => {
    setErrors({});
    setForm({ amount: value });
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
      <div className="flex justify-center items-center">
        <InputNumber value={form.amount} onChange={handleChangeAmount} onInvalidNumber={handleInvalidAmount} />
        {errors?.amount ? <p className='text-cherRed'>{errors.amount}</p> : <Button buttonName={buttonName} onClickEvent={onClickEvent} />}
      </div>
    </form>
  );
};

export default EtherSubmitForm;

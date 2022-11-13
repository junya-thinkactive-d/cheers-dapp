import React, { useCallback, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button, InputNumber } from '@/components/shared/parts';
import { useCherFaucetContract } from '@/hooks/contracts';
import { Form, FormErrors } from '@/types/form';

const SellCher = () => {
  const { mining, handleExchange } = useCherFaucetContract({});

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

  const onClickEvent = useCallback(async () => {
    try {
      await handleExchange(form.amount);
      setForm({ amount: 0 });
    } catch (error) {}
  }, [form.amount, handleExchange]);

  return (
    <div className="flex flex-col justify-center items-start">
      <Mining mining={mining} />
      <div className="mb-2">
        CHERをETHと交換する
        <span className="text-sm text-cherPink">Change CHER</span>
      </div>
      <div className="flex justify-center items-center">
        <InputNumber value={form.amount} onChange={handleChangeAmount} onInvalidNumber={handleInvalidAmount} />
        {errors?.amount ? (
          <p className="text-cherRed">{errors.amount}</p>
        ) : (
          <Button buttonName="CHARGE POOL!" onClickEvent={onClickEvent} />
        )}
      </div>
    </div>
  );
};

export default SellCher;

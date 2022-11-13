import React, { useCallback, useEffect, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button, InputNumber } from '@/components/shared/parts';
import { useCherContract, useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { Form, FormErrors } from '@/types/form';

type Props = {
  ownerAddress: string;
};

const SendCher = ({ ownerAddress }: Props) => {
  const userOwnerAddress = ownerAddress;
  const { userMining, userPoolAddress } = useUserPoolContract({ userOwnerAddress });
  const daoOwnerAddress = ownerAddress;
  const { daoMining, daoPoolAddress } = useDaoPoolContract({ daoOwnerAddress });
  const { mining, handleTransfer } = useCherContract({});

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
      if (userPoolAddress !== '') {
        handleTransfer(userPoolAddress, form.amount);
      } else if (daoPoolAddress !== '') {
        handleTransfer(daoPoolAddress, form.amount);
        setForm({ amount: 0 });
      }
    } catch (error) {
      alert(error);
    }
  }, [daoPoolAddress, form.amount, handleTransfer, userPoolAddress]);

  useEffect(() => {
    form;
  }, [form, setForm]);

  return (
    <div className="flex flex-col justify-center items-start">
      <Mining mining={userMining} />
      <Mining mining={daoMining} />
      <Mining mining={mining} />
      <div className="mb-2">
        CHERをPOOLにチャージする <span className="text-sm text-cherYellow">Charge CHER</span>
      </div>
      <div className="flex justify-center items-center">
        <InputNumber value={form.amount} onChange={handleChangeAmount} onInvalidNumber={handleInvalidAmount} />
        {errors?.amount ? (
          <p className="text-cherRed">{errors.amount}</p>
        ) : (
          <Button buttonName="CHARGE CHER!" onClickEvent={onClickEvent} />
        )}
      </div>
    </div>
  );
};

export default SendCher;

import React, { useCallback, useState } from 'react';

import { Mining } from '@/components/shared/layouts';
import { Button, InputNumber } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { Form, FormErrors } from '@/types/form';

type Props = {
  ownerAddress: string;
};

const SendCher = ({ ownerAddress }: Props) => {
  const userOwnerAddress = ownerAddress;
  const { userMining, userPoolAddress, handleUserChargeCher } = useUserPoolContract({ userOwnerAddress });
  const daoOwnerAddress = ownerAddress;
  const { daoMining, daoPoolAddress, handleDaoChargeCher } = useDaoPoolContract({ daoOwnerAddress });

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
        await handleUserChargeCher(form.amount);
      } else if (daoPoolAddress !== '') {
        await handleDaoChargeCher(form.amount);
      }
      setForm({ amount: 0 });
    } catch (error) {
      alert(error);
    }
  }, [daoPoolAddress, form.amount, handleDaoChargeCher, handleUserChargeCher, userPoolAddress]);

  return (
    <div className="flex flex-col justify-center items-start">
      <Mining mining={userMining} />
      <Mining mining={daoMining} />
      <div className="mb-2">
        CHERをPOOLにチャージする <span className="text-sm text-cherBlue">Charge Pool</span>
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

export default SendCher;

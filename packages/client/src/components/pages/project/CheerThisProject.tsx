import React, { useCallback, useState } from 'react';

import { OpenedMessageColumn } from '@/components/pages/project';
import { Button } from '@/components/shared/parts';

type Props = {
  projectPoolAddress: string;
};

const CheerThisProject = ({ projectPoolAddress }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpen = useCallback(async () => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Button buttonName="Cheer this Project" onClickEvent={handleSetOpen} />
      </div>
      {open && <OpenedMessageColumn projectPoolAddress={projectPoolAddress} />}
    </>
  );
};

export default CheerThisProject;

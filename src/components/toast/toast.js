import React, { useState } from 'react';
import Button from '../button';
import { CloseIcon } from '../../svg';

export const pushToast = (label) => {
  console.log(label);
};

export const Toast = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="toast">
      <span>{children}</span>
      <Button variant="icon" clickHandler={() => setIsOpen(false)}>
        <CloseIcon width={16} height={16} fill="#a3a3a3" />
      </Button>
    </div>
  );
};

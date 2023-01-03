import React, { useState } from 'react';

const useSelectBox = () => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const onOpen = () => {
    setOpen(!isOpen);
  };

  const onSelect = (e: any) => {
    //
    setValue(e.target.innerText);
  };

  return { isOpen, value, onOpen, onSelect };
};

export { useSelectBox };

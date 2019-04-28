import React, { useState } from 'react';

const useModal = (defaultState) => {
  const [isOpen, setOpen] = useState(defaultState);

  return [isOpen, setOpen];
};

export default useModal;

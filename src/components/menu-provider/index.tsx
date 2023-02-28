import React, { useMemo, useState } from 'react';
import Context from './context';

const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider
      value={useMemo(() => ({
        isMenuOpen: open,
        setMenuOpen: setOpen,
      }), [open])}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

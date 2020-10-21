import React, { useState } from 'react';
import Context from './context';

const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isMenuOpen: open,
        setMenuOpen: setOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

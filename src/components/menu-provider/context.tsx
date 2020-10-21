import React from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  setMenuOpen?(state: boolean): void;
}

const MenuContext = React.createContext({
  isMenuOpen: false,
} as MenuContextProps);

export default MenuContext;

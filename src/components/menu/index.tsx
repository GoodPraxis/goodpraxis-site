import React, { useContext } from 'react';
import MenuInner from '../menu-inner';
import MenuContext from '../menu-provider/context';
import './menu.scss';

interface MainMenuProps {
  activeItem: string;
}

const MainMenu = ({ activeItem }: MainMenuProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <div className={`main-menu${isMenuOpen ? ' is-open' : ''}`}>
      <div className="main-menu-wrapper">
        <MenuInner activeItem={activeItem} />
      </div>
    </div>
  );
};

export default MainMenu;

import React, { useContext, useEffect } from 'react';
import MenuContext from '../menu-provider/context';
import MenuToggle from '../menu-toggle';
import MainMenu from '../menu';

import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
  activeItem: string;
}

const SCROLL = 'scroll';

const Layout: React.FC = ({ children, activeItem } : LayoutProps) => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuContext);

  const hideMenu = () => setMenuOpen(false);

  useEffect(() => document.addEventListener(SCROLL, hideMenu), [setMenuOpen]);
  useEffect(() => () => document.removeEventListener(SCROLL, hideMenu), []);

  return (
    <div className={`main-layout-wrapper${isMenuOpen ? ' menu-is-open' : ''}`}>
      <MainMenu activeItem={activeItem} />
      <header className="menu-inner-top header grid">
        <div className="header-title">
          <h1><a href="/">Good Praxis</a></h1>
        </div>
        <div className="header-description">
          A digital creative agency
        </div>
        <MenuToggle />
      </header>
      <main className="main-layout grid-lines">
        {children}
      </main>
    </div>
  );
};

export default Layout;

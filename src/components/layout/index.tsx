import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import MenuContext from '../menu-provider/context';
import MenuToggle from '../menu-toggle';
import MainMenu from '../menu';

import './layout.scss';
import MenuInner from '../menu-inner';

interface LayoutProps {
  children: React.ReactNode;
  activeItem: string;
  description?: string;
  descriptionTo?: string;
}

const SCROLL = 'scroll';

const Layout = ({
  activeItem, children, description, descriptionTo,
} : LayoutProps) => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuContext);

  const hideMenu = () => setMenuOpen(false);

  useEffect(() => document.addEventListener(SCROLL, hideMenu), [setMenuOpen]);
  useEffect(() => () => document.removeEventListener(SCROLL, hideMenu), []);

  return (
    <div className={`main-layout-wrapper${isMenuOpen ? ' menu-is-open' : ''}`}>
      <MainMenu activeItem={activeItem} />
      <header className="menu-inner-top header grid">
        <div className="header-title">
          <h1><Link to="/">Good Praxis</Link></h1>
        </div>
        <div className="header-description">
          <Link to={descriptionTo}>
            { description || 'A digital creative agency' }
          </Link>
        </div>
        <MenuToggle />
      </header>
      <main className="main-layout grid-lines">
        {children}
      </main>
      <footer className="footer grid-lines">
        <MenuInner activeItem={activeItem} />
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  description: null,
  descriptionTo: '/',
};

export default Layout;

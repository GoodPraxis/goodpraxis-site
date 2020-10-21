import React, { useContext } from 'react';
import MenuContext from '../menu-provider/context';
import './menu-toggle.scss';

const MenuToggle = () => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuContext);
  return (
    <button
      className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
      type="button"
      onClick={() => setMenuOpen(!isMenuOpen)}
      aria-label="Menu"
    >
      <span className="menu-toggle-label">Menu</span>
      <svg viewBox="0 0 28 22" width="28" height="22">
        <rect width="28" height="4" />
        <rect y="9" width="28" height="4" />
        <rect y="18" width="28" height="4" />
      </svg>
    </button>
  );
};
export default MenuToggle;

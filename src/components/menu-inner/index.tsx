import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { DetailsBox, MenuList } from '@goodpraxis/components';
import MenuContext from '../menu-provider/context';
import './menu-inner.scss';

export const MENU_ITEMS = [
  { href: '/', title: 'Home' },
  { href: '/work', title: 'Work' },
  { href: '/studio', title: 'Studio' },
];

interface MenuInnerProps {
  activeItem: string;
}

const MenuInner = ({ activeItem }: MenuInnerProps) => {
  const active = MENU_ITEMS.map((item) => item.title).indexOf(activeItem);
  const { setMenuOpen } = useContext(MenuContext);
  const renderLink = ({ href, title } : {href: string, title: string}) => (
    <Link to={href} onClick={() => setMenuOpen(false)}>{title}</Link>
  );

  return (
    <section className="menu-inner">
      <header className="menu-inner-top grid">
        <div className="menu-inner-company-name">
          <Link to="/">Good Praxis</Link>
        </div>
        <div className="menu-inner-company-description">
          A digital creative agency
        </div>
      </header>
      <MenuList data={MENU_ITEMS} renderer={renderLink} active={active} />
      <div className="menu-inner-details grid">
        <div className="menu-inner-photo">
          <img
            src="/images/building.jpg"
            className="office-photo"
            alt="The front of the office building at 149 Fonthill Road. It's white with a colored door."
          />
        </div>
        <div className="menu-inner-address">
          <DetailsBox title="Address">
            <address>
              149 Fonthill Rd.
              <br />
              Finsbury Park
              <br />
              London
              <br />
              N4&nbsp;3HF
            </address>
          </DetailsBox>
        </div>
        <div className="menu-inner-contact">
          <DetailsBox title="Telephone">
            <a href="tel:+447803171093">+44(0)7803&nbsp;171&nbsp;093</a>
          </DetailsBox>
          <DetailsBox title="Email">
            <a href="mailto:hello@goodpraxis.coop">hello@goodpraxis.coop</a>
          </DetailsBox>
        </div>
      </div>
    </section>
  );
};

export default MenuInner;

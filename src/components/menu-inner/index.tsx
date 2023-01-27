import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { DetailsBox, MenuList } from '@goodpraxis/components';
import EmailLink from '../email-link';
import MenuContext from '../menu-provider/context';
import './menu-inner.scss';

export const MENU_ITEMS = [
  { href: '/', title: 'Home' },
  { href: '/work', title: 'Our Work' },
  { href: '/services', title: 'Our Services' },
  { href: '/studio', title: 'About Us' },
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
          A digital studio
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
              113-115 Fonthill Rd.
              <br />
              Finsbury Park
              <br />
              London
              <br />
              N4&nbsp;3HH
            </address>
          </DetailsBox>
          <div className="menu-inner-logos">
            <a
              href="https://www.uk.coop/directory/good-praxis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/coop.png"
                alt="We are a co-operative"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.livingwage.org.uk/what-real-living-wage"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/living-wage.png"
                alt="We are a living wage employer"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="menu-inner-contact">
          <DetailsBox title="Telephone">
            <a href="tel:+442035761810">020&nbsp;3576&nbsp;1810</a>
          </DetailsBox>
          <DetailsBox title="Email">
            <EmailLink />
          </DetailsBox>
          <DetailsBox title="Follow">
            <>
              <a
                href="https://twitter.com/GoodPraxisCoop"
                rel="noreferrer noopener"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/goodpraxis.coop/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/good-praxis/"
                rel="noreferrer noopener"
                target="_blank"
              >
                LinkedIn
              </a>
            </>
          </DetailsBox>
          <DetailsBox title="About">
            <>
              Company no. 11963069
              <br />
              © 2022 Good Praxis Ltd.
              <br />
              <Link to="/anti-slavery-policy">Anti-slavery policy</Link>
            </>
          </DetailsBox>
        </div>
      </div>
    </section>
  );
};

export default MenuInner;

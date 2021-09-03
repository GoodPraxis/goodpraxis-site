import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';
import ClientList from '../components/client-list';
import BarLink from '../components/bar-link';
import ProjectPromoList from '../components/project-promo-list';
import HeroVideo from '../components/hero-video';
import MainProjectItem from '../components/main-project-item';

const clients = [
  { name: 'Pentagram', image: 'logo-pentagram-cell.svg' },
  { name: 'Hasbro', image: 'logo-hasbro-cell.svg' },
  { name: 'YRS TRULY', image: 'logo-yrstruly-cell.svg' },
  { name: 'Prince\'s Trust', image: 'logo-pt-cell.svg' },
  { name: 'Loading Bar', image: 'logo-loading-cell.svg' },
  { name: 'Netil Radio', image: 'logo-netil-cell.svg' },
  { name: 'Magic the Gathering', image: 'logo-magic-cell.svg' },
  { name: 'Islington Council', image: 'logo-islington-cell.svg' },
  { name: 'Dungeons & Dragons', image: 'logo-d_d-cell.svg' },
  { name: 'Lincolnshire Refugee Doctor Project', image: 'logo-lrdp-cell.svg' },
  { name: 'Eat Work Art', image: 'logo-ewa-cell.svg' },
  { name: 'SharpEnd', image: 'logo-sharpend-cell.svg' },
  { name: 'The Drum', image: 'logo-thedrum-cell.svg' },
  { name: 'Outlandish', image: 'logo-outlandish-cell.svg' },
  { name: 'Republic of Gamers', image: 'logo-rog-cell.svg' },
  { name: 'IPPR', image: 'logo-ippr-cell.svg' },
  { name: 'Skin Deep', image: 'logo-skin-deep-cell.svg' },
];

const IndexPage = () => (
  <Layout activeItem="Home">
    <SEO
      title="GOOD PRAXIS • A digital creative agency"
      metaTitle="GOOD PRAXIS • A digital creative agency"
    />
    <HeroVideo />
    <h2 className="hero-title">
      Good Praxis is a worker-owned digital creative studio based in&nbsp;London.
    </h2>
    <section className="hero-area grid">
      <div className="main-description">
        We’re an award-winning digital innovation co-operative. We collaboratively
        develop tech products and brands for organisations whose aim is to rebalance
        the inequalities of society, or sometimes just for fun.
      </div>
      <div className="main-description main-cta">
        <span className="project-item-link-wrapper">
          <Link to="/studio" className="project-item-link">Learn more about our studio</Link>
          {' →'}

        </span>
      </div>
    </section>
    <section className="project-promos">
      <MainProjectItem />
      <ProjectPromoList />
    </section>
    <section className="bar-links">
      <BarLink to="/work">See more work</BarLink>
      <BarLink to="/studio#contact-us">Work with us on your next project</BarLink>
    </section>
    <hr />
    <section className="client-area">
      <ClientList clients={clients} />
    </section>
  </Layout>
);

export default IndexPage;

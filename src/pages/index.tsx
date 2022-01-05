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
  { name: 'Big Change', image: 'logo-big-change-cell.svg' },
];

const IndexPage = () => (
  <Layout activeItem="Home">
    <SEO
      title="GOOD PRAXIS • A digital studio"
      metaTitle="GOOD PRAXIS • A digital studio"
    />
    <HeroVideo />
    <h2 className="hero-title">
      Good Praxis is a digital studio based in&nbsp;London.
    </h2>
    <section className="hero-area grid">
      <div className="main-description">
        <p>
          We create digital products and brands. Connecting deep strategic
          thinking with digital-first design and technical expertise we deliver
          distinctive work sensitive to people&apos;s needs. With research at
          the core, we partner closely with our clients to deliver trusted and
          award-winning work.
        </p>
        <p>
          As a worker-owned co-operative, our structure and approach reflects
          the very principles we founded Good Praxis upon – collective
          ownership, fairness and inclusivity.
        </p>
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

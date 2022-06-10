import React from 'react';
import { Link } from 'gatsby';

import BarLink from '../components/bar-link';
import ClientList from '../components/client-list';
import Layout from '../components/layout';
import MainProjectItem from '../components/main-project-item';
import ProjectPromoList from '../components/project-promo-list';
import SEO from '../components/seo';

import './main.scss';

const clients = [
  { name: 'Pentagram', image: 'logo-pentagram-cell.svg' },
  { name: 'Hasbro', image: 'logo-hasbro-cell.svg' },
  { name: 'YRS TRULY', image: 'logo-yrstruly-cell.svg' },
  { name: 'Prince\'s Trust', image: 'logo-pt-cell.svg' },
  { name: 'Gather', image: 'logo-gather-cell.svg' },
  { name: 'Loading Bar', image: 'logo-loading-cell.svg' },
  { name: 'Netil Radio', image: 'logo-netil-cell.svg' },
  { name: 'Magic the Gathering', image: 'logo-magic-cell.svg' },
  { name: 'Islington Council', image: 'logo-islington-cell.svg' },
  { name: 'Dungeons & Dragons', image: 'logo-d_d-cell.svg' },
  { name: 'Lincolnshire Refugee Doctor Project', image: 'logo-lrdp-cell.svg' },
  { name: 'SharpEnd', image: 'logo-sharpend-cell.svg' },
  { name: 'The Drum', image: 'logo-thedrum-cell.svg' },
  { name: 'Outlandish', image: 'logo-outlandish-cell.svg' },
  { name: 'Republic of Gamers', image: 'logo-rog-cell.svg' },
  { name: 'IPPR', image: 'logo-ippr-cell.svg' },
  { name: 'Skin Deep', image: 'logo-skin-deep-cell.svg' },
  { name: 'Big Change', image: 'logo-big-change-cell.svg' },
  { name: 'Guardians of the Forest', image: 'logo-gatc-cell.svg' },
  { name: 'Noble Studio', image: 'logo-ns-cell.svg' },
  { name: 'Fifty Eight', image: 'logo-58-cell.svg' },
  { name: 'Peace and Justice', image: 'logo-pj-cell.svg' },
];

const IndexPage = () => (
  <Layout activeItem="Home">
    <SEO
      title="GOOD PRAXIS • A digital studio"
      metaTitle="GOOD PRAXIS • A digital studio"
    />
    <MainProjectItem />
    <section className="hero-area grid">
      <h2 className="hero-title">
        We
        {' '}
        <Link to="services">create</Link>
        {' '}
        websites, apps and digital experiences.
      </h2>
      <div className="main-description">
        <p>
          GOOD PRAXIS is a digital studio based in London. Connecting strategic
          thinking with technical expertise, the way we work is sensitive to
          people&apos;s needs. With research at the core, we partner closely with our
          clients to deliver trusted and award-winning work.
        </p>
        <p>
          As a worker co-operative, our structure and approach reflects the very
          principles we founded Good Praxis upon – responsibility, fairness and inclusivity.
        </p>
      </div>
      <div className="main-description main-cta">
        <span className="project-item-link-wrapper">
          <Link to="/services" className="project-item-link">
            See what services we offer
          </Link>
          {' →'}
        </span>
        <br />
        <span className="project-item-link-wrapper">
          <Link to="/studio" className="project-item-link">
            Learn more about our studio
          </Link>
          {' →'}
        </span>
      </div>
    </section>
    <section className="project-promos">
      <div className="grid">
        <h2 className="heading recent-work-heading">Recent work ↓</h2>
      </div>
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

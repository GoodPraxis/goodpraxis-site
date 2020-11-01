import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';
import ClientList from '../components/client-list';
import BarLink from '../components/bar-link';
import ProjectPromoList from '../components/project-promo-list';

const images = [
  { src: '/images/photo-officechris.jpg', alt: '' },
  { src: '/images/photo-officecandc.jpg', alt: '' },
];

const clients = [
  { name: 'Hasbro', image: 'logo-hasbro.svg' },
  { name: 'Magic', image: 'logo-mtg.png' },
  { name: 'Prince\'s Trust', image: 'logo-pt.svg' },
  { name: 'Islington Council', image: 'logo-islington.png' },
  { name: 'YRS TRULY', image: 'logo-yt.png' },
  { name: 'Loading Bar', image: 'logo-loading.svg' },
  { name: 'Loading Bar2', image: 'logo-loading.svg' },
  { name: 'Loading Bar3', image: 'logo-loading.svg' },
];

const IndexPage = () => (
  <Layout activeItem="Home">
    <SEO title="Home" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        We’re an award-winning digital innovation co-operative. We
        collaboratively develop tech products for organisations whose aim is to
        rebalance the inequalities of society.
      </div>
    </section>
    <section className="project-promos">
      <div className="grid">
        <h2 className="heading">Featured work</h2>
      </div>
      <ProjectPromoList featured />
    </section>
    <section className="bar-links">
      <BarLink to="/work">View all work</BarLink>
      <BarLink to="/studio#contact-us">Work with is on your next project</BarLink>
    </section>
    <hr />
    <section className="client-area">
      <ClientList clients={clients} />
    </section>
  </Layout>
);

export default IndexPage;

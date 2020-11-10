import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';
import ClientList from '../components/client-list';
import BarLink from '../components/bar-link';
import ProjectPromoList from '../components/project-promo-list';

const images = [
  {
    src: '/images/carousel-1.jpg',
    alt: 'Woman sitting at her desk, pointing at her laptop',
  },
  {
    src: '/images/carousel-2.jpg',
    alt: 'A smiling man holding a dog, sitting at a table. Another man looks at him.',
  },
  {
    src: '/images/carousel-3.jpg',
    alt: 'A man facing the camera doing the peace sign.',
  },
];

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
];

const IndexPage = () => (
  <Layout activeItem="Home">
    <SEO
      title="GOOD PRAXIS • A digital creative agency"
      metaTitle="GOOD PRAXIS • A digital creative agency"
    />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        We’re an award-winning digital innovation co-operative. We collaboratively
        develop tech products and brands for organisations whose aim is to rebalance
        the inequalities of society, or sometimes just for fun.
      </div>
    </section>
    <section className="project-promos">
      <div className="grid">
        <h2 className="heading">Featured work</h2>
      </div>
      <ProjectPromoList featured />
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

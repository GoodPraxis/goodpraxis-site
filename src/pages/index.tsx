import React from 'react';

import { ProjectPromo } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';
import ClientList from '../components/client-list';

const images = [
  { src: 'https://picsum.photos/id/237/1149/588', alt: '' },
  { src: 'https://picsum.photos/id/230/1149/588', alt: '' },
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
      <ProjectPromo
        image="/images/projects/netilradio.svg"
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
        backgroundColor="#4CFF8B"
        promoStyle="light"
        isNewWork
      />
      <ProjectPromo
        image="/images/projects/netilradio.svg"
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
      />
    </section>
    <hr />
    <section className="client-area">
      <ClientList clients={clients} />
    </section>
  </Layout>
);

export default IndexPage;

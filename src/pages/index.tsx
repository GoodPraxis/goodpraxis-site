import React from 'react';

import { ProjectPromo } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';

const images = [
  { src: 'https://picsum.photos/id/237/1149/588', alt: '' },
  { src: 'https://picsum.photos/id/230/1149/588', alt: '' },
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
        <h2 className="heading">Featured projects</h2>
      </div>
      <ProjectPromo
        image=""
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
        backgroundColor="#4CFF8B"
        promoStyle="light"
        isNewWork
      />
      <ProjectPromo
        image=""
        projectName="Test"
        industry="Testing"
        capabilities="Design"
        className="grid-lines"
      />
    </section>
  </Layout>
);

export default IndexPage;

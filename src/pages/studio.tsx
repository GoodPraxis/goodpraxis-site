import React from 'react';

import { TeamList } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';

const images = [
  { src: '/images/photo-studio.jpg', alt: '' },
];

const IMAGE_PATH = '/images/member-';

const teamMembers = [
  {
    name: 'Maciek',
    role: 'Developer',
    photo: `${IMAGE_PATH}maciek.jpg`,
  },
  {
    name: 'Caitlin',
    role: 'Strategist',
    photo: `${IMAGE_PATH}caitlin.jpg`,
  },
  {
    name: 'Igor',
    role: 'Developer',
    photo: `${IMAGE_PATH}igor.jpg`,
  },
  {
    name: 'Chris',
    role: 'Designer',
    photo: `${IMAGE_PATH}chris.jpg`,
  },
];

const IndexPage = () => (
  <Layout activeItem="Studio">
    <SEO title="Studio" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        We’re an award-winning digital innovation co-operative. We
        collaboratively develop tech products for organisations whose aim is to
        rebalance the inequalities of society.
      </div>
    </section>
    <section className="team-area grid">
      <h2 className="heading">Our team</h2>
      <TeamList members={teamMembers} />
    </section>
  </Layout>
);

export default IndexPage;

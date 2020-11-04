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
    name: 'Maciej Baron',
    role: 'Developer',
    photo: `${IMAGE_PATH}maciek.jpg`,
  },
  {
    name: 'Caitlin Brady',
    role: 'Strategist',
    photo: `${IMAGE_PATH}caitlin.jpg`,
  },
  {
    name: 'Igor Strapko',
    role: 'Developer',
    photo: `${IMAGE_PATH}igor.jpg`,
  },
  {
    name: 'Chris Droom',
    role: 'Designer',
    photo: `${IMAGE_PATH}chris.jpg`,
  },
];

const IndexPage = () => (
  <Layout activeItem="Studio" description="Studio" descriptionTo="/studio">
    <SEO title="Good Praxis • Studio" metaTitle="Good Praxis • Studio" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        Good Praxis is made up of two designers and two developers, all practitioners.
        We share a fondness for our craft and an interest in the world around us.
      </div>
    </section>
    <section className="team-area grid">
      <h2 className="heading">Our team</h2>
      <TeamList members={teamMembers} />
    </section>
  </Layout>
);

export default IndexPage;

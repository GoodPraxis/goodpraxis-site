import React from 'react';

import { TeamList } from '@goodpraxis/components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';
import ContactForm from '../components/contact-form';

const images = [{ src: '/images/photo-studio.jpg', alt: '' }];

const IMAGE_PATH = '/images/member-';

const teamMembers = [
  {
    name: 'Maciej Baron',
    role: 'Developer',
    photo: `${IMAGE_PATH}maciek.jpg`,
  },
  {
    name: 'Caitlin Brady',
    role: 'Creative Strategist',
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
  <Layout activeItem="Studio" description="Studio">
    <SEO title="GOOD PRAXIS • Studio" metaTitle="GOOD PRAXIS • Studio" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        Good Praxis is made up of four practitioners: two developers, a designer
        and a creative strategist. As a co-operative, we believe in collaborating to create
        a fairer, more inclusive world, and we put our theory into practice too.
        We build trusted, engaging, and considered brands and tech products for a
        more egalitarian society, until Good Praxis is common praxis.
      </div>
    </section>
    <section className="team-area grid">
      <h2 className="heading">Our team</h2>
      <TeamList members={teamMembers} />
    </section>
    <section className="grid">
      <div className="hero-area main-description">
        Our core team is able to expand to a broader circle of&nbsp;specialists within
        Co-Tech, a network of digital companies in the co-operative space,
        allowing us to scale to meet ambitions.
      </div>
    </section>
    <section className="form-area">
      <ContactForm />
    </section>
  </Layout>
);

export default IndexPage;

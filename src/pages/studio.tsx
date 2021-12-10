import React from 'react';

import { TeamList } from '@goodpraxis/components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';

const images = [{ src: '/images/photo-studio.jpg', alt: '' }];

const IMAGE_PATH = '/images/member-';

const teamMembers = [
  {
    name: 'Maciej Baron',
    role: 'Technical Director',
    photo: `${IMAGE_PATH}maciek.jpg`,
  },
  {
    name: 'Caitlin Brady',
    role: 'Creative Director',
    photo: `${IMAGE_PATH}caitlin.jpg`,
  },
  {
    name: 'Igor Strapko',
    role: 'Software Developer',
    photo: `${IMAGE_PATH}igor.jpg`,
  },
  {
    name: 'Chris Droom',
    role: 'Design Director',
    photo: `${IMAGE_PATH}chris.jpg`,
  },
];

const IndexPage = () => (
  <Layout activeItem="Studio" description="Studio">
    <SEO title="GOOD PRAXIS • Studio" metaTitle="GOOD PRAXIS • Studio" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        We’re a personable team and we work together in partnership and
        friendship, and we extend that to clients too. We encourage generative
        environments, both within our team and when collaborating with others.
        We have a core team of four members, with skill-sets across graphic,
        environmental, and digital product design, user research, strategy, and
        web development.
      </div>
    </section>
    <section className="team-area grid">
      <h2 className="heading">Our team</h2>
      <TeamList members={teamMembers} />
    </section>
    <section className="grid studio-description">
      <div className="main-description">
        <p>
          We are one of 7000 registered cooperative business in the UK. This
          co-operative structure means equality and democracy in the workplace is
          always centred, and we’ve found the flat structure of our studio is
          conducive to adding perspective and developing ideas, platforming a
          range of voices and expertise.
        </p>
        <p>
          We’re pleased to say we work with
          many of our clients again and again, establishing long term
          relationships and supporting organisational goals as these adapt and
          change to developing environmental, industry or user needs. We believe
          this results in the best work and is reflective of our instincts to
          build connected and productive relationships.
        </p>
      </div>
      <div className="studio-side-image">
        <StaticImage
          width={754}
          quality={80}
          src="../images/studio-side.jpg"
          alt="People sitting by a table"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

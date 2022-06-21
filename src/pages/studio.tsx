import React from 'react';
import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';
import ContactUs from '../components/contact-us';

const images = [{ src: '/images/photo-studio.jpg', alt: 'The interior of the agency' }];

const IndexPage = () => (
  <Layout activeItem="About Us" description="About Us">
    <SEO title="GOOD PRAXIS • About Us" metaTitle="GOOD PRAXIS • About Us" />
    <Slideshow images={images} />
    <section className="hero-area grid">
      <div className="main-description">
        GOOD PRAXIS is a socially aware digital agency based in London providing
        a variety of
        {' '}
        <Link to="/services">digital services</Link>
        , including the creation of websites, web applications and digital
        experiences.
        We’re a personable team and we work together in partnership and
        friendship &ndash; we extend that to clients too. It is important to
        us to work in a collaborative, transparent manner, with a clear
        understanding of needs and goals.
      </div>
    </section>
    <section className="grid studio-description">
      <div className="main-description">
        <p>
          As a socially aware digital agency we will be able to help you create
          projects that are sensitive to the issues and topics that you are
          addressing and to create a message that is respectful, inclusive,
          and that can allow to build trust with your audience.
        </p>
        <p>
          We are one of 7000 registered cooperative business in the UK. This
          co-operative structure means equality and democracy in the workplace is
          always centred, and we’ve found the flat structure of our studio is
          conducive to adding perspective and developing ideas, platforming a
          range of voices and expertise.
        </p>
        <p>
          We’re pleased to say we work with many of our clients again and
          again, establishing long term relationships and supporting
          organisational goals as these adapt and change to developing
          environmental, industry or user needs. We believe this results in
          the best work and is reflective of our instincts to build connected
          and productive relationships.
        </p>
        <p>
          <span className="project-item-link-wrapper">
            <Link to="/services" className="project-item-link">
              See what services we offer
            </Link>
            {' →'}
          </span>
        </p>
      </div>
      <div className="studio-side-image">
        <StaticImage
          width={754}
          quality={80}
          src="../images/studio-side.jpg"
          alt="People from the agency sitting by a table"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
      </div>
    </section>
    <section className="grid studio-description">
      <ContactUs />
    </section>
  </Layout>
);

export default IndexPage;

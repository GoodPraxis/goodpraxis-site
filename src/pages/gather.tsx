import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactUs from '../components/contact-us';

const IndexPage = () => (
  <Layout activeItem="Gather" description="Gather Town">
    <SEO title="GOOD PRAXIS • Gather" metaTitle="GOOD PRAXIS • Gather" />
    <section className="grid studio-description">
      <div className="main-description">
        <h2 className="heading">Gather Town map services</h2>
        <p>
          The Covid pandemic has impacted the way we work and spend our time
          with people.
          {' '}
          <a href="https://gather.town" target="_blank" rel="noreferrer">
            Gather Town
          </a>
          {' '}
          is a platform that allows people to interact with others in colourful
          2D spaces: offices, parks, music venues and many more.
        </p>
        <p>
          We have experience in designing and building custom Gather maps for
          offices, events and campaigns. We work with talented pixel artists
          to bring your ideas to life, apply your branding and make your space
          stand out. We are also comfortable using the rich base Gather tileset,
          which offers hundreds of different tiles and sprites.
        </p>
        <p>
          By using the Gather API, we can create bespoke elements, automated
          events and services, and run games and activities. Whether it’s
          treasure hunts, conferences, galleries, presentations - we got you
          covered.
        </p>
        <ContactUs />
      </div>
      <div className="studio-side-image">
        <StaticImage
          width={754}
          quality={98}
          src="../images/gather/strix1.png"
          alt="An example of a Gather layour using pixel art showing a room"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
        <StaticImage
          width={754}
          quality={98}
          src="../images/gather/strix2.png"
          alt="People sitting by a table"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

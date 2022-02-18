import React from 'react';
import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';
import ContactUs from '../components/contact-us';

const images = [{ src: '/images/photo-services.jpg', alt: '' }];

const IndexPage = () => (
  <Layout activeItem="Services" description="Services">
    <SEO title="GOOD PRAXIS • Services" metaTitle="GOOD PRAXIS • Services" />
    <Slideshow images={images} backgroundColor="rgb(251, 224, 114)" />
    <section className="hero-area grid">
      <div className="main-description">
        We offer a range of digital services, taking advantage of the
        latest frameworks and technologies. We advocate open-source
        solutions wherever possible – our core expertise lies in Django,
        React, Wordpress and Gatsby.js. However we always carefully choose
        the right technology for each project, whether it’s a website,
        application, game, Twitch bot, experimental interactive experience
        or anything else our clients require.
      </div>
    </section>
    <section className="grid studio-description">
      <div className="main-description">
        <p>
          The projects we work on range from small microsites to large web
          apps. We are highly experienced at building bespoke applications
          to suit large or complex requirements. These projects often require
          us to integrate or build different APIs and services, deliver
          custom content management solutions and meet all compliance and
          accessibility requirements.
        </p>
        <p>
          We work with experienced designers who can not only take care of
          the design but also branding aspects of projects.
        </p>
        <p>
          As an
          {' '}
          <a href="https://www.gather.town/partner/good-praxis">
            official Gather Town partner
          </a>
          , we have experience in designing and building
          {' '}
          <Link to="/gather">
            custom Gather maps
          </Link>
          {' '}
          for offices, events and campaigns. By using the Gather API, we can
          create bespoke elements, automated events and services, and run
          games and activities.
        </p>
        <h2 className="heading">What we offer:</h2>
        <ul>
          <li>Website design and development</li>
          <li>Web app development, including mobile</li>
          <li>Content Management Systems (CMS)</li>
          <li>Databases and API infrastructure</li>
          <li>DevOps - CI/CD - Hosting - Support</li>
          <li>Data Integration and Connection</li>
          <li>Office tasks automatisation</li>
          <li>Social Media Bots</li>
          <li>
            <Link to="/gather">
              Gather Town maps design and development
            </Link>
          </li>
        </ul>
        <h2 className="heading">What we use:</h2>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript &amp; TypeScript</li>
          <li>React, Gatsby.js</li>
          <li>Python, Flask, Django</li>
          <li>SQL, MySQL, PostgreSQL, MongoDB</li>
          <li>Adobe Suite</li>
          <li>Gather Town</li>
          <li>WordPress</li>
          <li>REST API, GraphQL</li>
        </ul>
      </div>
      <div className="studio-side-image">
        <StaticImage
          width={754}
          quality={95}
          src="../images/services/cworking.jpg"
          alt="A woman sitting in front of a laptop"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
        <StaticImage
          width={754}
          quality={95}
          src="../images/services/igor-working.jpg"
          alt="A man working in front of a computer"
          breakpoints={[420, 768, 1024, 1280, 1570]}
        />
      </div>
    </section>
    <section className="grid">
      <ContactUs />
    </section>
  </Layout>
);

export default IndexPage;
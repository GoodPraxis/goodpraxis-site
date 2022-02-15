import React, { useState, useEffect } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Slideshow from '../components/slideshow';

import './main.scss';

const images = [{ src: '/images/photo-studio.jpg', alt: '' }];

const IndexPage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => setEmail('hello@goodpraxis.coop'), []);
  return (
    <Layout activeItem="Studio" description="Studio">
      <SEO title="GOOD PRAXIS • Studio" metaTitle="GOOD PRAXIS • Studio" />
      <Slideshow images={images} />
      <section className="hero-area grid">
        <div className="main-description">
          We’re a personable team and we work together in partnership and
          friendship &ndash; we extend that to clients too. It is important to
          us to work in a collaborative, transparent manner, with a clear
          understanding of needs and goals.
        </div>
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
      <section className="grid">
        <div className="main-description">
          <h2 className="heading">Our services</h2>
          <p>
            We offer a range of digital services, taking advantage of the
            latest frameworks and technologies. We advocate open-source
            solutions wherever possible – our core expertise lies in Django,
            React, Wordpress and Gatsby.js. However we always carefully choose
            the right technology for each project, whether it’s a website,
            application, game, Twitch bot, experimental interactive experience
            or anything else our clients require.
          </p>
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
            <a href="https://goodpraxis.coop/studio/">
              custom Gather maps
            </a>
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
            <li>Gather Town maps design and development</li>
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
        <div id="contact-us" className="contact-us">
          <h2 className="heading">Get in touch</h2>
          <p className="main-description">
            We’d love to discuss any project you have in mind, whether it’s
            small or big. Drop us a line, or give us a quick call!
          </p>
          <ul className="main-description plain-list">
            <li>
              <a href={`mailto:${email}`}>
                {email}
              </a>
            </li>
            <li>
              <a href="tel:+447803171093">
                +44(0)7803&nbsp;171&nbsp;093
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

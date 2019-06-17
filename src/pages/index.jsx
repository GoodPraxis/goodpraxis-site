import React from 'react';
import Card from '../components/card/card';
import EmailAddress from '../components/email-address/email-address';
import LogoAnimation from '../components/logo-animation/logo-animation';
import PictureElement from '../components/picture-element/picture-element';
import SEOComponent from '../components/seo-component/seo-component';
import getGrid from '../helpers/grid-helper';

import '../styles/global.scss';

export default () => (
  <div>
    <main>
      <SEOComponent />
      <div className="page-content">
        <section className="grid-context section-no-gap">
          <LogoAnimation src="/images/gplogo.png" />
          <div className={getGrid('full', 'one', 'one')}>
            Good Praxis Ltd.
            <br />
            18-22 Ashwin Street
            <br />
            London E8 3DL
          </div>
          <div className={getGrid('full', 'one', 'one')}>
            <EmailAddress />
            <br />
            07&nbsp;803&nbsp;171&nbsp;093
          </div>
        </section>
        <section className="section-no-gap">
          <h1 className={getGrid('full-narrow', 'full-narrow', 'full-narrow')}>
            Good Praxis is a digital co-op based in London
          </h1>
        </section>
        <section className="section-no-gap">
          <p className={`beta ${getGrid()}`}>
            We are a worker-owned co-operative established to build creative and
            thoughtful work that is in line with our values. We believe in being
            socially-aware, considerate and fair to everyone involved. It’s
            important to respect our communities and support meaningful causes
            that can make a lasting change.
          </p>
        </section>
        <section className="picture-collection">
          <PictureElement src="/images/logo-closeup.png" />
          <PictureElement src="/images/photo-1.jpg" />
          <PictureElement src="/images/photo-2.jpg" />
        </section>
        <section>
          <div className={getGrid('full-narrow', 'full-narrow', 'two-narrow')}>
            <h2>We offer</h2>
            <p className="beta">
              Consultancy, design and creation of digital products
            </p>
          </div>
          <div className={getGrid('full-narrow', 'full-narrow', 'two-narrow')}>
            <h2>For</h2>
            <ul className="beta">
              <li>Socially-aware companies and co-operatives</li>
              <li>Local businesses</li>
              <li>NGOs and charities</li>
              <li>Cultural and political groups</li>
            </ul>
          </div>
        </section>
        <section className="card-container">
          <Card>
            <div className="logo">
              <img src="/images/logo.svg" alt="Good Praxis" />
            </div>
          </Card>
          <Card type="secondary">
            Good Praxis Ltd.
            <br />
            18-22 Ashwin Street
            <br />
            London E8 3DL
          </Card>
        </section>
        <section className="-no-gaps">
          <p className={`beta ${getGrid()}`}>
          In the past, our members have worked on projects for the BBC, F.T.,
          Sony, Google and Shelter, amongst many others.
          </p>
          <p className={`beta ${getGrid()}`}>
            Want to work with us?
            {' '}
            <EmailAddress label="Drop us a line." />
          </p>
        </section>
      </div>
    </main>
    <footer>
      <a
        href="https://www.uk.coop/"
        className="cuk-logo"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Cooperatives UK member"
          src="/images/logo-cuk.svg"
        />
      </a>
    </footer>
  </div>
);

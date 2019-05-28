import React from 'react';
import { Helmet } from 'react-helmet';
import Card from '../components/card/card';
import EmailAddress from '../components/email-address/email-address';
import LogoAnimation from '../components/logo-animation/logo-animation';
import PictureElement from '../components/picture-element/picture-element';
import getGrid from '../helpers/grid-helper';

import '../styles/global.scss';

export default () => (
  <div>
    <main>
      <Helmet
        title="Good Praxis"
        meta={[
          { name: 'description', content: 'London based digital co-op' },
          { name: 'keywords', content: 'digital agency, co-op' },
        ]}
      />
      <div className="page-content">
        <section className="grid-context section-no-gap">
          <LogoAnimation src="/images/gplogo.png" />
          <div className={getGrid('full', 'one', 'one')}>
            Good Praxis Ltd.
            <br />
            321 Karl Marx Street
            <br />
            London EE 123
          </div>
          <div className={getGrid('full', 'one', 'one')}>
            <EmailAddress />
            <br />
            02&nbsp;123&nbsp;456&nbsp;789
          </div>
        </section>
        <section className="section-no-gap">
          <h1 className={getGrid('full-narrow', 'full-narrow', 'full-narrow')}>
            Good Praxis is a digital co-op based in London
          </h1>
        </section>
        <section>
          <div className={getGrid('full-narrow', 'full-narrow', 'two-narrow')}>
            <h2>We offer</h2>
            <p className="beta">
              Consultancy, design, and creation of digital products
            </p>
          </div>
          <div className={getGrid('full-narrow', 'full-narrow', 'two-narrow')}>
            <h2>For</h2>
            <ul className="beta">
              <li>Ethical companies</li>
              <li>Local businesses</li>
              <li>NGOs</li>
              <li>Charities</li>
            </ul>
          </div>
        </section>
        <section className="picture-collection">
          <PictureElement src="/images/photo-1.jpg" />
          <PictureElement src="/images/photo-2.jpg" />
          <PictureElement src="/images/photo-3.jpg" />
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
            123 Karl Marx Street
            <br />
            London EE 123
          </Card>
        </section>
        <section className="-no-gaps">
          <p className={`beta ${getGrid()}`}>
            Our members have in the past worked on projects for the BBC, F.T,
            Sony, Google, Plan International, ActionAid, Shelter. We offer
            thoughtful + affordable digital services to NGOs, cultural
            instutions and political groups that share our ideals.
          </p>
          <p className={`beta ${getGrid()}`}>
            <EmailAddress label="Contact us" />
            {' '}
            for more details.
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

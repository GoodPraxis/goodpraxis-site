import React from 'react';
import { Link } from 'gatsby';

import './hero-image-text.scss';
import ServicesScrollAnimation from '../services-scroll-animation';
import LogoAnimation from '../logo-animation';

const showWhatWeOffer = () => {
  const whatweoffer = document.getElementById('whatweoffer');
  if (whatweoffer) {
    whatweoffer.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroImageText = () => (
  <div className="hero-image-with-text">
    <div className="hero-image-with-text-image">
      <ServicesScrollAnimation />
    </div>
    <div className="hero-image-with-text-copy">
      <p>
        We offer a
        {' '}
        <a
          onClick={(ev) => {
            ev.preventDefault();
            showWhatWeOffer();
          }}
          href="#whatweoffer"
        >
          range of digital services

        </a>
        , taking advantage of the latest
        frameworks and technologies

      </p>
    </div>
  </div>
);

export const WorkHeroSection = () => (
  <div className="hero-image-with-text hero-image-with-text--work">
    <div className="hero-image-with-text-image">
      <LogoAnimation />
    </div>
    <div className="hero-image-with-text-copy">
      <p>
        Since the beginning of
        {' '}
        <Link to="/studio">GOOD PRAXIS</Link>
        {' '}
        our objective has been to work on projects which have a positive social
        or environmental impact.

      </p>
      <p>
        We back the goals and principles of our clients and partners. We
        work for and with charities, ethical companies, cultural
        organisations, local initiatives and political organisations.
        We are truly proud to be able to add our digital skillset to their
        efforts to create a better world. That is how we define the phrase
        &ldquo;tech for good&rdquo;.
      </p>
    </div>
  </div>
);

export default HeroImageText;

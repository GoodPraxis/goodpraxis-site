import React from 'react';

import './hero-image-text.scss';

const showWhatWeOffer = () => {
  const whatweoffer = document.getElementById('whatweoffer');
  if (whatweoffer) {
    whatweoffer.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroImageText = () => (
  <div className="hero-image-with-text">
    <div className="hero-image-with-text-image">
      <img src="/images/photo-services.jpg" alt="" />
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
        frameworks and technologies.

      </p>
    </div>
  </div>
);

export default HeroImageText;

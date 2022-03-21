import React from 'react';

import './hero-image-text.scss';

const HeroImageText = () => (
  <div className="hero-image-with-text">
    <div className="hero-image-with-text-image">
      <img src="/images/photo-services.jpg" alt="" />
    </div>
    <div className="hero-image-with-text-copy">
      <p>
        We offer a
        {' '}
        <span>range of digital services</span>
        , taking advantage of the latest
        frameworks and technologies.

      </p>
    </div>
  </div>
);

export default HeroImageText;

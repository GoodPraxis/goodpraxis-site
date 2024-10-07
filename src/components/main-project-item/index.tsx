import React from 'react';

import './main-project-item.scss';
import { StaticImage } from 'gatsby-plugin-image';

const MainProjectItem = () => (
  <div className="main-hero-container">
    <div className="main-hero_image-container">
      <StaticImage
        src="./logo_yellow_large.png"
        alt="The Living Wage logo saying: we are a living wage employer"
        loading="lazy"
      />
    </div>
    <div>Good Praxis</div>
  </div>
);

export default MainProjectItem;

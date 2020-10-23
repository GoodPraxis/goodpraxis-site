import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import { Logo } from '@goodpraxis/components';
import './slideshow.scss';

interface SlideshowImage {
  src: string;
  alt: string;
}

interface SlideshowProps {
  images: SlideshowImage[];
  delay?: number;
}

const Slideshow = ({ images, delay }: SlideshowProps) => {
  const [index, setIndex] = useState(0);

  useInterval(() => {
    setIndex((currentIndex) => (currentIndex + 1) % images.length);
  }, delay);

  return (
    <div className="slideshow">
      { images.map(({ src, alt }, imageIndex) => (
        <div
          className={`slideshow-image-container${imageIndex === index ? ' is-visible' : ''}`}
          key={src}
        >
          <img src={src} alt={alt} />
        </div>
      ))}
      <div className="slideshow-logo">
        <Logo text="Good Praxis • Good Praxis •" textScale={0.95} />
      </div>
    </div>
  );
};

Slideshow.defaultProps = {
  delay: 2500,
};

export default Slideshow;

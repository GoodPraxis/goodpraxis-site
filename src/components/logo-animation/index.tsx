import React, { useEffect, useState, useRef } from 'react';
import { Logo, Line } from './logo';

import './logo-animation.scss';

// This is just dummy code displayed on the page
const CODE = `
.logo {
  aspect-ratio: 1;
  display: block;
  margin: 1em 2em;
}

.logo-text {
  transform: rotate(30deg);
  fill: black;
}

.logo-container {
  margin: 1em 2em;
  max-width: 100%;
}

.logo-circle {
  animation: spin 10s linear
    infinite;
}
`;

const INTERVAL = 16;

const LogoAnimation = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (index <= CODE.length) {
      timer.current = setTimeout(() => {
        setIndex(index + 1);
      }, INTERVAL);
    }
  }, [index]);

  useEffect(() => {
    setIndex(1);
    setIsReady(true);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  return (
    <div className="logo-animation-container">
      <div className="logo-animation-anchor">
        <div className={`logo-animation${isReady ? ' fadein' : ''}`}>
          {Line}
          {Logo}
          <pre className="logo-animation__code">
            {CODE.slice(0, index)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;

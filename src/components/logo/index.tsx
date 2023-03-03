import React from 'react';
import { useUID } from 'react-uid';

interface LogoProps {
  text: string;
  fontSize?: number;
  letterSpacing?: number;
  rotateDegrees?: number;
  textScale?: number;
  animated?: boolean;
  animationDuration?: number;
  backgroundColor?: string;
}

const Logo = ({
  text,
  textScale,
  fontSize,
  letterSpacing,
  rotateDegrees,
  animated,
  animationDuration,
  backgroundColor,
} : LogoProps) => {
  const uid = useUID();
  return (
    <div
      className={`circle-logo${animated ? ' -animated' : ''}`}
      style={{ animationDuration: `${animationDuration}s` }}
    >
      <svg viewBox="0 0 200 200">
        <path
          d="m 25,100 a 75,75 0 1 1 150,0 75,75 0 1 1 -150,0 m 75,0"
          id={`gplogo${uid}`}
        />
        <circle r={100} fill={backgroundColor} cx={100} cy={100} />
        {/* Transform needed on group because of a Safari bug */}
        <g style={{ transform: `rotate(${rotateDegrees}deg) scale(${textScale})` }}>
          <text
            width="100"
            style={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
            }}
          >
            <textPath xlinkHref={`#gplogo${uid}`}>{text}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

Logo.defaultProps = {
  fontSize: 34,
  letterSpacing: 1,
  rotateDegrees: 45,
  animated: false,
  animationDuration: 8,
  backgroundColor: '#f4f8fa',
  textScale: 1,
};

export default Logo;

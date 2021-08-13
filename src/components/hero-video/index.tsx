import React from 'react';
import './hero-video.scss';

const HeroVideo = () => (
  <div className="hero-video">
    <video
      autoPlay
      muted
      loop
      src="/videos/conveyor.mp4"
      className="hero-video-player"
    />
  </div>
);

export default HeroVideo;

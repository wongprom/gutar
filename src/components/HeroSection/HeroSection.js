import React from 'react';
import './HeroSection.scss';
import HeroImage from '../../images/sunset-1920x1079jpg.jpg';

const heroSection = () => (
  <div className="hero-section">
    <img src={HeroImage} alt="test" />
  </div>
);

export default heroSection;

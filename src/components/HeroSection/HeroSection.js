import React from 'react';
import './HeroSection.scss';
import HeroImage from '../../images/sunset-1920x1079jpg.jpg';

const heroSection = () => (
  <div className="hero-section">
    <img src={HeroImage} alt="test" />
    <div className="text-box">
      <h1>Gutar Förr</h1>
      <p>Detta är bara en utfyllnadstext</p>
    </div>
  </div>
);

export default heroSection;

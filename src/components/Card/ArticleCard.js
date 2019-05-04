import React from 'react';
import testImage from '../../images/nature-test.jpg';

import './ArticleCard.scss';

const ArticleCard = () => {
  return (
    <div className="scroll-container">
      <div className="card">
        <div className="image-container">
          <img src={testImage} alt="test" />
        </div>
        <div className="text-container">
          <p className="headline">Rubrik</p>
          <p className="text">Lorem lorem lorem lorem lorem lorem lorem</p>
          <a href="#">läs mer</a>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;

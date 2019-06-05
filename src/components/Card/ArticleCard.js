import React from 'react';
import testImage from '../../images/nature-test.jpg';
import Button from '@material-ui/core/Button';

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
      <Button variant="contained" color="primary">
        Hello World
        </Button>
    </div>
  );
};
export default ArticleCard;

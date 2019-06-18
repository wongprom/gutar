import React from 'react';
import testImage from '../../images/nature-test.jpg';

import './ArticleCard.scss';

const ArticleCard = (props) => {
  const test = props.articleContent;


  return (

    <>
      <div className="scroll-container">
        <div className="card">
          <div className="image-container">
            <img src={props.img} alt="Bild" />
          </div>
          <div className="text-container">
            <p className="headline">{props.heading}</p>
            <p className="text">{props.articleContent}</p>
            <a href="#">läs mer</a>
          </div>
        </div>
      </div>
    </>

  );
};
export default ArticleCard;

import React from 'react';


import '../BigCard/BigArticleCard.scss';

const BigArticleCard = (props) => {



  return (

    <>
      <div className="scroll-container">
        <div className="card-big">
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
export default BigArticleCard;

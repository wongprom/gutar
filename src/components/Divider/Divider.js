import React from 'react';
import './Divider.scss';

const divider = props => {
  return (
    <div className="divider">
      <p>
        {props.mestLastaArtikel} {props.nyastArtiklar} {props.allaSocknar}
      </p>
    </div>
  );
};

export default divider;

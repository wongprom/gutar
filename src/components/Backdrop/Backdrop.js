import React from 'react';
import './Backdrop.scss';

const backdrop = props => (
  <div className="backdrop" onClick={props.backdropClickHandler} />
);

export default backdrop;

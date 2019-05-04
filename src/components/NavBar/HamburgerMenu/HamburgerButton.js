import React from 'react';
import './HamburgerButton.scss';

const hamburgerButton = props => (
  <button
    className="hamburgerButtonContainer"
    onClick={props.hamburgerToggleClickHandler}
  >
    <div className="buttonLine" />
    <div className="buttonLine" />
    <div className="buttonLine" />
  </button>
);

export default hamburgerButton;

import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGlobeAfrica, faSurprise } from '@fortawesome/free-solid-svg-icons'
// import { faFileArchive } from '@fortawesome/free-solid-svg-icons'


import { NavLink } from 'react-router-dom';

const footer = () => {
  return (
    <footer>
      <div className="icons-wrapper">
        <div className="icon-container">
          <FontAwesomeIcon icon={faSurprise} size={"2x"} />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCoffee} size={"2x"} />
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faGlobeAfrica} size={"2x"} />
        </div>
      </div>
      <div className="links-wrapper">
        <div className="go-to">
          <p className="sub-header">Gå till</p>
          <ul>
            <li>
              <NavLink className="navBarNavigationItem" to="/">
                Hem
            </NavLink>
            </li>
            <li>
              <NavLink className="navBarNavigationItem" to="/NyastArtiklar">
                Nyast Artiklar
            </NavLink>
            </li>
            <li>
              <NavLink className="navBarNavigationItem" to="/MestLastaArtiklar">
                Mest Lästa Artiklar
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;

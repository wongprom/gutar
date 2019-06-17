import React from 'react';
import './Footer.scss';

import { NavLink } from 'react-router-dom';

const footer = () => {
  return (
    <footer>
      <div className="icons-wrapper">
        <div className="icon-container"></div>
        <div className="icon-container"></div>
        <div className="icon-container"></div>
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

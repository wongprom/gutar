import React from 'react';
import { NavLink } from 'react-router-dom';

import './HamburgerMenu.scss';

const hamburgerMenu = props => {
  let className = 'hamburgerMenu';

  if (props.show) {
    className = 'hamburgerMenu open';
  }
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink className="hamburgerLink" to="/">
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink className="hamburgerLink" to="/NyastArtiklar">
            Nyast Artiklar
          </NavLink>
        </li>
        <li>
          <NavLink className="hamburgerLink" to="/MestLastaArtiklar">
            Mest Lästa Artiklar
          </NavLink>
        </li>
        <li>
          <NavLink className="hamburgerLink" to="/Socknar">
            Socknar
          </NavLink>
        </li>
        <li>
          <NavLink className="hamburgerLink" to="/OmOss">
            Om Oss
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default hamburgerMenu;

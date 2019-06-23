import React from 'react';
import { NavLink } from 'react-router-dom';

import './HamburgerMenu.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const hamburgerMenu = props => {
  let className = 'hamburgerMenu';

  if (props.show) {
    className = 'hamburgerMenu open';
  }
  return (
    <nav className={className}>
      <div className="icon-container">
        <FontAwesomeIcon
          onClick={props.hamburgerToggleClickHandler}
          className="icon"
          icon={faTimes}
          size={"2x"}
        />
      </div>
      <ul>
        <li>
          <NavLink activeClassName="active" onClick={props.hamburgerToggleClickHandler} className="hamburgerLink" exact to="/">
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" onClick={props.hamburgerToggleClickHandler} className="hamburgerLink" to="/NyastArtiklar">
            Nyast Artiklar
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" onClick={props.hamburgerToggleClickHandler} className="hamburgerLink" to="/MestLastaArtiklar">
            Mest Lästa Artiklar
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" onClick={props.hamburgerToggleClickHandler} className="hamburgerLink" to="/KontaktaOss">
            Kontakta Oss
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" onClick={props.hamburgerToggleClickHandler} className="hamburgerLink" to="/OmOss">
            Om Oss
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default hamburgerMenu;

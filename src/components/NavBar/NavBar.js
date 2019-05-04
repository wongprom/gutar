import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import HamburgerButton from './HamburgerMenu/HamburgerButton';

const NavBar = props => (
  <header className="navBar">
    <nav className="navBarNavigation">
      <HamburgerButton
        hamburgerToggleClickHandler={props.hamburgerToggleClickHandler}
      />
      <div className="navBarLogoContainer">
        <NavLink className="navBarLogo" to="/">
          LOGGA
        </NavLink>
      </div>
      <div className="spaceBetween"> </div>
      <div className="navBarNavigationItems">
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
          <li>
            <NavLink className="navBarNavigationItem" to="/Socknar">
              Socknar
            </NavLink>
          </li>
          <li>
            <NavLink className="navBarNavigationItem" to="/OmOss">
              Om Oss
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;

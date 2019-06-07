import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import HamburgerButton from './HamburgerMenu/HamburgerButton';
import Search from '@material-ui/icons/Search'

const NavBar = props => (
  <header className="navBar">
    <nav className="navBarNavigation">
      <div className="navBarLogoContainer">
        <NavLink className="navBarLogo" to="/">
          LOGGA
        </NavLink>

      </div>
      <div className="search-container">
        <div className="search">
          <Search />
        </div>
      </div>
      <HamburgerButton
        hamburgerToggleClickHandler={props.hamburgerToggleClickHandler}
      />
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

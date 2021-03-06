import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <footer>
      <div className="icons-wrapper">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFacebookF} size={"3x"} color={"#1677F2"} />
          <p>FaceBook</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faTwitter} size={"3x"} color={"#0098DA"} />
          <p>Twitter</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faLinkedinIn} size={"3x"} color={"#0077B5"} />
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="links-wrapper">
        <div className="go-to">
          <p className="sub-header">Gå till</p>
          <ul>
            <li>
              <NavLink
                activeClassName="active" className="navBarNavigationItem" exact to="/">
                Hem
            </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" className="navBarNavigationItem" to="/NyastArtiklar">
                Nyast Artiklar
            </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" className="navBarNavigationItem" to="/MestLastaArtiklar">
                Mest Lästa Artiklar
            </NavLink>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <p className="sub-header">Kontakta Oss Via E-post</p>
          <ul>
            <li>
              <NavLink
                activeClassName="active" className="navBarNavigationItem" exact to="/KontaktaOss">
                E-post
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;

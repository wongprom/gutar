import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hem from './components/Pages/Hem/Hem';
import MestLastaArtiklar from './components/Pages/MestLastaArtiklar/MestLastaArtiklar';
import NyastArtiklar from './components/Pages/NyastArtiklar/NyastArtiklar';
import OmOss from './components/Pages/OmOss/OmOss';
import Socknar from './components/Pages/Socknar/Socknar';
import FelURL from './components/Pages/Error/FelURL';

import HamburgerMenu from './components/NavBar/HamburgerMenu/HamburgerMenu';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    hamburgerMenuOpen: false
  };

  hamburgerToggleClickHandler = () => {
    // works, but bad practices. use a function to switch between true/false states
    // this.setState({hamburgerMenuOpen: !hamburgerMenuOpen})
    this.setState(prevState => {
      return { hamburgerMenuOpen: !prevState.hamburgerMenuOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ hamburgerMenuOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.hamburgerMenuOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div className="site">
          <NavBar
            hamburgerToggleClickHandler={this.hamburgerToggleClickHandler}
          />
          <HamburgerMenu
            hamburgerToggleClickHandler={this.hamburgerToggleClickHandler}
            show={this.state.hamburgerMenuOpen} />
          {backdrop}
          <main>
            <Switch>
              <Route path="/" exact component={Hem} />
              <Route path="/NyastArtiklar" component={NyastArtiklar} />
              <Route path="/MestLastaArtiklar" component={MestLastaArtiklar} />
              <Route path="/Socknar" component={Socknar} />
              <Route path="/OmOss" component={OmOss} />
              <Route component={FelURL} />
            </Switch>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

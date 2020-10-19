import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import MainContainer from './components/main-container/MainContainer';
import Cennik from './components/sections/Cennik/Cennik';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Gallery from './components/sections/Gallery/Gallery';
import Menu from './components/sections/Menu/Menu';
import Partners from './components/sections/Partners/Partners';
import Prices from './components/sections/Prices/Prices';

class App extends Component {
  render () {
    return (
      <BrowserRouter className="App">
        <Menu />
        <LandingPage />
        <MainContainer/>
        <Partners />
        <Prices />
        <Cennik />
        <Gallery />
        <Contact />
        <Footer />
      </BrowserRouter>
    );
  }
 
}

export default App;

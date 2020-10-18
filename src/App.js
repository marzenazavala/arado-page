import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import MainContainer from './components/main-container/MainContainer';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Gallery from './components/sections/Gallery/Gallery';
import Menu from './components/sections/Menu/Menu';
import Partners from './components/sections/Partners/Partners';

class App extends Component {
  render () {
    return (
      <BrowserRouter className="App">
        <Menu />
        <LandingPage />
        <MainContainer/>
        <Gallery />
        <Contact />
        <Partners />
        <Footer />
      </BrowserRouter>
    );
  }
 
}

export default App;

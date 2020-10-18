import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './landingPage.scss';


const LandingPage = () => {
    return (
      <div className='landing-page'>
       
        <Fade top>
          <div className='logo'/>
        </Fade>
        <Fade bottom>
          <div className='btn from-center button'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              Wchodzę
          </div>
        </Fade>
        <div className='logos-wrapper'>
          <div className='logo-justify'>
            <Link to={{ pathname: "https://moviegate.pl" }} target="_blank" className='movie-gate'/>
            <Link to={{ pathname: "https://timegates.pl" }} target="_blank" className='time-gate'/>
          </div>
        </div>
      </div>
    );
};

export default LandingPage;
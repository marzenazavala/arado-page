import React from 'react';
import Flip from 'react-reveal/Flip';
import './landingPage.scss';

const LandingPage = () => {
    return (
        
            <div className='landing-page'>
              <Flip top>
                <div className='logo'/>
              </Flip>

              <div className='btn from-center button'>
                
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Wchodzę
              
              
              </div>

        </div>
        
     
    );
};

export default LandingPage;
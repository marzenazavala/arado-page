import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../header/Header';
import './mainContainer.scss';


const MainContainer = () => {
  return (
    <div className='parallax' id='aktualnosci'>
        <div className='main-container'>
          <div className='paper'>
          <Header />
          <Home />
          </div>
          
        </div>
    </div>
  );
};

export default MainContainer
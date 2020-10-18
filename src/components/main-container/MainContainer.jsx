import React from 'react';
import Home from '../../pages/Home/Home';
import Header from '../header/Header';
import './mainContainer.scss';


const MainContainer = () => {
  return (
    <div className='parallax'>
        <div className='main-container'>
          <Header />
          <Home />
        </div>
    </div>
  );
};

export default MainContainer
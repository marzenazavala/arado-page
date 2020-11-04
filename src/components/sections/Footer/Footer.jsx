import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer_contact">
        <div /><span>projekt@projektarado.pl</span>
        <div className="phone-icon"/><span>+48 512 561 292</span>
          <div>Projekt Arado - zaginione laboratorium Hitlera</div>
          <div>ul. Lubawska 1a</div>
          <div>58-400 Kamienna Góra</div>
      </div>
      <div>
        <Fade delay={500}>
        <div>
          Arado
        </div>
        <div className='footer_copyright'>
          Projekt Arado. Copyright 2020
        </div>
        </Fade>
      </div>
      <div className='footer_hours'>
        <Link to={{ pathname: "https://www.facebook.com/projektarado" }} target="_blank">
          <div className='facebook-icon' />
        </Link>
        <div>Godziny otwarcia:</div>
        <div>Od poniedziałku do niedzieli 10:00-18:00</div>
        <div>Od 15 listopada do 15 kwietnia 10:00-17:00</div>
      </div>
    </footer>
    );
};

export default Footer;
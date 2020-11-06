import React from  'react';
import Fade from 'react-reveal/Fade';
import ContactForm from '../../form/ContactForm';
import Location from '../../location/Location';
import './contact.scss';

const Contact = () => {
  return (
    <div className='main-wrapper2' id='kontakt'>
      <Fade delay={500}>
        <h1>Kontakt</h1>
        <h3>Odwiedź nas lub napisz wiadomość - czekamy.</h3>
        <div className='contact-wrapper'>
          <ContactForm/>
          <Location />
        </div>       
      </Fade>
    </div>
    );
};

export default Contact
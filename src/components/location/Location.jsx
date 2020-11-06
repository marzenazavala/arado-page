
import React from 'react';
import './location.scss';

const Location = () => {
    return (
      <div className="location-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7808481828374!2d16.02712571537751!3d50.77963597147203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470efa31ebfc5edb%3A0x1d1ab144f26f421d!2sProjekt%20Arado!5e0!3m2!1sen!2spl!4v1604422704175!5m2!1sen!2spl"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    );
};

export default Location;
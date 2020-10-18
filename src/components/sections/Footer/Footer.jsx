import React from 'react';
import Fade from 'react-reveal/Fade';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="bck-gray">
        <Fade delay={500}>
        <div>
            Arado
        </div>
        <div className="footer_copyright">
            Arado. All rights reserved.
        </div>
        </Fade>
            
        </footer>
    );
};

export default Footer;
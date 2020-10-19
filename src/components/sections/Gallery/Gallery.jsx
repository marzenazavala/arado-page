import React from  'react';
import ResponsiveGallery from 'react-responsive-gallery';
import Fade from 'react-reveal';
import './gallery.scss';

const images=[
    {
      src: 'https://i.ibb.co/sFFJtwk/RR27364.png'
    },
    {
        src: 'https://i.ibb.co/L0w3nTD/photo-frame-4.png'
      },
    {
        src: 'https://i.ibb.co/c39rGCr/photo-frame-5.png'
      },
      {
        src: 'https://i.ibb.co/L0w3nTD/photo-frame-4.png'
      },
      {
        src: 'https://i.ibb.co/sFFJtwk/RR27364.png'
      },
      {
        src: 'https://i.ibb.co/c39rGCr/photo-frame-5.png'
      },
      {
        src: 'https://i.ibb.co/sFFJtwk/RR27364.png'
      },
      {
        src: 'https://i.ibb.co/L0w3nTD/photo-frame-4.png'
      },
      {
        src: 'https://i.ibb.co/c39rGCr/photo-frame-5.png'
      },
      {
        src: 'https://i.ibb.co/L0w3nTD/photo-frame-4.png'
      }, 
      
  ];


const Gallery = () => {
    return (
        <div className='main-box' id='galeria'>
            <div className='g-wrapper'>
                <Fade delay={2000}>
                    <h1>Galeria</h1>
                    <ResponsiveGallery images={images}/>
                </Fade>
            </div>
            
        </div>
    );
};

export default Gallery
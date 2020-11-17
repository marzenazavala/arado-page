import React from  'react';
import Gallery from 'react-grid-gallery';
import Fade from 'react-reveal';
import { IMAGES } from './GalleryImages';
import './gallery.scss';
import GalleryPreview from './GalleryPreview';




const GalleryGrid = () => {
    return (
        <div className='main-box' id='galeria'>
            <div className='g-wrapper'>
                <Fade delay={2000}>
                    <h1>Galeria</h1>
                    <GalleryPreview />
                    {/* <Gallery images={IMAGES} enableLightbox={true}
                    enableImageSelection={false} /> */}
                </Fade>
            </div>
            
        </div>
    );
};

export default GalleryGrid
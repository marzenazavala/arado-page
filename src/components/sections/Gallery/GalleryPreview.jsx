import React from  'react';
import Fade from 'react-reveal';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './gallery.scss';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1124 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1124, min: 664 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1
  }
};

const GalleryPreview = () => {
  return (
      <div>
        <Fade delay={1000}>
        <Carousel
          centerMode={false}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 1s linear"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        <div className='g-box galeria1'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria2'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
          <div className='g-box galeria3'>
        <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria4'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria1'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria2'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria3'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        <div className='g-box galeria4'>
          <div className='g-title'>Rajd Arado 2019</div>
        </div>
        </Carousel>
        </Fade>
            </div>
    );
};

export default GalleryPreview
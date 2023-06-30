import React, { useRef } from 'react';
import Slider from 'react-slick'
import ReactPlayer from 'react-player';
// import { Carousel } from '@trendyol-js/react-carousel';
import pyramid from "../Components/img/pyramid.mp4";
import graphvid from "../Components/img/graphvid.mp4";
import coinvid from "../Components/img/coinvid.mp4";

// import LeftArrow from '../Components/LeftArrow';
// import RightArrow from '../Components/RightArrow';
import 'animate.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


// const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';


const Workcopy = (props) => {
  // eslint-disable-next-line 

  const settings = {
    dots: true,
    infinite: true,
    navs: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    // height: '50vh',
    // width: '50vw'

  };
 

  const playerRef = useRef(null);
  return (
    <div className="workBody" style={{width: '100%', height: '80vh'}}>
      <div className='Title'>
        <p style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise', marginBottom: '2%', textAlign: 'center', zIndex: '-2', overflow: 'hidden' }}>Work Samples</p>

      </div>

      <div className="videosContainer col-lg-10">
        <Slider {...settings}>
          <div className="videoWrapper"  >
            <ReactPlayer className="videoPlayer "  width="100%"
            height="100%" ref={playerRef} url={pyramid} controls={true} />

          </div>
          <div className="videoWrapper" >
            <ReactPlayer className="videoPlayer " ref={playerRef} url={graphvid} controls={true} />
          </div>
          <div className="videoWrapper" >
            <ReactPlayer className="videoPlayer " ref={playerRef} url={coinvid} controls={true} />
          </div>


     

   </Slider>
      </div>

 

 

  </div>
  ) 
};

export default Workcopy;

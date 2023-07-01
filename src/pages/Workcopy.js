import React from 'react';
import Slider from 'react-slick'
// import ReactPlayer from 'react-player';
// import "../../node_modules/video-react/dist/video-react.css";
// import { Carousel } from '@trendyol-js/react-carousel';
// import pyramid from "../Components/img/pyramid.mp4";
// import graphvid from "../Components/img/graphvid.gif";
// import coinvid from "../Components/img/coinvid.mp4";
// import { Player } from 'video-react';

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
    swipeToSlide: true,
    className: "center",
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    // height: '50vh',
    // width: '50vw'

  };
 
//  const graphurl = 'https://ik.imagekit.io/sfoz4oajo/graphvid.mp4?updatedAt=1688166060233'
//   const playerRef = useRef(null);
  return (
    <div className="workBody" style={{ width: '100%', height: '80vh' }}>
      <div className='Title'>
        <span style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise', marginBottom: '2%', textAlign: 'center', zIndex: '-2', overflow: 'hidden' }}>Work Samples</span>
      </div>

      <div className="videosContainer">
        <Slider {...settings}>
          <div className="videoWrapper" width="100%" height="100%" >
            <iframe
              width="100%"
              height='600vh'
              src="https://ik.imagekit.io/sfoz4oajo/graphVid3.mp4?updatedAt=1688167576490"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="videoWrapper" >
            <iframe
              width="100%"
              height='600vh'
              src="https://ik.imagekit.io/sfoz4oajo/coinvidorig.mp4?updatedAt=1688170174801"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
          <div className="videoWrapper" >
            <iframe
              width="100%"
              height='600vh'
              src="https://ik.imagekit.io/sfoz4oajo/pyramidvid3.mp4?updatedAt=1688169044490"
              title="YouTube video player"
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>;
          </div>
        </Slider>
      </div>

   </div>
  )
};

export default Workcopy;

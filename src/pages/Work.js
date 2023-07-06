import React from 'react';
import Slider from 'react-slick'
import Nav from '../Components/Nav';
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
import { motion as m } from 'framer-motion';



// const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';


const Work = (props) => {
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
    <div className="workBody" style={{ width: '100%', height: '100%' }}>

      {/* <m.div className="slide-in"
        initial={{ opacity: 0, pointerEvents: 'none' }} exit={{ opacity: 1, animationDuration: '1s' }}

      /> */}


      <div sx={{ position: "relative", width: '100%', height: '100%', pointerEvents: 'none' }}>
        <m.div initial={{ scaleX: 1, animationDelay: '0s', pointerEvents: 'none' }} animate={{ scaleX: 0, transition: { duration: 5 }, animationDelay: '0s' }}
          // exit={{ scaleX: 1, transition: { duration: 0.8 }}} 
          style={{
            originX: 0,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 80,
          }}>
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear .1s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear .3s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear .5s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)', fontSize: '80px', fontFamily: 'Federo', height: '13%' }} animate={{ animation: 'slideOutLeft 1s linear .7s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear .9s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear 1.1s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear 1.3s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear 1.5s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', boxShadow: '0px 0px 5px 4px rgba(3,7,247,0.84)' }} animate={{ animation: 'slideOutLeft 1s linear 1.7s', animationFillMode: 'both' }} />
          <m.div className="motionRows" style={{ backgroundColor: 'turquoise', border: '2px solid turquoise' }} animate={{ animation: 'slideOutLeft 1s linear 1.9s', animationFillMode: 'both' }} />
          <m.div />
        </m.div>
      </div>
      {<Nav color='black' outline='turquoise' bottom={'auto'}/>}

      <div className="placeholder">

      </div>


      <div className='Title' style={{marginTop: '5rem'}}>
        <span style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise', marginBottom: '2%', textAlign: 'center', overflow: 'hidden', opacity: '.8' }}>Work Samples</span>
      </div>

      <div className="videosContainer">

        <Slider {...settings}>
          <div className="videoWrapperresp">
            <iframe
              className='vidPlayerresp'
              src="https://ik.imagekit.io/sfoz4oajo/graph_-_Made_with_Clipchamp.mp4?updatedAt=1688617853932"
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >

            <iframe

              className='vidPlayerresp'

              src="https://ik.imagekit.io/sfoz4oajo/pyramid_-_Made_with_Clipchamp__2_.mp4?updatedAt=1688635406241"
              title="YouTube video player"
              // style={{position: 'relative', minHeight:"98vh", top: '-40px'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >
            <iframe
              className='vidPlayerresp'
              src="https://ik.imagekit.io/sfoz4oajo/coin_-_Made_with_Clipchamp__3_.mp4?updatedAt=1688635998101"
              title="YouTube video player"


              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>;
          </div>
        </Slider>
      </div>
      <div className="footer">

      </div>
    </div>




      )
};

export default Work;

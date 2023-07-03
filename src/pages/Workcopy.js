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
import { motion as m } from  'framer-motion';



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
    <div className="workBody" style={{ width: '100%', height: '100%' }}>
        
   {/* <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               /> */}
      <div sx={{position: "relative", width: '100%', height: '100%'}}>
<m.div initial={{ scaleX: 1,  animationDelay: '3s' }}    animate={{ scaleX: 0, transition: { duration: 3 }, animationDelay: '3s'}}  
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
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear .2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear .4s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear .6s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear .8s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.0s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.4s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.0s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'rgb(1,22,59'}} animate={{animation: 'fadeOutLeftBig 1s linear 1.4s', animationFillMode: 'both' }}/>
      <m.div/>
    </m.div>
    </div>
      {<Nav />}
      
      <div className="placeholder">
        
           </div>
      
      
 <div className='Title'>
        <span style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise', marginBottom: '2%', textAlign: 'center', overflow: 'hidden'}}>Work Samples</span>
      </div>

<div className="videosContainer">
           
          <Slider {...settings}>
          <div className="videoWrapperresp">
            <iframe
             className='vidPlayerresp'
              src="https://ik.imagekit.io/sfoz4oajo/graphvid.mp4?updatedAt=1688225765842"
              title="YouTube video player"
         
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >
         
            <iframe
            
              className='vidPlayerresp'
         
              src="https://ik.imagekit.io/sfoz4oajo/coinvidorig.mp4?updatedAt=1688170174801"
              title="YouTube video player"
              // style={{position: 'relative', minHeight:"98vh", top: '-40px'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >
            <iframe
         className='vidPlayerresp'
              src="https://ik.imagekit.io/sfoz4oajo/pyramidvid3.mp4?updatedAt=1688169044490"
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

export default Workcopy;

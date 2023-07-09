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
    <m.div animate={{animation: 'fadeInDownBig 4s ', animationFillMode:'both'}} className="workBody" style={{ width: '100%', height: '100%'}}>

      {/* <m.div className="slide-in"
        initial={{ opacity: 0, pointerEvents: 'none' }} exit={{ opacity: 1, animationDuration: '1s' }}

      /> */}


   
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
              src="https://clipchamp.com/watch/hlwbWhuhBUH/embed"
              title="Multiple Choice Game Show"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp">
            <iframe
              className='vidPlayerresp'
              src="https://clipchamp.com/watch/dSxFHlA10jU/embed"
              title="Customizable Slider Graphs"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >

            <iframe
              className='vidPlayerresp'
              src="https://clipchamp.com/watch/ZFJYi5R1vwK/embed" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="multiple choice game"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >
     <iframe
  className='vidPlayerresp'
  src="https://clipchamp.com/watch/AL49vjb3xlb/embed" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  title="coins"
  allowFullScreen></iframe>
</div>
<div className="videoWrapperresp" >
     <iframe
  className='vidPlayerresp'
  src="https://clipchamp.com/watch/KODOrHTA6LW/embed" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  title="coins"
  allowFullScreen></iframe>
</div>
        
        </Slider>
      </div>
      <div className="footer">

      </div>
    </m.div>




      )
};

export default Work;

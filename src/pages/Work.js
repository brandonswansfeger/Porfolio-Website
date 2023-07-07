import React from 'react';
import Slider from 'react-slick';
import Nav from '../Components/Nav';
// import ReactPlayer from 'react-player';
// import "../../node_modules/video-react/dist/video-react.css";
// import { Carousel } from '@trendyol-js/react-carousel';
// import pyramid from "../Components/img/pyramid.mp4";
// import graphs from "../Components/img/graphs.gif";
// import coinvid from "../Components/img/coinvid.mp4";
// import { Player } from 'video-react';

// import LeftArrow from '../Components/LeftArrow';
// import RightArrow from '../Components/RightArrow';
import 'animate.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { motion as m } from 'framer-motion';



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
    <div className="workBody" style={{ width: '100%', height: '100%'}}>

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
              src="https://drive.google.com/file/d/1g01GTiDHA9foJXNkrGmBlxn--VhO3ohG/preview"
              title="Multiple Choice Game Show"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp">
            <iframe
              className='vidPlayerresp'
              src="https://drive.google.com/file/d/1XgNKXR01Zodgy0E8ltPQ9oF8cM6ZTKny/preview"
              title="Customizable Slider Graphs"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="videoWrapperresp" >

            <iframe

              className='vidPlayerresp'
              src="https://drive.google.com/file/d/1Cvm5q_GZps1j1OTlbVDdVqyahtVc57Gl/preview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Image Wheel Spinner"
              allowFullScreen></iframe>
          </div>
          <div>
            <img className="pt-5"
                     src="https://play.vidyard.com/6GNseyMPrKXBtLya2aKSqA.jpg"
                data-uuid="6GNseyMPrKXBtLya2aKSqA"
                data-v="4"
                data-type="inline"
                alt="Coin game"
              />
                 </div>
          <div className="pt-0" >
          <img className="pt-5"
          //  style={{width: "100%", margin: "auto", display: "block"}}
   src="https://play.vidyard.com/QHeHrpfK2QkkxRuGFfpR4k.jpg"
  alt="multiple question game"
  data-uuid="QHeHrpfK2QkkxRuGFfpR4k"  data-v="4"  data-type="inline"/>
          
          </div>
        </Slider>
      </div>
      <div className="footer">

      </div>
    </div>




      )
};

export default Work;

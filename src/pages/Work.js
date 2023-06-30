import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import pyramid from "../Components/img/pyramid.mp4";
import graphvid from "../Components/img/graphvid.mp4";
import imacscreen from "../Components/img/imacscreen.png";

// const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';


const Work = (props) => {
  const playerRef = useRef(null);
  return (
  <div className="workBody">
<div>
<p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'60px', marginBottom:'3%', textAlign:'center', backgroundImage:`url(${imacscreen})`}}>Work Examples</p>

</div>

    <div className="videosContainer">

     <div className="videoWrapper"  >
<ReactPlayer className="videoPlayer" ref={playerRef} url={pyramid} controls={true} />

 </div>  
 <div className="videoWrapper"  >
<ReactPlayer className="videoPlayer" ref={playerRef} url={graphvid} controls={true} />
</div>
 
    </div>

 

 

  </div>
  ) 
};

export default Work;

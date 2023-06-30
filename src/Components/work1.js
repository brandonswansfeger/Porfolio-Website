import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import pyramid from "../Components/img/pyramid.mp4";
// import { Link } from "react-router-dom";

const work1 = () => {
    const playerRef = useRef(null);
  return (
    <div className="videoWrapper"  >
<ReactPlayer className="videoPlayer" ref={playerRef} url={pyramid} controls={true} />
</div>
  );
};

export default work1;
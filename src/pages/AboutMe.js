import React from "react";
import aboutmeepic from "../Components/img/aboutmeepic.PNG"

const AboutMe = (props) => {
  return (
    <div className="AboutBody">
    <div style={{display:'flex', flexDirection:'inline', flexWrap:'wrap', alignItems:'self-end', justifyContent:'center', paddingTop:'10%'}}>
   <img src={aboutmeepic} width="300px" height="350px" alt='PIC'/>
   <div className="AboutMeText" style={{width:'300px'}}>
     <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise'}}>About Me</p>
     <p style={{fontFamily:'Open Sans', color:'turquoise', width:'300px', fontSize:'16px'}} width="300px">My name is Brandon Swansfeger and I am a full stack developer experienced primarily in JavaScript, Node JS, React, and Python. In my previous career in the legal field, I thrived with applying new technologies and systems to make work processes more efficient and productive. I decided to focus on this passion by learning programming and seek a position where I can do more than just apply new technologies developed by others but also  contribute to and build new technologies for others to use.</p>

</div>
   </div>
  </div>
  );
  }
export default AboutMe;
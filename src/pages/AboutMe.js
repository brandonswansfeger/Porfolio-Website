import React from "react";
import aboutmeepic from "../Components/img/aboutmeepic.PNG"
import Nav from "../Components/Nav";
import { motion as m } from "framer-motion";

const AboutMe = (props) => {
  return (

   
    <m.div className="AboutBody justify-content-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(#000428, #004E92)', minHeight: '100vh', backgroundAttachment: 'fixed' }} >
      <m.div style={{top: 0, position: "absolute"}} animate={{animation: 'fadeInLeftBig .5s linear'}} >
    {<Nav color={'transparent'} outline={'turquoise'} />}

      </m.div>

    <div className="justify-content-center lowerBody" style={{minWidth: '350px', height: 'auto', display: 'flex',marginTop: '8rem', maxWidth: '900px', flexDirection: 'row', flexWrap: 'wrap',  }} initial={{ opacity: 0 }} animate={{ animation: 'fadeInRightBig 2s ease', animationFillMode: 'before', opacity: 1 }}>
      <m.p animate={{animation: 'fadeInDownBig'}} style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise', marginBottom: '1%',  textAlign: 'center', width: '100%' }}>About Me</m.p>  
    
   
<div className="col-6">
  <m.img src={aboutmeepic} width="100%" height="auto" alt='PIC' animate={{animation: 'fadeInLeftBig .7s' }} />
</div>
<div className="AboutMeText p-2" style={{ height: 'auto', maxHeight: '350px', minWidth: '300px', width: '45%', maxWidth: '400px', marginTop: '2rem', marginBottom: 'auto', }}>

<m.p animate={{animation: 'fadeInRightBig .7s' }} style={{ fontFamily: 'Open Sans', color: 'turquoise', fontSize: 'min(18px, 4vw)' }} width="300px">My name is Brandon Swansfeger and I am a full stack developer experienced primarily in JavaScript, Node JS, React, and Python. In my previous career in the legal field, I thrived with applying new technologies and systems to make work processes more efficient and productive. I decided to focus on this passion by learning programming and seek a position where I can do more than just apply new technologies developed by others but also  contribute to and build new technologies for others to use.</m.p>
</div>

     
  </div>
</m.div >
 
 
    


  );
}
export default AboutMe;
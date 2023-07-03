import React from "react";
import aboutmeepic from "../Components/img/aboutmeepic.PNG"
import Nav from "../Components/Nav";
import { motion as m } from "framer-motion";

const AboutMe = (props) => {
  return (


    <m.div className="AboutBody" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', overflow:"hidden" }}>
              {<Nav />}

        <div className="placeholder w-100">
            
        </div>
        <p style={{ fontFamily: 'Federo', fontSize: '50px', color: 'turquoise' }}>About Me</p>
      <div className="justify-content-center mr-auto ml-auto" style={{ width: "100%", minWidth: '350px', height: '100vh', overflow:'auto', marginTop: '3%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '3%'  }}>

        <div style={{ height: 'auto', minWidth: '300px', width: '50%', maxWidth: '400px', marginTop: 'auto', marginBottom: 'auto', backgroundColor: 'rgb(1, 22, 59)' }}>

          <img src={aboutmeepic} width="100%" height="auto" alt='PIC' />
        </div>
        <div className="AboutMeText" style={{ height: 'auto', maxHeight: '400px', minWidth: '300px', width: '45%', maxWidth: '400px', marginTop: 'auto', marginBottom: 'auto', backgroundColor: 'rgb(1, 22, 59)'  }}>
      
          <p style={{ fontFamily: 'Open Sans', color: 'turquoise', fontSize: '18px'}} width="300px">My name is Brandon Swansfeger and I am a full stack developer experienced primarily in JavaScript, Node JS, React, and Python. In my previous career in the legal field, I thrived with applying new technologies and systems to make work processes more efficient and productive. I decided to focus on this passion by learning programming and seek a position where I can do more than just apply new technologies developed by others but also  contribute to and build new technologies for others to use.</p>

        </div>
  
 
      </div>
  
    </m.div>


  );
}
export default AboutMe;
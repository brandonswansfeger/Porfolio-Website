import React from "react";
import aboutmeepic from "../Components/img/aboutmeepic.PNG"
import Nav from "../Components/Nav";
import { motion as m } from "framer-motion";

const AboutMe = (props) => {
  return (


        <div className="AboutBody" height={window.innerHeight} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                 {/* <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               /> */}
 <div sx={{position: "relative", width: '100%', height: '100%', pointerEvents: 'none'}}>
<m.div initial={{ scaleX: 1,  animationDelay: '1s', pointerEvents: 'none' }}  
  // animate={{ scaleX: 0, transition: { duration: 4 }, animationDelay: '2s'}} 
// exit={{scaleX: 1, transition: { duration: 10 }, animationDelay: '2s' }}  
 
style={{
        originX: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 80,
        pointerEvents: 'none',
      }}>
      <m.div className="motionRows" style={{backgroundColor: 'black', border: '1px solid turquoise'}} animate={{animation: 'animateTest 1s linear .1s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}}  animate={{animation: 'animateTest 1s linear .3s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}}  animate={{animation: 'animateTest 1s linear .5s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows"  style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear .7s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows"style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear .9s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear 1.1s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear 1.3s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}}  animate={{animation: 'animateTest 1s linear 1.5s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear 1.7s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid turquoise'}} animate={{animation: 'animateTest 1s linear 1.9s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div/>
    </m.div>
    </div>
              {<Nav color={'transparent'} outline={'turquoise'}/>}

        <div className="placeholder w-100">

        </div>
        <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'6rem', marginBottom:'1%', textAlign:'center'}}>About Me</p>

      <div className="justify-content-center mr-auto ml-auto" style={{ width: "100%", minWidth: '350px', height: '100%', overflow:'auto', marginTop: '3%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '3%'  }}>

        <div style={{ height: 'auto', minWidth: '300px', width: '50%', maxWidth: '400px', marginTop: '2rem', marginBottom: 'auto', backgroundColor: 'rgb(1, 22, 59)' }}>

          <img src={aboutmeepic} width="100%" height="auto" alt='PIC' />
        </div>
        <div className="AboutMeText p-2" style={{ height: 'auto', maxHeight: '350px', minWidth: '300px', width: '45%', maxWidth: '400px', marginTop: '2rem', marginBottom: 'auto', backgroundColor: 'rgb(1, 22, 59)'  }}>
      
          <p style={{ fontFamily: 'Open Sans', color: 'turquoise', fontSize: '18px'}} width="300px">My name is Brandon Swansfeger and I am a full stack developer experienced primarily in JavaScript, Node JS, React, and Python. In my previous career in the legal field, I thrived with applying new technologies and systems to make work processes more efficient and productive. I decided to focus on this passion by learning programming and seek a position where I can do more than just apply new technologies developed by others but also  contribute to and build new technologies for others to use.</p>

        </div>
  
 
      </div>
  
    </div>

    


  );
}
export default AboutMe;
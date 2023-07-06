import React from "react";
import Nav from "../Components/Nav";
import { motion as m } from  'framer-motion';
    
   



const Skills = (props) => {
  return (
  <m.div className="SkillsBody pb-5">
    {/* <m.div className="slide-in"
                initial={{ opacity: 0, pointerEvents: 'none'}} exit={{opacity:1, animationDuration: '1s'}}
                
                /> */}
 <div sx={{position: "relative", width: '100%', height: '100%', pointerEvents: 'none'}}>
<m.div initial={{ scaleX: 1,  animationDelay: '0s', pointerEvents: 'none'}}    animate={{ scaleX: 0, transition: { duration: 3 }, animationDelay: '0s'}}  
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
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear .1s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear .3s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear .5s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', fontSize: '80px', fontFamily:'Federo', height: '13%'}} animate={{animation: 'slideOutLeft 1s linear .7s', animationFillMode: 'both' }} />
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear .9s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear 1.1s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear 1.3s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear 1.5s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid blue'}}  animate={{animation: 'slideOutLeft 1s linear 1.7s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" style={{backgroundColor: 'turquoise', border: '2px solid turquoise'}}  animate={{animation: 'slideOutLeft 1s linear 1.9s', animationFillMode: 'both' }}/>
      <m.div/>
    </m.div>
    </div>
       {<Nav />}
      {/* <div> */}
        <div className="placeholder">
           
        </div>
        <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'60px', marginBottom:'3%', textAlign:'center'}}>Technical Skills</p>
<div className="SkillsIcons">
  <i class="devicon-javascript-plain" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-html5-plain-wordmark"style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-css3-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-react-original-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-nodejs-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-express-original-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-postgresql-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-mongodb-plain-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-pandas-original-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-python-plain-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-django-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-ubuntu-plain-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-bootstrap-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-github-original-wordmark" style={{color:'white', fontSize:'70px'}}></i>
  <i class="devicon-heroku-line-wordmark" style={{color:"turquoise", fontSize:'70px'}}></i>
  <i class="devicon-jquery-plain-wordmark" style={{color:'white', fontSize:'70px'}}></i>
 
   </div>
  </m.div>
  ) 
};

export default Skills;

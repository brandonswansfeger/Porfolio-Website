import React from "react";
import Nav from "../Components/Nav";
import { motion as m } from  'framer-motion';
    
   



const Skills = (props) => {
  return (
  <m.div className="SkillsBody pb-5">
         <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               />
   <div sx={{position: "relative", width: '100%', height: '100%'}}>
<m.div initial={{ scaleX: 1 }}    animate={{ scaleX: 0, transition: { duration: 0.4 }}}  
  // exit={{ scaleX: 1, transition: { duration: 0.8 }}} 
style={{
        originX: 0,
        backgroundColor: 'rgb(1,22,59)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 2,
      }}/>
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

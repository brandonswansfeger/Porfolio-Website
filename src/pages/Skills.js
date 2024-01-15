import React from "react";
import Nav from "../Components/Nav";
import { motion as m } from  'framer-motion';
    
   



const Skills = (props) => {
  return (
  <m.div  className="SkillsBody pb-5" style={{background: 'linear-gradient(#000428, #004E92)'}}>
    {/* <m.div className="slide-in"
                initial={{ opacity: 0, pointerEvents: 'none'}} exit={{opacity:1, animationDuration: '1s'}}
                
                /> */}

       {<Nav  outline={'turquoise'} bottom={'auto'}/>}
      {/* <div> */}
        <div className="placeholder">
            <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginBottom:'3%', textAlign:'center'}}>Technical Skills</p>
        </div>
       
<div className="SkillsIcons">
  <m.i  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s', animationFillMode: 'bpth', opacity: 1}} class="devicon-javascript-plain icon" style={{color:"turquoise", fontSize:'70px'}}> <span className="popup">JavaScript</span></m.i>
 
  <m.i  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .2s', animationFillMode: 'both', opacity: 1}} class="devicon-html5-plain-wordmark"style={{color:'white', fontSize:'70px'}}></m.i>
  <m.i class="devicon-css3-plain-wordmark"  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.1s'}}  style={{color:"turquoise", fontSize:'70px'}}></m.i>
  <m.i class="devicon-react-original-wordmark" style={{color:'white', fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.2s'}} ></m.i>
  <m.i class="devicon-nodejs-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.3s'}}></m.i>
  <m.i class="devicon-express-original-wordmark" style={{color:'white', fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.4s'}}></m.i>
  <m.i class="devicon-postgresql-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.5s'}}></m.i>
  <m.i class="devicon-mongodb-plain-wordmark" style={{color:'white', fontSize:'70px'}} initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.6s'}} ></m.i>
  <m.i class="devicon-pandas-original-wordmark" style={{color:"turquoise", fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.7s'}}></m.i>
  <m.i class="devicon-python-plain-wordmark" style={{color:'white', fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.8s'}} ></m.i>
  <m.i class="devicon-django-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '.9s'}}></m.i>
  <m.i class="devicon-ubuntu-plain-wordmark" style={{color:'white', fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '1.0s'}} ></m.i>
  <m.i class="devicon-bootstrap-plain-wordmark" style={{color:"turquoise", fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '1.1s'}}></m.i>
  <m.i class="devicon-github-original-wordmark" style={{color:'white', fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '1.2s'}}></m.i>
  <m.i class="devicon-heroku-line-wordmark" style={{color:"turquoise", fontSize:'70px'}}   initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '1.3s'}}></m.i>
  <m.i class="devicon-jquery-plain-wordmark" style={{color:'white', fontSize:'70px'}}  initial={{opacity: 0}} animate={{animation:'fadeInBottomLeft .7s .4s', animationFillMode: 'both', opacity: 1, animationDelay: '1.4s'}}></m.i>
 
   </div>
  </m.div>
  ) 
};

export default Skills;

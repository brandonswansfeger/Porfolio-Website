import React from "react";
import Nav from "../Components/Nav";
// import { motion as m } from  'framer-motion';
    
   



const Skills = (props) => {
  return (
  <div className="SkillsBody pb-5" style={{backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize:'cover'}}>
    {/* <m.div className="slide-in"
                initial={{ opacity: 0, pointerEvents: 'none'}} exit={{opacity:1, animationDuration: '1s'}}
                
                /> */}

       {<Nav  outline={'turquoise'} bottom={'auto'}/>}
      {/* <div> */}
        <div className="placeholder">
            <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginBottom:'3%', textAlign:'center'}}>Technical Skills</p>
        </div>
       
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
  </div>
  ) 
};

export default Skills;

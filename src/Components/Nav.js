import React from "react";
// import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="NavWrapper" style={{position:'fixed', top: '0px', right: '0px'}}>

 {/* <div className="NavBar" style={{height:'40px', justifyContent:'flex-end', flexWrap:'nowrap', alignSelf: 'flex-start'}}> */}
    <a href="/" className="ButtonBorder navButton">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Home</span>
    </a> 
    <a href="/Aboutme/" className="ButtonBorder navButton">
      <span style={{ backgroundColor:'transparent', color:'turquoise'}}>About</span>
    </a>
    <a href="/Workcopy/"className="ButtonBorder navButton">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Work</span>
    </a>
    <a href="/Projects/" className="ButtonBorder navButton">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Projects</span>
    </a>
    <a href="/Skills/"className="ButtonBorder navButton">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Skills</span>
    </a>
    <a href="/Contact/" className="ButtonBorder navButton">
    <span  style={{ backgroundColor:'transparent', color:'turquoise'}}>Contact</span>
    </a>

    </div>
   
// </div>
  );
};

export default Nav;
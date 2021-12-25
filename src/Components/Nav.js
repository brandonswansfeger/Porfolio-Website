import React from "react";
// import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="NavBar" style={{height:'40px', justifyContent:'flex-end', flexWrap:'nowrap'}}>
    <a href="/" className="ButtonBorder">
    <p style={{ backgroundColor:'transparent', color:'turquoise'}}>Home</p>
    </a> 
    <a href="/Aboutme/" className="ButtonBorder">
      <p style={{ backgroundColor:'transparent', color:'turquoise'}}>About</p>
    </a>
    <a href="/Projects/" className="ButtonBorder">
    <p style={{ backgroundColor:'transparent', color:'turquoise'}}>Projects</p>
    </a>
    <a href="/Skills/"className="ButtonBorder">
    <p style={{ backgroundColor:'transparent', color:'turquoise'}}>Skills</p>
    </a>
    <a href="/Contact/" className="ButtonBorder">
    <p  style={{ backgroundColor:'transparent', color:'turquoise'}}>Contact</p>
    </a>
</div>
  );
};

export default Nav;
import React from "react";
import { NavLink } from 'react-router-dom'
// import { Link } from "react-router-dom";
// import { NavBar } from 'react-bootstrap';


const Nav = (props) => {
  return (
    <div className="NavWrapper header" style={{position:'fixed', top: '0px', right: '0px', pointerEvents: 'auto'}}>

 {/* <div className="NavBar" style={{height:'40px', justifyContent:'flex-end', flexWrap:'nowrap', alignSelf: 'flex-start'}}> */}
     <NavLink to="/" className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Home</span>
    </NavLink> 

    
   
    <NavLink to="/Aboutme/" className="ButtonBorder navButton" activeClassName="is-active">
      <span style={{ backgroundColor:'transparent', color:'turquoise'}}>About</span>
    </NavLink>
    <NavLink to="/Workcopy/"className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Work</span>
    </NavLink>
    <NavLink to="/Projects/" className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Projects</span>
    </NavLink>
    <NavLink to="/Skills/"className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:'turquoise'}}>Skills</span>
    </NavLink>
    <NavLink to="/Contact/" className="ButtonBorder navButton" activeClassName="is-active">
    <span  style={{ backgroundColor:'transparent', color:'turquoise'}}>Contact</span>
    </NavLink>

    
    </div>
  );
};

export default Nav;
import React from "react";
import { NavLink } from 'react-router-dom'
// import { Link } from "react-router-dom";
// import { NavBar } from 'react-bootstrap';


const Nav = (props) => {
  return (
    <div className="NavWrapper header" style={{top: '0%', right: '0px', pointerEvents: 'auto', backgroundColor:props.color, color:props.outline, marginBottom:props.bottom}}>

 {/* <div className="NavBar" style={{height:'40px', justifyContent:'flex-end', flexWrap:'nowrap', alignSelf: 'flex-start'}}> */}
     <NavLink to="/" className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:props.outline}}>Home</span>
    </NavLink> 

    
   
    <NavLink to="/Aboutme/" className="ButtonBorder navButton" activeClassName="is-active">
      <span style={{ backgroundColor:'transparent',color:props.outline}}>About</span>
    </NavLink>
    <NavLink to="/Work/"className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:props.outline}}>Work</span>
    </NavLink>
    <NavLink to="/Projects/" className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:props.outline}}>Projects</span>
    </NavLink>
    <NavLink to="/Skills/"className="ButtonBorder navButton" activeClassName="is-active">
    <span style={{ backgroundColor:'transparent', color:props.outline}}>Skills</span>
    </NavLink>
    <NavLink to="/Contact/" className="ButtonBorder navButton" activeClassName="is-active">
    <span  style={{ backgroundColor:'transparent', color:props.outline}}>Contact</span>
    </NavLink>

    
    </div>
  );
};

export default Nav;
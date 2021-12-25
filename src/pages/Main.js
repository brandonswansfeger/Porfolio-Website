import React from "react";


export default function Main () {
return (
    <div classname="MainPageBody" style={{backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize:'100% 100%', width:'100%', height:'600px'}}> 
    <div className="Container">
        <h1>
            <span style={{ textAlign:'center', color:'turquoise', textTransform:'capitalize', fontFamily:'Federo', fontSize:'7vw'}} >
            brandon swansfeger</span>
        </h1>

        <h2 className="anim-typewriter Display-1" style={{fontFamily:'Open Sans', color:'white', fontSize:'4.5vw'}}>Software Developer | Full-Stack</h2>
</div>
<div className="NavBar" style={{marginTop:'50px'}}>
    <a href="/Aboutme/" className="ButtonBorder">
    <p style={{ backgroundColor:'transparent', color:'turquoise'}}>About Me</p>
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
</div>
)
}
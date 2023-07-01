import React from "react";
// import Nav from "../Components/Nav";


export default function Main() {
    return (
        <div style={{ backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize: '100% 100%', width: '100%', height: '100vh' }} className="d-flex flex-column justify-content-center">
   {/* {<Nav />} */}
      {/* <div> */}
      <div className="placeholder">
           
           </div>
           <div className="mt-auto mb-auto">
 <h1>
                <div style={{ textAlign: 'center', color: 'turquoise', textTransform: 'capitalize', fontFamily: 'Federo', fontSize: '7vw', position: 'relative' }} >
                    brandon swansfeger</div>
            </h1>

            <h2 className="anim-typewriter Display-1" style={{ fontFamily: 'Open Sans', color: 'white', fontSize: '4.5vw' }}>Software Developer | Full-Stack</h2>

           
           
            <div className="NavBar2 d-flex flex-wrap justify-content-center" style={{ marginBottom: '20vh', width: '100%', maxWidth: '1000px', marginRight: 'auto', marginLeft: 'auto', height: '50px', marginTop: '20px'}}>
                <a href="/Aboutme/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise', }}>About</p>
                </a>
                <a href="/Workcopy/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Work</p>
                </a>
                <a href="/Projects/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Projects</p>
                </a>
                <a href="/Skills/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Skills</p>
                </a>
                <a href="/Contact/" className="ButtonBorder2 style={{ minWidth: '150px' }}">
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Contact</p>
                </a>
               </div> 
               </div>
        </div>
    )
}

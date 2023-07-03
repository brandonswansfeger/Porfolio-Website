import React from "react";
// import Nav from "../Components/Nav";
import { motion as m } from  'framer-motion';
import { NavLink } from "react-router-dom";
import Nav from "../Components/Nav";



export default function Main() {
    return (
        <div style={{ backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize: 'cover', width: '100%', height: '100vh' }} className="d-flex flex-column justify-content-center">
           
           <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               />             
      <div sx={{position: "relative", width: '100%', height: '100%'}}>
<m.div initial={{ scaleX: 1 }}    animate={{ scaleX: 0, transition: { duration: 0.4 }}}  
  // exit={{ scaleX: 1, transition: { duration: 0.8 }}} 
style={{
        originX: 0,
        backgroundColor: 'turquoise',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 80,
      }}/>
    </div>
{/* <m.div className="slide-out" style={{backgroundColor: 'turquoise'}}
 initial={{ scaleY: 1}} exit={{scaleY: 0}}
 animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
/> */}
   {<Nav />}
      <div className="placeholder">
           
           </div>
           <div className="mt-auto mb-auto">
 <h1>
                <div style={{ textAlign: 'center', color: 'turquoise', textTransform: 'capitalize', fontFamily: 'Federo', fontSize: 'min(11vw, 97px)', position: 'relative' }} >
                    brandon swansfeger</div>
            </h1>

            <h2 className="anim-typewriter Display-1" style={{ fontFamily: 'Open Sans', color: 'white', fontSize: '4.5vw' }}>Software Developer | Full-Stack</h2>

           
           
            <div className="NavBar2 d-flex flex-wrap justify-content-center" style={{ marginBottom: '20vh', width: '100%', maxWidth: '1000px', marginRight: 'auto', marginLeft: 'auto', height: '50px', marginTop: '20px'}}>
                <NavLink to="/Aboutme/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise', }}>About</p>
                </NavLink>
                <NavLink to="/Workcopy/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Work</p>
                </NavLink>
                <NavLink to="/Projects/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Projects</p>
                </NavLink>
                <NavLink to="/Skills/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Skills</p>
                </NavLink>
                <NavLink to="/Contact/" className="ButtonBorder2 style={{ minWidth: '150px' }}">
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise' }}>Contact</p>
                </NavLink>
               </div> 
               </div>
        </div>
    )
}

import React from "react";
// import Nav from "../Components/Nav";
import { motion as m } from  'framer-motion';
import { NavLink } from "react-router-dom";
import Nav from "../Components/Nav";



export default function Main() {
    return (
        <div style={{ backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize: 'cover', width: '100%', height: '100vh' }} className="d-flex flex-column justify-content-center">
           
           {/* <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               />              */}
      {/* <div sx={{position: "relative", width: '100%', height: '100%'}}> */}
{/* <m.div initial={{ scaleX: 1,  animationDelay: '10s' }}    animate={{ scaleX: 0, transition: { duration: 10 }, animationDelay: '3s'}}  
  // exit={{ scaleX: 1, transition: { duration: 0.8 }}} 
style={{
        originX: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 80,
      }}>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear .2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear .4s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear .6s', animationFillMode: 'both'}}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear .8s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.0s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.4s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.0s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.2s', animationFillMode: 'both' }}/>
      <m.div className="motionRows" animate={{animation: 'fadeOutLeftBig 1s linear 1.4s', animationFillMode: 'both' }}/>
      <m.div/>
    </m.div>
    </div> */}
   {<Nav  outline={'turquoise'} />}
      <div className="placeholder">
           
           </div>
           <div className="mt-auto mb-auto pl-1 pr-1" exit={{animation: 'fadeOutRightBig 2s ease'}}>
 <h1>
                <m.div style={{ textAlign: 'center', color: 'turquoise', textTransform: 'capitalize', fontFamily: 'Federo', fontSize: 'min(11vw, 97px)', position: 'relative' }} exit={{animation: 'fadeOutBigLeft 5s ease'}} >
                    brandon swansfeger</m.div>
            </h1>

            <m.h2 className="anim-typewriter Display-1" style={{ fontFamily: 'Open Sans', color: 'white', fontSize: '4.5vw' }} exit={{animation: 'fadeOutBigRight 1s ease'}}>Software Developer | Full-Stack</m.h2>

           
           
            <m.div className="NavBar2 d-flex flex-wrap justify-content-center" style={{ marginBottom: '20vh', width: '100%', maxWidth: '1000px', marginRight: 'auto', marginLeft: 'auto', height: '50px', marginTop: '20px'}} exit={{animation: 'fadeOutBigLeft 1s ease .3s'}}>
                <NavLink to="/Aboutme/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise', margin: 'auto' }}>About</p>
                </NavLink>
                <NavLink to="/Work/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise',  margin: 'auto'  }}>Work</p>
                </NavLink>
                <NavLink to="/Projects/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise',  margin: 'auto'  }}>Projects</p>
                </NavLink>
                <NavLink to="/Skills/" className="ButtonBorder2" style={{ minWidth: '150px' }}>
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise',  margin: 'auto'  }}>Skills</p>
                </NavLink>
                <NavLink to="/Contact/" className="ButtonBorder2 style={{ minWidth: '150px' }}">
                    <p style={{ backgroundColor: 'transparent', color: 'turquoise',  margin: 'auto'  }}>Contact</p>
                </NavLink>
               </m.div> 
               </div>
        </div>
    )
}

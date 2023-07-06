import "../styles.css";
import React from "react";
import 'animate.css';

//Import route and our components
import { Route } from "react-router-dom";
import Projects from "../pages/Projects";
import Main from "../pages/Main";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import Workcopy from "../pages/Workcopy";
import Contact from "../pages/Contact";
import { Routes } from "react-router";
import { AnimatePresence  } from "framer-motion";
import { useLocation } from "react-router/dist";
// import Projects2 from "../pages/Projects2";
// import { Switch } from 'react-router-dom':

// import Nav from "../Components/Nav";
// import Projectscopy from "../pages/Projectscopy";
// import { useState, useEffect } from 'react';
// import LoadingScreen from '../loading'


function AnimatedRoutes() {
const location = useLocation();
  
return (
    <AnimatePresence exitBeforeEnter>
<Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<Main/>} />
    <Route path="/aboutme" element={<AboutMe/>} />
    <Route path="/workcopy" element={<Workcopy/>} />
   <Route path="/projects" element={<Projects/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/Contact" element={<Contact/>} />
 </Routes>

    </AnimatePresence>
  

  
  );
}

export default AnimatedRoutes;


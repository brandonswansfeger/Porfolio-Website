import "./styles.css";
import React from "react";
import 'animate.css';

//Import route and our components
import { Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Workcopy from "./pages/Workcopy";
import Contact from "./pages/Contact";
import { Routes } from "react-router";
import Nav from "./Components/Nav";
// import Projectscopy from "./pages/Projectscopy";
// import { useState, useEffect } from 'react';
// import LoadingScreen from './loading'


function App() {

  
return (
  // {loading ? (
<div className="App">
  <div className="MainBody d-flex flex-column justify-content-start h-100 w-100">
  <Nav />
  <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route path="/aboutme" element={<AboutMe/>} />
    <Route path="/workcopy" element={<Workcopy/>} />
    <Route path="/projects" element={<Projects/>} />
    {/* <Route path="/workcopy" element={<Work/>} /> */}
    <Route path="/skills" element={<Skills/>} />
    <Route path="/Contact" element={<Contact/>} />
 </Routes>

  </div>

   </div>
  
  );
}

export default App;


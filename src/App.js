import "./styles.css";
import React from "react";
//Import route and our components
import { Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes } from "react-router";
import Nav from "./Components/Nav";
// import { useState, useEffect } from 'react';
// import LoadingScreen from './loading'


function App() {
  // const [lyricsItem, etLyricsItem] = useState(null);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 6000)
  // }, [])
return (
  // {loading ? (
<div className="App">
  <Nav />
  <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route path="/aboutme" element={<AboutMe/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/Contact" element={<Contact/>} />
 </Routes>
   </div>
  
  );
}

export default App;


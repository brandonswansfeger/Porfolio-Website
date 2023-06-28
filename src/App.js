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


function App() {

  
return (
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


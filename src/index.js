import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./pages/Projects";
import reportWebVitals from "./reportWebVitals";
import { Carousel } from '@trendyol-js/react-carousel';
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Carousel>
		<Projects />

	</Carousel>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

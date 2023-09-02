import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
//import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);

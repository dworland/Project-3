import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>Bites ATX</h1>
    <Link to="/SignIn">
    	<button type="button" class="btn">Get Started</button>
    </Link>
  </div>
);

export default Jumbotron;

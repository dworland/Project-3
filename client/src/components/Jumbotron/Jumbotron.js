import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1 className="jumbo-header">Bites ATX</h1>
    <Link to="/Search">
    	<button type="button" className="jumbo-btn btn">Get Started</button>
    </Link>
  </div>
);

export default Jumbotron;

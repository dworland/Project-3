import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./button.css";

const Button = () => (
<div className="getStarted">
	<Link to="/SignIn">
  	<button type="button" class="btn">Get Started!</button>
  </Link>
</div>
);

export default Button;

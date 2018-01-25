import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = () => (
<div className="getStarted">
	<Link to="/Search">
  	<button type="button" class="btn get-started-btn">Get Started!</button>
  </Link>
</div>
);

export default Button;

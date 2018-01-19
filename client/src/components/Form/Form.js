import React from "react";
import "./Form.css";

const Form = () => (
	<form>
    <h2 className="page-header">Sign In</h2>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control"
         name="name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control"
         name="email" />
    </div>
    <div>
      <p className="sign-up">Don't have an account? <a href="">Sign Up</a></p>
    </div>
    <div className="submit-button">
      <button type="submit" className="btn btn-basic btn-sign-in">Sign In</button>
    </div>
  </form>
);

export default Form;
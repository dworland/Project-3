import React from "react";
import "./SignUpForm.css";

const Form = () => (
	<form>
    <h2 className="page-header">Sign Up</h2>
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
    <div className="create-account-button">
      <button type="submit" className="btn btn-basic btn-sign-up">Create Account</button>
    </div>
  </form>
);

export default Form;
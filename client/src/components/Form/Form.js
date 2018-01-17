import React from "react";
import "./Form.css";

const Form = () => (
	<form>
    <h2>Sign up</h2>
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
    <button type="submit" className="btn btn-basic">
        Sign up
    </button>
  </form>
);

export default Form;
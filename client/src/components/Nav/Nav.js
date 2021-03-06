import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="my-nav navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">Bites ATX</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><a href="/Reservations">My Reservations</a></li>
          <li><a href="/Search">Search</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/SignIn">Sign In</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;

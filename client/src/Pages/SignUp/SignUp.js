import React, { Component } from "react";
import Nav from "../../components/Nav";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className="main-background">
          <div className="box">
            <div className="container sign-in-container">
              <div className="row">
                <div className="utensils"></div>
              </div>
              <div className="row">
                <div className="sign-in-form col-sm-6 col-sm-offset-3">
                    <SignUpForm />
                </div>
              </div>
            </div>
          </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
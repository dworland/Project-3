import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Body from "../../components/HowItWorks";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="background">
          <div className="home-margin">
          <div className="container home-container">
            <div className="row">
                <Body />
            </div>
            <div className="row">
                <Button />
            </div>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
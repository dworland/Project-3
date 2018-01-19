import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Body from "../../components/HowItWorks";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <div className="background">
          <div className="home-margin">
          <div class="container home-container">
            <Row>
                <Body />
            </Row>
            <Row>
                <Button />
            </Row>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
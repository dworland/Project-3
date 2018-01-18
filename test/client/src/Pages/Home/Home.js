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
          <Container>
            <Row>
              <Col size="xs-12 sm-12 md-12">
                <Body />
              </Col>
            </Row>
            <Row>
              <Col size="xs-12 sm-12 md-12">
                <Button />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
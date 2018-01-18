import React, { Component } from "react";
import Nav from "../../components/Nav";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className="main-background">
          <div className="box">
            <Container className="container">
              <Row>
                <Col size="sm-12 md-12">
                  <div className="utensils"></div>
                </Col>
              </Row>
              <Row>
                <div className="form">
                  <Col size="sm-8 md-8">
                    <Form />
                  </Col>
                </div>
              </Row>
            </Container>
          </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
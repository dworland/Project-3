import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./Reservations.css";

class Reservations extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="background">
          <div className="margin">
            <Container className="container">
              <div>
                <Row>
                  <Col size="xs-12 sm-12 md-12">
                    <h3 className="page-title">Reservations</h3>
                    <hr />
                  </Col>
                </Row>
              </div>
              <div class="table">
                <Table />
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Reservations;
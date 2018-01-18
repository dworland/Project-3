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
            <div className="container table-container">
              <Row>
                <h3 className="page-title">Reservations</h3>
                <hr />
              </Row>
              <Row>
                <div class="table">
                  <Table />
                </div>
              </Row>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Reservations;
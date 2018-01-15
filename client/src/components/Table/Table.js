import React, { Component } from "react";
import Reservation from "../../components/Reservation";
import { Container, Row, Col } from "../../components/Grid";
import { Link, Route } from "react-router-dom";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <div className="res-list">
      <div className="date-section">
        <Row>
          <Col size="sm-12 md-12">
            <p className="date">Date</p>
          </Col>
        </Row>
      </div>
      <div className="list-item">
        <Row>
          <Col size="sm-1 md-1">
            <div className="ticket"></div>
          </Col>
          <Col size="sm-11 md-11">
            <div className="restaurant-name">
              <Link to={"../Reservation"} className="" data-toggle="modal" data-target="#myModal">
                Restaurant Name
              </Link>
              <Route exact path="/Reservations/View" component={Reservation} />
            </div>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default Table;

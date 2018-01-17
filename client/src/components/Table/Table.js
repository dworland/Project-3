import React, { Component } from "react";
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
          <Col size="sm-3 md-3">
            <div id="restaraunt-name" className="restaurant-name">
              Restaurant Name
            </div>
          </Col>
          <Col size="sm-3 md-3">
            <div id="time" className="time">
              Time
            </div>
          </Col>
          <Col size="sm-2 md-2">
            <div id="seats" className="seats">
              Number of Seats
            </div>
          </Col>
          <Col size="sm-1 md-1">
            <div className="buttons">
              <button type="button" class="btn edit-delete">Edit</button>
              <button type="button" class="btn edit-delete">Delete</button>
            </div>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default Table;

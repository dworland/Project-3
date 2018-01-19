import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Link, Route } from "react-router-dom";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <div className="res-list">
        <div className="date-section">
          <div class="row">
            <Col size="sm-12 md-12">
              <p className="date">Date</p>
            </Col>
          </div>
        </div>
        <div className="list-item">
          <div class="row">
            <Col size="sm-1">
              <div className="ticket"></div>
            </Col>
            <Col size="sm-3">
              <div id="restaraunt-name" className="restaurant-name">
                Restaurant Name
              </div>
            </Col>
            <Col size="sm-2">
              <div id="time" className="time">
                Time
              </div>
            </Col>
            <Col size="sm-2">
              <div id="seats" className="seats">
                Number of Seats
              </div>
            </Col>
            <Col size="sm-1 sm-offset-3">
                <div className="edit"></div>
                <div className="delete"></div>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import "./Res.css";

class Reservation extends Component {
  render() {
    return (
      <div>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog modal-lg">
          
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div className="utensils"></div>
              </div>
              <div class="modal-body">
                <Row>
                  <Col size="sm-12 md-12">
                    <p class="name">Name</p>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-12 md-12">
                    <p class="restaurant">Restaurant</p>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-12 md-12">
                    <p class="time">Time</p>
                  </Col>
                </Row>
                <Row>
                  <Col size="sm-12 md-12">
                    <p class="seats">Seats</p>
                  </Col>
                </Row>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
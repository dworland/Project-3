import React, { Component } from "react";
import Nav from "../../components/Nav";
import Cuisines from "../../components/Cuisines";
import MapContainer from "../../components/MapContainer";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Row>
          <Col size="sm-12 md-12">
            <Cuisines />
          </Col>
        </Row>
        <Row>
          <Col size="sm-3 md-3">
            <div className="list"><p>List Here</p></div>
          </Col>
          <Col size="sm-9 md-9">
            <div id="map" className="mapdiv"></div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Search;
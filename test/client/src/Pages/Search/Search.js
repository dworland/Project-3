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
        <div className="cuisine-section">
          <div className="margin">
            <Container className="container">
              <Row>
                <Cuisines />
              </Row>

              <div>
                <p>here's my map vvvvvvvv</p>
                <MapContainer />
              </div>
            </Container>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Search;
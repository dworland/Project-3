import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import "./Map.css";

class MapContainer extends React.Component {
  componentDidMount() {
    // let map = new window.google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -33.8688, lng: 151.2195},
    //   zoom: 13,
    //   mapTypeId: 'roadmap',
    // });
  }

  render() {
    return (
      <div style={{ width: '100px' }}> 
        <GoogleMap google={this.props.google} zoom={14} initialCenter={{ lat: 30.307182, lng: -97.755996 }} />
      </div>
    ); 
  } 
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDzfNVK1x0bdcILJpLDLtgxz78sBTO5a2A',
})(MapContainer);


import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import "./Map.css";

export default class MapContainer extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='map' />
      </div>
    ); 
  } 
};


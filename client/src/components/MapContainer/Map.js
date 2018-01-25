import React from "react";
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';
import "./Map.css";

class MapContainer extends React.Component {

  render() {
    return (
      <div style={{ width: '100px' }}> 
        <GoogleMap google={this.props.google} zoom={12} initialCenter={{ lat: 30.307182, lng: -97.755996 }} />
      </div>
    ); 
  } 
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDzfNVK1x0bdcILJpLDLtgxz78sBTO5a2A',
})(MapContainer);


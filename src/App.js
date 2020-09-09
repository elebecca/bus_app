import React from 'react';
import './App.css'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import * as parkData from "./data/skateboard.json";


function Map() {
  return <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 45.4211, lng: -75.6903 }} >
    {parkData.features.map(park => (
      <Marker
        key={park.properties.PARK_ID}
        position={{
          lat: park.geometry.coordinates[1],
          lng: park.geometry.coordinates[0]
        }}
      />
    ))}
  </GoogleMap>
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div classname='container' style={{ width: '70vw', height: '70vh' }}>
      <h1>BUS APP</h1>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div >
  );
}

export default App;

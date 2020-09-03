import React from 'react';
import './App.css'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
  return <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 51.509865, lng: -0.118092 }} />
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

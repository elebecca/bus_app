import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
  return <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 51.5074, lng: 0.1278 }} />
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div >
  );
}

export default App;

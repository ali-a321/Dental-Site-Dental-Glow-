import React, { useState } from 'react';
import { GoogleMap, MarkerF, useLoadScript, } from '@react-google-maps/api';

const libraries = ["places"];

const mapContainerStyle = {
  width: '100%',
  height: '250px',
  marginReft: "1rem",
  marginBottom:"3rem",
};
const tagStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
}

const center = {
  lat: 43.642567,
  lng: -79.387054,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState(center);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ,
    libraries,
  });

 
  const onOpenInGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/CN+Tower/@43.6417488,-79.3889346,16.25z/data=!4m6!3m5!1s0x882b34d68bf33a9b:0x15edd8c4de1c7581!8m2!3d43.6425662!4d-79.3870568!16zL20vMDF0d3M");
  };


  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <> 
    
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={17}
      center={center}
      options={options}
    >
        <div style={tagStyle}> <strong>Dental Glow  </strong> <br/>
        <a href="#" onClick={onOpenInGoogleMaps} rel="noopener noreferrer"
       
      >  
      View larger map</a></div>
      <MarkerF position={center}   />
    </GoogleMap>
    </>
  );
};

export default Map;

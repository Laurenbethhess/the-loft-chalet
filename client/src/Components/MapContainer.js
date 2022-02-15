import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
  const [ selected, setSelected ] = useState({});

  const api = process.env.REACT_APP_API_KEY

  const onSelect = item => {
    setSelected(item);
  }
  
  const mapStyles = {        
    height: "75vh",
    width: "75%"};
  
  const defaultCenter = {
    lat: 44.07471090832591, lng: -70.81637331554045
  }

  const locations = [
    {
      name: "The Loft-Chalet",
      location: { 
        lat: 44.07471090832591,
        lng: -70.81637331554045 
      },
    },
    {
      name: "Shawnee Peak",
      location: {
        lat: 44.05892038386212,
        lng: -70.8151591 
      },
    },
    {
      name: "The Beach",
      location: { 
        lat: 44.07346778611099,
        lng: -70.81299722224543
      },
    },
    {
      name: "The Pool",
      location: { 
        lat: 44.06895989841091,
        lng:  -70.82264085373816,
      },
    }
  ];

  return (
    <div align='center' style={{paddingTop: 100 }}>
      <LoadScript
        googleMapsApiKey={api}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}>
              {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
          </GoogleMap>
      </LoadScript>
     </div>
  )
}

export default MapContainer;
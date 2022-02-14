import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';


function Map() {
  const Norman = ({ text }) => <div>{text}</div>;

      const defaultProps = {
        center: {
          lat: 44.07471090832591,
          lng: -70.81637331554045
        },
        zoom: 16
      };

    return (
      <div>
      <div align='center' style={{paddingTop: 100 }}>
          <div style={{ height: '75vh', width: '75%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                className='mapStyles'
            >
                <Norman
                  lat={44.07471090832591}
                  lng={-70.81637331554045}
                  text="The Loft-Chalet"
                />
                <Marker
                  lat={44.07471090832591}
                  lng={76.9558}
                  name="The Loft-Chalet"
                  color="blue"
                />
            </GoogleMapReact>
          </div>            

      </div>
      </div>
    )

}

export default Map
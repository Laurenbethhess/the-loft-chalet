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
          <div style={{ height: '100vh', width: '100%' }}>
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
    )

}

export default Map
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Map, GoogleApiWrapper, IMapProps } from 'google-maps-react';
import MapStyle from './style';

const apiKey = 'AIzaSyDM8jrD4VYqFfQeG-RABzHvIS24z8lAEGE';

const mapOptions = {
  styles: MapStyle,
  zoom: 19,
  streetViewControl: false,
  mapTypeControl: false,
};

const location = {
  lat: 51.563418177963946,
  lng: -0.10838529196404156,
};

export const MapContainer = ({ google }: IMapProps) => (
  <Map
    google={google}
    initialCenter={location}
    onReady={(mapProps, map) => map.setOptions(mapOptions)}
  />
);

export default GoogleApiWrapper({ apiKey })(MapContainer);

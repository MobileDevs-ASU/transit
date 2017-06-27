import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { MapView } from 'expo';

class City extends Component {
  render() {
    const {
      mapViewStyle
    } = styles;
    return (
      <MapView
        style={mapViewStyle}
        initialRegion={{
          latitude: 33.4255,
          longitude: -111.9400,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      </MapView>
    );
  }
}

const styles = {
  mapViewStyle: {
    flex: 1
  }
}

export default City;

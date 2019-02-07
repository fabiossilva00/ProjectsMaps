import React, {Component} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <MapView style={{flex: 1}}
          provide={PROVIDER_GOOGLE}
          region={{
            latitude: -23.542995,
            longitude: -46.644052
          }}
        >
        </MapView>
      </View>
    );
  }
}
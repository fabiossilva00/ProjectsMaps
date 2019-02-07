import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const src = () => (
        <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: -23.542995,
            longitude: -46.644052,
            longitudeDelta: 0.09054,
            latitudeDelta: 0.05854
        }}
        >
        </MapView>
)

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default src
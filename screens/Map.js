import { StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

export default function Map({location,mapType}) {
    const [marker, setMarker] = useState([])

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        const newMarker = {
            key: marker.length + 1,
            latitude: coords.latitude,
            longitude: coords.longitude
        }
        const tempData = [...marker,newMarker]
        setMarker(tempData)
    }

  return (
    <SafeAreaView style={styles.container}>
        <MapView 
            style={styles.map}
            region={location}
            mapType={mapType}
            onLongPress={showMarker}
        >
            {
                marker.map((item) => {
                    return <Marker 
                                title={'Marker #' + item.key}
                                coordinate={{latitude: item.latitude, longitude: item.longitude}}
                                key={item.key}
                            />
                })
            }
        </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: '100%',
        width: '100%'
    }
})
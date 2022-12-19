import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <View>
            {/* Map screen occupied 1/2 screen */}
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
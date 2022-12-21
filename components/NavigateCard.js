import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourite';
import { Icon } from '@rneui/themed';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-red-500 flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, </Text>
            <View style={tw`border-1 border-gray-200 flex-shrink`}>
                <View >
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        styles={styles}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate('RideOptionsCard')
                        }}
                    />
                </View>
                <NavFavourite />
            </View>

            <View style={tw`flex-row bg-white justify-between py-2 mt-auto border-top border-gray-100`}>
                <TouchableOpacity onPress={() => navigation.navigate('RideOptionCard')}style={tw`flex flex-row bg-black w-24 px-4 py-3`}>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3`}>
                    <Icon name="car" type="font-awesome" color="black" size={16} />
                    <Text style={tw`text-center`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    tetxInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 10,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
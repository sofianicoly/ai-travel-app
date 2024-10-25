import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace() {
  const navegation = useNavigation();
  useEffect(()=>{
    navegation.setOptions({
      headerShown:true,
      headerTitle:'Pesquisar'
    })
  },[])
  return (
    <View style={{
      padding: 25,
      paddingTop: 25,
      backgroundColor:Colors.white,
      height: '100%'
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //AIzaSyBlCYUIhgOytJcJlSwGM2mL6hh2CLecPQc
        console.log(data, details);
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
    />
    </View>
  )
}
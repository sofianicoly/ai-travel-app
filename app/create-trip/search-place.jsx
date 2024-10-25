import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SearchPlace() {
  const navegation = useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);

  useEffect(()=>{
    navegation.setOptions({
      headerShown:true,
      headerTitle:'Pesquisar'
    })
  },[]);

  useEffect(()=>{
    console.log(tripData);
  }),[tripData]

  return (
    <View style={{
      padding: 25,
      paddingTop: 25,
      backgroundColor:Colors.white,
      height: '100%'
    }}> 
      <GooglePlacesAutocomplete
      placeholder='Escolha o seu destino'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //AIzaSyBlCYUIhgOytJcJlSwGM2mL6hh2CLecPQc
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url
          }
        })
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer:{
          borderWidth: 1,
          borderRadius: 5,
          marginTop:10
        }
      }}
    />
    </View>
  )
}
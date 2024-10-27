import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SelectDates() {

    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
          headerShown:true,
          headerTransparent:true,
          headerTitle:'' 
        })
      },[])


  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.white,
        height:'100%'

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Datas para viajar</Text>
    </View>
  )
}
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
      <Text>oioioioi</Text>
    </View>
  )
}
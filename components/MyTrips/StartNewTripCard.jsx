import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from './../../constants/Colors'
import { router } from 'expo-router';


export default function StartNewTripCard() {
  return (
    <View style={{
        padding:40,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
      
      <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
        <FontAwesome6 name="location-dot" size={30} color='black' />
      </TouchableOpacity>
      
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:25,
        textAlign:'center',
        marginTop:10
      }}>Nenhuma viagem planejada</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        textAlign:'center',
        color:Colors.grey
      }}>Parece que está na hora de planejar uma nova experiência! Clique abaixo para começar</Text>

      <TouchableOpacity 
      onPress={()=>router.push('/create-trip/search-place')}
      style={{
            padding:10,
            backgroundColor:Colors.primary,
            borderRadius:15,
            paddingHorizontal:30
        }}>
        <Text style={{
            color:Colors.white,
            fontFamily:'outfit-medium',
            fontSize:19
        }}>Nova viagem</Text>
      </TouchableOpacity>
    </View>
    //teste
  )
}
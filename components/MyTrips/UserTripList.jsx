import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserTripList({UserTrips}) {
  return (
    <View>
      <View style={{
        marginTop:25
      }}>
        <Image source={require('./../../assets/images/login.jpeg')}
        style={{
            width:'100%',
            height:240,
            objectFit:'cover',
            borderRadius:15
        }}
        />
      </View>
    </View>
  )
} 
import { View, Text, FlatList, Image} from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
  return (
    <View style={{
        marginTop:20,
    }}>
      <Text style={{

        fontFamily:'outfit-bold',
        fontSize:20
      }}>🏨 Recomendações de hotéis</Text>
      {/* mostrar a foto do hotel recomendado, nome, estrelas e valor */}
    </View>
  )
}
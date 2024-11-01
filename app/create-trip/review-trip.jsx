import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function ReviewTrip() {
  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
}, []);

  return (
    <View style={{
      padding:25,
      paddingTop:27,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{ 
        fontFamily: 'outfit-bold', 
        fontSize: 30, 
        marginTop:80 
        }}>ReviewTrip</Text>
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20,
                textAlign:'left'
            }}>Antes de gerar sua viagem, favor revisar o que foi escolhido</Text>        
        </View>
        <View style={{
          marginTop:20,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
        <FontAwesome6 name="location-dot" size={34} color="black"/>
        <View>
          <Text>Destino</Text>
          <Text>{tripData.locationInfo?.name}</Text>
        </View>
        </View>
    </View>
  )
}

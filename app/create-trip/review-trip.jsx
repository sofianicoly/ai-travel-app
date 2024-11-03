import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';

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
        }}>Revise sua viagem</Text>
     
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
                textAlign:'left',
                paddingBottom:30
            }}>Antes de gerar sua viagem favor revisar o que foi escolhido:</Text>        
        </View>

        {/* Info destino */}   
        <View style={{
          marginTop:20,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
        <Text style={{
          fontSize:27
        }}>📍</Text>
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize:20,
            color:Colors.grey
          }}>Destino</Text>
          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>{tripData.locationInfo?.name}</Text>
        </View>
        
        </View>
        {/* Info data escolhida */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
        <Text style={{
          fontSize:27
        }}>🗓️</Text>
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize:20,
            color:Colors.grey
          }}>Data da ida</Text>
          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>{moment(tripData?.startDate).format('DD MMM')
          +' até '+
          moment(tripData.endDate).format('DD MMM ')}
          ({tripData.totalNoOfDays} dias) </Text>
        </View>
        </View>
        {/* Info viajantes */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
        <Text style={{
          fontSize:27
        }}>✈️</Text>
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize:20,
            color:Colors.grey
          }}>A viagem é</Text>
          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>{tripData?.traveler?.title} </Text>
        </View>
        </View>
        {/* Info orcamento */}
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
        <Text style={{
          fontSize:27
        }}>💰</Text>
        <View>
          <Text style={{
            fontFamily: 'outfit',
            fontSize:20,
            color:Colors.grey
          }}>Orçamento</Text>
          <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
          }}>{tripData?.budget} </Text>
        </View>
        </View>
        {/* botao gerar */}
        <TouchableOpacity
        //onPress={()=>onClickContinue()}
        style={{
          backgroundColor: Colors.primary, // Adiciona uma cor de fundo
          padding: 20, // Aumenta o padding para que o botão fique maior
          borderRadius: 15,
          marginTop: 60
        }}>
        
        <Text style={{
          textAlign: 'center',
          color: Colors.white,
          fontFamily: 'outfit-medium', 
          fontSize: 19 
        }}>Gerar minha viagem</Text>

      </TouchableOpacity>
    </View>
  )
}

import { View, Text } from 'react-native'; // Certifique-se de importar os componentes corretamente
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function FlightInfo({ flightData }) {
    return (
        <View style={{
            marginTop:20,
            borderWidth:1,
            borderColor:Colors.grey,
            padding:10,
            borderRadius:15
        }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                

            }}>
            <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
        }}>✈️ Voos</Text>
                <TouchableOpacity style={{
                backgroundColor:Colors.primary,
                padding:5,
                width:150,
                borderRadius:7,
                marginTop:7
            }}><Text style={{
                fontFamily:'outfit',
                fontSize:15,
                color:Colors.white,
                textAlign:'center'
            }}>Agendar viagem</Text>

            </TouchableOpacity>

            
            </View>

            <Text style={{
            fontFamily:'outfit',
            fontSize:16,
            marginTop:5,
        }}>Linha: GOL</Text>
            <Text style={{
            fontFamily:'outfit',
            fontSize:16,
        }}>Preço: 100$ - 200$</Text>
            
        </View>
    );
}

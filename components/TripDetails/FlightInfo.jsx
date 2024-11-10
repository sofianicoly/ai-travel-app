import { View, Text } from 'react-native'; // Certifique-se de importar os componentes corretamente
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function FlightInfo({ flightData }) {
    const openBookingSite = (hotelUrl) => {
        Linking.openURL(hotelUrl).catch((err) => console.error('Erro ao tentar abrir o link: ', err));
    };
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
                width:100,
                borderRadius:7,
                marginTop:7
            }}><Text style={{
                fontFamily:'outfit',
                fontSize:15,
                color:Colors.white,
                textAlign:'center'
            }}>Agendar</Text>
            </TouchableOpacity>
            
            </View>

                    <Text style={{
            fontFamily: 'outfit',
            fontSize: 16,
        }}>
            Linha: <Text style={{ fontFamily: 'outfit-bold' }}>LATAM</Text>
        </Text>

            <Text style={{
                fontFamily: 'outfit',
                fontSize: 16,
            }}>
                Preço: <Text style={{ fontFamily: 'outfit-bold' }}>300$ - 600$</Text>
            </Text>

            <View>
            </View>
        </View>
    );
}

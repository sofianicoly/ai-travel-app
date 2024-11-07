import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({ trip }) {
    // Função que converte a string JSON para objeto, apenas uma vez
    const formatData = (data) => {
        try {
            return JSON.parse(data);  // Converte para JSON apenas uma vez
        } catch (error) {
            console.error("Erro ao parsear tripData:", error);
            return {};  // Retorna um objeto vazio em caso de erro
        }
    };

    // Converte tripData para objeto
    const tripData = formatData(trip.tripData);

    return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10 // Em vez de 'gap'
        }}>
            <Image 
                source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                }}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15
                }}
            />
            <View>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 18
                }}>
                    {tripData?.locationInfo?.name || 'Localização não disponível'}
                </Text>

                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 15,
                    color: Colors.grey,
                }}>
                    {tripData?.startDate ? moment(tripData.startDate).format('DD MMM YYYY') : 'Data não disponível'}
                </Text>

                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 15,
                    color: Colors.grey,
                }}>
                    {tripData?.traveler?.title || 'Título não disponível'}
                </Text>
            </View>
        </View>
    );
}

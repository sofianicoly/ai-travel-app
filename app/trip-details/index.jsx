import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';

export default function TripDetails() {
    const navigation = useNavigation();
    const { trip } = useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState({});
    const [hotels, setHotels] = useState({});


    // Função para garantir que os dados sejam convertidos corretamente em objeto JSON
    const formatData = (data) => {
        try {
            return typeof data === 'string' ? JSON.parse(data) : data;
        } catch (error) {
            console.error("Erro ao parsear tripData:", error);
            return {};  // Retorna um objeto vazio em caso de erro
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });

        // Converta o trip para objeto JSON, se for uma string
        const formattedTrip = formatData(trip);

        setHotels(formatData(formattedTrip.tripPlan.hotel))
        console.log(formatData(formattedTrip.tripPlan.hotel))
        
        // Verifique se tripDetails possui a estrutura correta e defina no estado
        if (formattedTrip?.locationInfo) {
            setTripDetails(formattedTrip);
            
        } else if (formattedTrip?.tripData) {
            setTripDetails(formatData(formattedTrip.tripData));
        } else {
            console.warn("Estrutura de tripData não encontrada");
        }
    }, [trip]);

    if (!tripDetails || !tripDetails.locationInfo) {
        return <Text>Carregando detalhes da viagem...</Text>; // Exibe mensagem de carregamento até que tripDetails seja definido corretamente
    }

    return (
        <ScrollView style={{
            paddingBottom:5
        }}>
            <Image 
                source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripDetails.locationInfo.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                }}
                style={{
                    width: '100%',
                    height: 330,
                }}
            />
            <View style={{
                padding: 15,
                backgroundColor: Colors.white,
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35
            }}>
                <Text style={{
                    marginTop: 8,
                    fontFamily: 'outfit-bold',
                    fontSize: 27,
                }}>{tripDetails.locationInfo.name}</Text>  
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:5,
                    marginTop:5
                }}>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.grey,
                }}>
                    {tripDetails.startDate ? moment(tripDetails.startDate).format('DD MMM YYYY') : 'Data não disponível'}
                </Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.grey,
                }}>
                    - {tripDetails.startDate ? moment(tripDetails.endDate).format('DD MMM YYYY') : 'Data não disponível'}
                </Text>
                </View>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.grey,
                }}>
                    ✈️ {tripDetails.traveler?.title || 'Título não disponível'}</Text>
            
            {/* info voo */}
                <FlightInfo/>
            {/* lista hotel */}
                <HotelList hotelList={hotels}/>
            {/* planner viagem info */}

            </View>



        </ScrollView>



//app/trip-details/index.jsx
    );
}
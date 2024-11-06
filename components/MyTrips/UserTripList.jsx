import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';

export default function UserTripList({ userTrips }) {
    if (!userTrips || userTrips.length === 0) return null;

    const LatestTrip = JSON.parse(userTrips[0].tripData); // Converte para JSON

    return (
        <View>
            <View style={{ marginTop: 25 }}>
                {LatestTrip?.locationInfo?.photoRef ? (
                    <Image 
                        source={{
                            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${LatestTrip.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                        }}
                        style={{
                            width: '100%',
                            height: 250,
                            resizeMode: 'cover',
                            borderRadius: 15
                        }}
                    />
                ) : (
                    <Image 
                        source={require('./../../assets/images/login.jpeg')}
                        style={{
                            width: '100%',
                            height: 240,
                            resizeMode: 'cover',
                            borderRadius: 15
                        }}
                    />
                )}

                <View style={{ marginTop: 25 }}>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 20
                    }}>
                        {LatestTrip?.locationInfo?.name}
                    </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            color: Colors.grey,
                            marginTop: 5,
                        }}>
                            {moment(LatestTrip.startDate).format('DD MMM YYYY')}
                        </Text>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            color: Colors.grey,
                        }}>
                            ✈️ {LatestTrip.traveler.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        // onPress={() => router.push('/create-trip/search-place')}
                        style={{
                            padding: 15,
                            backgroundColor: Colors.primary,
                            borderRadius: 15,
                            paddingHorizontal: 30,
                            marginTop: 15,
                        }}>
                        <Text style={{
                            color: Colors.white,
                            fontFamily: 'outfit-medium',
                            fontSize: 17,
                            textAlign: 'center'
                        }}>
                            Veja seus planos
                        </Text>
                    </TouchableOpacity>
                </View>

                {userTrips.map((trip, index) => (
                    <UserTripCard trip={trip} key={index} />
                ))}
            </View>
        </View>
    );
}

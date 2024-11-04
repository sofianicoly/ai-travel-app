import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { auth, db } from './../../configs/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import UserTripList from '../../components/MyTrips/UserTripList';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.white,
        height: '100%',
      }}
    >
      {loading && <ActivityIndicator size={'large'} color={Colors.primary} />}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 35,
          }}
        >
          Minhas Viagens
        </Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

      {userTrips.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}
    </View>
  );
}

import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
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
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
      contentContainerStyle={{
        padding: 25,
        paddingTop: 55,
        paddingBottom: 100, // Adiciona padding extra ao final para garantir que o último item seja visível
      }}
    >
      {loading && <ActivityIndicator size="large" color={Colors.primary} />}
      
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 35
        }}>Minhas Viagens</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

      {userTrips.length === 0 ? 
        <StartNewTripCard />
        : 
        <UserTripList userTrips={userTrips} />  
      }
    </ScrollView>
  );
}

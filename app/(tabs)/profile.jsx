import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import { auth, db } from './../../configs/FirebaseConfig'; // Certifique-se de importar o db do Firestore
import { query, collection, where, getDocs } from 'firebase/firestore';

export default function ProfileScreen() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);
  
  useEffect(() => {
    if (user) {
      getUserTrips(user.email); // Carregar as viagens do usuário após o login
    }
  }, [user]);

  const getUserTrips = async (email) => {
    try {
      const q = query(collection(db, 'UserTrips'), where('userEmail', '==', email));
      const querySnapshot = await getDocs(q);
      const trips = [];
      querySnapshot.forEach((doc) => {
        trips.push(doc.data());
      });
      setUserTrips(trips);
    } catch (error) {
      console.error('Erro ao carregar viagens:', error);
    }
  };

  // Verificando se o usuário tem viagens e pegando a mais recente
  const LatestTrip = userTrips.length > 0 ? JSON.parse(userTrips[0].tripData) : null;

  return (
    <View style={styles.container}>

      {/* Informações do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.greetingText}>Olá, conheça o seu perfil!</Text>
        <Text style={styles.infoText}>E-mail: {user?.email}</Text>
        
        {/* Exibindo a viagem mais recente */}
        {LatestTrip ? (
          <>
            <Text style={styles.tripText}>Última Viagem:</Text>
            <Text style={styles.infoText}>Destino: {LatestTrip.locationInfo.name}</Text>
            <Text style={styles.infoText}>Data de Início: {new Date(LatestTrip.startDate).toLocaleDateString()}</Text>
            <Text style={styles.infoText}>Data de Fim: {new Date(LatestTrip.endDate).toLocaleDateString()}</Text>
          </>
        ) : (
          <Text style={styles.infoText}>Você ainda não tem viagens registradas.</Text>
        )}
      </View>

      {/* Botão para editar perfil */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  greetingText: {
    marginTop: 50,
    fontFamily: 'outfit-medium',
    color: Colors.grey,
    fontSize: 25,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    marginTop: 10,
    fontFamily: 'outfit',
    fontSize: 17,
  },
  tripText: {
    marginTop: 50,
    fontFamily: 'outfit-bold',
    fontSize: 20,
    color: Colors.primary,
  },
  editButton: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 15,
  },
  editButtonText: {
    color: Colors.white,
    fontFamily: 'outfit',
    fontSize: 15,
    textAlign: 'center',
  },
});

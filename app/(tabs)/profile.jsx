import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import { auth, db } from './../../configs/FirebaseConfig';
import { query, collection, where, getDocs } from 'firebase/firestore';

export default function ProfileScreen() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserTrips(user.email);
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
    } finally {
      setLoading(false);
    }
  };

  // Verificando se o usuário tem viagens e pegando a mais recente
  const latestTrip = userTrips.length > 0 ? JSON.parse(userTrips[0].tripData) : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto de Perfil e Informações Básicas */}
      <View style={styles.header}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/8442086-ilustracao-de-icone-humano-usuario-simbolo-icone-design-moderno-em-fundo-em-branco-vetor.jpg' }}
            style={styles.profileImage}
          />

        <Text style={styles.greetingText}>Olá, {user?.displayName || 'Usuário'}!</Text>
        <Text style={styles.infoText}>E-mail: {user?.email}</Text>
      </View>

      {/* Exibindo a Viagem Mais Recente */}
      <View style={styles.tripContainer}>
        <Text style={styles.sectionTitle}>Última Viagem</Text>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : latestTrip ? (
          <>
            <Text style={styles.tripText}>Destino: {latestTrip.locationInfo.name}</Text>
            <Text style={styles.infoText}>Data de Início: {new Date(latestTrip.startDate).toLocaleDateString()}</Text>
            <Text style={styles.infoText}>Data de Fim: {new Date(latestTrip.endDate).toLocaleDateString()}</Text>
          </>
        ) : (
          <Text style={styles.infoText}>Você ainda não tem viagens registradas.</Text>
        )}
      </View>

      {/* Botão para Editar Perfil */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: Colors.white,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop:30
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 10,
  },
  greetingText: {
    fontFamily: 'outfit-medium',
    color: Colors.grey,
    fontSize: 25,
    textAlign: 'center',
  },
  infoText: {
    marginTop: 5,
    fontFamily: 'outfit',
    fontSize: 17,
    color: Colors.greyDark,
    textAlign:'center'
  },
  tripContainer: {
    padding: 10,
    backgroundColor: Colors.lightGrey,
    borderRadius: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontFamily: 'outfit-medium',
    fontSize: 25,
    color: Colors.grey,
    marginBottom: 15,
    textAlign: 'center',
  },
  tripText: {
    fontFamily: 'outfit',
    fontSize: 17,
    color: Colors.greyDark,
    marginBottom: 5,
    textAlign:'center'
  },
  editButton: {
    padding: 12,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: 'center',
    width: '60%',
  },
  editButtonText: {
    color: Colors.white,
    fontFamily: 'outfit-medium',
    fontSize: 16,
    textAlign: 'center',
  },
});

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <ScrollView>
      <Image
        source={require('./../assets/images/login2.jpg')}
        style={{
          width: 410,
          height: 540,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            margin: 15,
          }}
        >
          Planejador de Viagens
        </Text>

        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
            textAlign: 'center',
            color: Colors.grey,
            padding: 5,
          }}
        >
          Descubra sua próxima aventura sem esforço. Roteiros personalizados na palma da sua mão. Viaje de forma mais inteligente com insights baseados em IA.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: Colors.white,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 18,
            }}
          >
            Quero planejar minha viagem!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -23,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 380,
    padding: 18,
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: '14%',
    width: '85%',
  },
});

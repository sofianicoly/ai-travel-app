import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouteInfo, useRouter } from 'expo-router/build/hooks';

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require('./../assets/images/login.jpeg')}
        style={{
          width: '100%',
          height: 540,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            margin: 18,
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
              fontSize: 17,
            }}
          >
            Quero planejar minha viagem!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -23,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 18,
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    marginTop: '21%',
    width: '85%',
  },
});

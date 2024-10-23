import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.white,
        height: '100%',
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Criar nova conta
      </Text>

      <Text
        style={{
          fontFamily: 'outfit',
          fontSize: 27,
          color: Colors.grey,
          marginTop: 20,
        }}
      >
        Seja bem-vindo :)
      </Text>

      {/* Nome completo */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome completo"
        />
      </View>

      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
        />
      </View>

      {/* Senha */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua Senha"
        />
      </View>

      {/* Cadastrar */}
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.primary,
          borderRadius: 15,
          marginTop: 40,
        }}>
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
          }}
        >Criar conta</Text>
      </TouchableOpacity>

      {/* Entrar */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.white,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            textAlign: 'center',
          }}
        >
          Entrar em uma conta existente
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.grey,
    fontFamily: 'outfit',
  },
});

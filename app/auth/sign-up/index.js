import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const[email,setEmail]=useState();
  const[senha,setSenha]=useState();
  const[nome,setNome]=useState();

  const OnCreateAccount=()=>{

    if(!email&&!senha&&!nome){
        ToastAndroid.show('Preencha todas as informações', ToastAndroid.BOTTOM)
        return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // ..
  });

  }

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
          onChangeText={(value)=>setNome(value)}
        />
      </View>

      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          onChangeText={(value)=>setEmail(value)}
        />
      </View>

      {/* Senha */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua Senha"
          onChangeText={(value)=>setSenha(value)}
        />
      </View>

      {/* Cadastrar */}
      <TouchableOpacity onPress={OnCreateAccount}
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

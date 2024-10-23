import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onSignIn = async () => {
    if (!email || !senha) {
      ToastAndroid.show('Preencha o Email ou a Senha', ToastAndroid.LONG);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      router.replace('/mytrip')
      console.log(user);

      // Salva o e-mail no AsyncStorage
      await AsyncStorage.setItem('userEmail', email);
      console.log('E-mail salvo com sucesso!');
 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);

      if (errorCode === 'auth/invalid-credential') {
        ToastAndroid.show('Senha incorreta', ToastAndroid.LONG);
      } else if (errorCode === 'auth/invalid-email') {
        ToastAndroid.show('E-mail incorreto', ToastAndroid.LONG);
      } else {
        ToastAndroid.show('Erro ao fazer login. Tente novamente.', ToastAndroid.LONG);
      }
    }
  };

  return (
    <View style={{ padding: 25, paddingTop: 60, backgroundColor: Colors.white, height: '100%' }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>
        Faça seu Login
      </Text>

      <Text style={{ fontFamily: 'outfit', fontSize: 27, color: Colors.grey, marginTop: 20 }}>
        Bem-vindo de volta :)
      </Text>

      <Text style={{ fontFamily: 'outfit', fontSize: 27, color: Colors.grey, marginTop: 1 }}>
        Sentimos muito a sua falta!
      </Text>

      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      {/* Senha */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'outfit-bold' }}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua Senha"
          onChangeText={setSenha}
          value={senha}
        />
      </View>

      {/* Entrar */}
      <TouchableOpacity onPress={onSignIn}
        style={{ padding: 20, backgroundColor: Colors.primary, borderRadius: 15, marginTop: 40 }}>
        <Text style={{ color: Colors.white, textAlign: 'center' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/* Cadastrar */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-up')}
        style={{ padding: 20, backgroundColor: Colors.white, borderRadius: 15, marginTop: 15, borderWidth: 1 }}>
        <Text style={{ color: Colors.primary, textAlign: 'center' }}>
          Crie uma conta
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

import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from './../../constants/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.primary,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 65, // Define a altura da barra de abas
        paddingBottom: 10, // Adiciona um espaço para os ícones
        paddingTop: 10, // Ajusta o espaçamento superior
        position: 'absolute', // Para evitar que a barra ocupe espaço com transparência
        borderTopColor: 'transparent',
        borderTopWidth: 0, // Remove a borda superior
      },
    }}>
        <Tabs.Screen name='mytrip'
          options={{
            tabBarLabel:'Minhas Viagens',
            tabBarIcon:({color})=><FontAwesome6 name="location-dot" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name='discover'
          options={{
            tabBarLabel:'Descubra',
            tabBarIcon:({color})=><Octicons name="globe" size={24} color={color}/>
          }}
        />
        <Tabs.Screen name='profile'
          options={{
            tabBarLabel:'Perfil',
            tabBarIcon:({color})=><Ionicons name="person" size={24} color={color} />
          }}
        />
        
    </Tabs>
  )
}
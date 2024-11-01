import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors';
import { SelectTraveleslist } from './../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectTraveler() {

  const navigation=useNavigation();
  const [selectedTraveler,setSelectedTraveler] = useState(null);
  const {tripData,setTripData}=useContext(CreateTripContext);

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:'' 
    })
  },[])

    useEffect(()=>{
      setTripData({...tripData,
        traveler:selectedTraveler
      })
    },[selectedTraveler]);

    useEffect(()=>{
      console.log(tripData);
    },[tripData])
  return (
    <View style={{
      padding:25,
      paddingTop:27,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop:80 }}>Quem está viajando?</Text>
      <View style={{
        marginTop:30
      }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 25}}>Escolha os viajantes</Text>
        <FlatList
          data={SelectTraveleslist}
          renderItem={({item,index})=>(
            <TouchableOpacity 
            onPress={()=>setSelectedTraveler(item)}
            style={{
              marginVertical:15
            }}>
              <OptionCard option={item} selectedOption={selectedTraveler}/>
            </TouchableOpacity>

          )}
          keyExtractor={(item) => item.id.toString()} // Adiciona uma chave única
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary, // Adiciona uma cor de fundo
          padding: 20, // Aumenta o padding para que o botão fique maior
          borderRadius: 15,
          marginTop: 20
        }}>
        <Link href={'/create-trip/select-dates'}
        style={{
          width:'100%',
          textAlign:'center'
        }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.white,
          fontFamily: 'outfit-medium', 
          fontSize: 19 
        }}>Continuar</Text>
        </Link>
      </TouchableOpacity>
    </View>
  )
}
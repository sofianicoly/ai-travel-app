import { View, Text, FlatList, TouchableOpacity, ToastAndroid} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectBudgetOptions } from '../../constants/Options';
import  OptionCard  from './../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext';


export default function SelectBudget() {
    const navigation=useNavigation();
    const [selectedOption,setselectedOption] = useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router=useRouter();

    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: ''
        })
    }, []);

    useEffect(() => {
      if (selectedOption) {
          setTripData((prevData) => ({
              ...prevData,
              budget: selectedOption.title,
          }));
      }
  }, [selectedOption]);

    const onClickContinue=()=>{
        if (!selectedOption){
            ToastAndroid.show('Selecione o seu orçamento', ToastAndroid.LONG);
            return;
        }
        router.push('/create-trip/review-trip');

    }
    return (
    <View style={{
      padding:25,
      paddingTop:27,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{ 
        fontFamily: 'outfit-bold', 
        fontSize: 30, 
        marginTop:80 
        }}>Orçamento
        </Text>
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                padding: 1,
                fontFamily:'outfit-bold',
                fontSize:19
            }}
            >
                Escolha o limite de gastos da sua viagem
            </Text>
            <FlatList
            data={SelectBudgetOptions}
            renderItem={({item, index})=>(
                <TouchableOpacity style={{
                    marginVertical:10
                }}
                onPress={()=>setselectedOption(item)}
                >
                    <OptionCard option={item} selectedOption={selectedOption}/>

                </TouchableOpacity>
            )}/>
        </View>
        <TouchableOpacity
        onPress={()=>onClickContinue()}
        style={{
          backgroundColor: Colors.primary, // Adiciona uma cor de fundo
          padding: 20, // Aumenta o padding para que o botão fique maior
          borderRadius: 15,
          marginTop: 20
        }}>
        
        <Text style={{
          textAlign: 'center',
          color: Colors.white,
          fontFamily: 'outfit-medium', 
          fontSize: 19 
        }}>Continuar</Text>

      </TouchableOpacity>
    </View>
  )
}
import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModel';
import { useRouter } from 'expo-router';
import { auth, db } from './../../configs/FirebaseConfig'
import { doc, setDoc } from "firebase/firestore"; 

export default function GenerateTrip() {
    const {tripData,setTripData}=useContext(CreateTripContext);
    const[loading,setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;
    useEffect(() => {
        tripData&&GenerateAiTrip()
    }, []);

    const GenerateAiTrip=async()=>{
        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',tripData.locationInfo?.name)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNight}',tripData.totalNoOfDays-1)
        .replace('{traveler}',tripData.traveler?.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNight}',tripData.totalNoOfDays-1)
        
        console.log(FINAL_PROMPT);
        
     const result = await chatSession.sendMessage(FINAL_PROMPT);
     console.log(result.response.text());
     const tripResp=JSON.parse(result.response.text());
     setLoading(false)
     const docId=(Date.now()).toString();
     const result_ = await setDoc(doc(db, "UserTrips", docId), {
        userEmail:user.email,
        tripPlan: tripResp, //ai result
        tripData:JSON.stringify(tripData), //user selection data
        docId:docId
      })

         router.push('(tabs)/mytrip');

    

    }
  return (
    <View style={{
      padding:25,
      paddingTop:77,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center'
      }}>Gerando sua viagem</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:30,
        textAlign:'center',
        paddingBottom:30,
        color:Colors.grey
      }}>Por favor espere...</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        textAlign:'center',
        paddingTop:20
      }}>Estamos trabalhando para gerar a sua viagem dos sonhos</Text>
      <Image source={require('./../../assets/images/aviao-carregamento-unscreen.gif')}
      style={{
        width:'100%',
        height:350,
        objectFit:'contain'
      }}
      />
      <Text style={{
        fontFamily:'outfit',
        fontSize:18,
        textAlign:'center',
        color:Colors.grey
      }}>Não volte para a página anterior</Text>
    </View>
  )
}
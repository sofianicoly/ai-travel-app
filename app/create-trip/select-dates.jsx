import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';
import { useRoute } from '@react-navigation/native';

export default function SelectDates() {

  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router=useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

  const onDateChange = (data, type) => {
    console.log(data, type);
    if (type === 'START_DATE') {
      setStartDate(moment(data));
    } else {
      setEndDate(moment(data));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate || !endDate) {  // Corrigido para verificar os dois valores
      ToastAndroid.show('Por favor selecione a data de Ida e de Volta', ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, 'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,
      startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays+1
    });
    router.push('create-trip/select-budget')
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.white,
      height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20
      }}>Datas para viajar</Text>

      <View style={{
        marginTop: 50
      }}>
        <CalendarPicker
          onDateChange={onDateChange} // Corrigido para remover "this."
          allowRangeSelection={true}
          minDate={new Date()}
          selectedRangeStyle={{
            backgroundColor: Colors.primary
          }}
          selectedDayTextStyle={{
            color: Colors.white
          }}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          backgroundColor: Colors.primary,
          padding: 20,
          borderRadius: 15,
          marginTop: 50
        }}>
        <Text style={{
          textAlign: 'center',
          color: Colors.white,
          fontFamily: 'outfit-medium',
          fontSize: 19
        }}>Continuar</Text>
      </TouchableOpacity>

    </View>
  );
}

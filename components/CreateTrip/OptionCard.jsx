import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option, selectedOption}) {
  return (
    <View style={[{
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.l_grey,
        borderRadius:19
      },selectedOption?.id==option?.id&&{borderWidth:2.5}]}>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:20,
            }}>{option.title}</Text>
            <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                color:Colors.grey
            }}>{option.desc}</Text>            
        </View>
        <Text style={{
            fontSize:30,

        }}>
        {option.icon}
        </Text>
    </View>
  )
}
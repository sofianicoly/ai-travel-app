import { View, Text } from 'react-native'; // Certifique-se de importar os componentes corretamente
import React from 'react';

export default function FlightInfo({ flightData }) {
    return (
        <View>
            <Text>
                {flightData?.flight_price}
            </Text>
        </View>
    );
}

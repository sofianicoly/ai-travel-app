import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function HotelList({ hotelList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏨 Recomendações de hotéis</Text>
      <FlatList
        data={hotelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501308768.webp?k=c2420007ff1c8d93e6e70bb17edec321843738c8f757c06c45893b307c4d9f48&o=' }} style={styles.image} />
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.price}>💰 {item.price}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    width: 230,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 10,
    fontFamily:'outfit'
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    fontFamily:'outfit'
  },
  price: {
    fontSize: 14,
    color: Colors.primary,
    marginHorizontal: 10,
    fontFamily:'outfit-bold'
  },
  description: {
    fontSize: 12,
    color: '#444',
    marginHorizontal: 10,
    marginTop: 4,
    fontFamily:'outfit'
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10,
    fontFamily:'outfit-medium'
  },
});


//componentes/tri-details/hoteil
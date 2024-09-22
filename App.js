import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('T-Shirt');

  const categories = ['T-Shirt', 'Jeans', 'Short', 'Pants'];
  const products = {
    'T-Shirt': [
      { name: '$MAKER THINGS TEE IN WHITE', price: '600000 VND', image: 'https://smakerclothing.com/upload/sanpham/dscf9477-1710.jpg' },
      { name: 'I GOT HOMIES IN SAUDI TEE IN BLACK', price: '500000 VND', image: 'https://smakerclothing.com/upload/sanpham/dscf9495-2979.jpg' },
      { name: 'I GOT MONEY IN SAUDI TEE IN WHITE', price: '500000 VND', image: 'https://smakerclothing.com/upload/sanpham/dscf9491-3408.jpg' },
    ],
    'Jeans': [
      { name: 'Jeans 1', price: '$50', image: 'https://via.placeholder.com/150' },
      { name: 'Jeans 2', price: '$60', image: 'https://via.placeholder.com/150' },
      { name: 'Jeans 3', price: '$70', image: 'https://via.placeholder.com/150' },
    ],
    'Short': [
      { name: 'Short 1', price: '$15', image: 'https://via.placeholder.com/150' },
      { name: 'Short 2', price: '$18', image: 'https://via.placeholder.com/150' },
      { name: 'Short 3', price: '$20', image: 'https://via.placeholder.com/150' },
    ],
    'Pants': [
      { name: 'Pants 1', price: '$40', image: 'https://via.placeholder.com/150' },
      { name: 'Pants 2', price: '$45', image: 'https://via.placeholder.com/150' },
      { name: 'Pants 3', price: '$50', image: 'https://via.placeholder.com/150' },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={{ uri: 'https://via.placeholder.com/400x150' }}
        />
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Categories */}
        <View>
          <ScrollView horizontal style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={styles.categoryItem}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        {/* Products */}
        <View style={styles.productList}>
          {products[selectedCategory].map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Email: davidtran@gmail.com</Text>
        <Text>Phone: 0969177461</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  banner: {
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerImage: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    paddingHorizontal: 10
  },
  categories: {
    marginBottom: 10,
  },
  categoryItem: {
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    borderRadius: 40, // Makes the shape circular
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  footer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
});
import React, { useContext } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ProductsContext } from './ProductsContext'; // Import the ProductsContext

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const { products } = useContext(ProductsContext); // Use the products from context

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const addToCart = async (product) => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      const cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Product added to cart:', product);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => navigateToProductDetail(item)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
          <Image source={require('../assets/add.png')} style={styles.addToCartIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productDescription}>{truncateText(item.description, 40)}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 180,
    height: 240,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  productDescription: {
    fontSize: 13,
    marginTop: 5,
    color: '#888',
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontSize: 14,
    color: 'orange',
    marginTop: 5,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addToCartIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;

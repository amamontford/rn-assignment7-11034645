import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('cart');
        setCartItems(cart ? JSON.parse(cart) : []);
      } catch (error) {
        console.error(error);
      }
    };

    const focusListener = navigation.addListener('focus', fetchCartItems);
    return () => focusListener();
  }, [navigation]);

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Image source={require('../assets/Search.png')} style={styles.icon} />
      </View>
      <Text style={styles.checkoutTitle}>CHECKOUT</Text>
      <View style={styles.lineContainer}>
        <View style={[styles.line, { width: 100 }]} />
        <View style={styles.diamond} />
        <View style={[styles.line, { width: 100 }]} />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique keys
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemName}>{item.title ? item.title.toUpperCase() : 'UNKNOWN ITEM'}</Text>
              <Text style={styles.cartItemDescription}>{truncateText(item.description, 40)}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
              <Image source={require('../assets/remove.png')} style={styles.removeFromCartIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>EST. TOTAL</Text>
          <Text style={styles.totalPrice}>${calculateTotal()}</Text>
        </View>
        <View style={styles.checkoutButtonContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Checkout')}>
            <View style={styles.checkoutButton}>
              <Image source={require('../assets/shoppingBag.png')} style={styles.cartIcon} />
              <Text style={styles.checkoutText}>CHECKOUT</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 10,
  },
  checkoutTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cartItemImage: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 90,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
  },
  diamond: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    transform: [{ rotate: '45deg' }],
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#888',
  },
  cartItemPrice: {
    fontSize: 16,
    color: 'orange',
    marginTop: 5,
  },
  removeButton: {
    padding: 10,
  },
  removeFromCartIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    paddingVertical: 10,
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    color: '#888',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
  checkoutButtonContainer: {
    width: '100%',
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  checkoutText: {
    color: 'white',
    marginLeft: 10,
  },
  cartIcon: {
    width: 21,
    height: 21,
    tintColor: 'white',
  },
});

export default Cart;

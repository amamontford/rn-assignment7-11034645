import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './Header';

const ProductDetailScreen = ({ route }) => {
  const { product = {} } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header showOurStory={false} />
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <View style={styles.productHeader}>
            <Text style={styles.productName}>{product.title}</Text>
            <Image source={require('../assets/Export.png')} style={styles.exportIcon} />
          </View>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>

          <View style={styles.careInstructions}>
            <Text style={styles.sectionTitle}>Care Instructions</Text>
            <View style={styles.careInstruction}>
              <Image source={require('../assets/DoNotBleach.png')} style={styles.careIcon} />
              <Text style={styles.careText}>Do not use bleach</Text>
            </View>
            <View style={styles.careInstruction}>
              <Image source={require('../assets/DoNotTumbleDry.png')} style={styles.careIcon} />
              <Text style={styles.careText}>Do not tumble dry</Text>
            </View>
            <View style={styles.careInstruction}>
              <Image source={require('../assets/DoNotWash.png')} style={styles.careIcon} />
              <Text style={styles.careText}>Dry clean with tetrachloroethylene</Text>
            </View>
            <View style={styles.careInstruction}>
              <Image source={require('../assets/Iron.png')} style={styles.careIcon} />
              <Text style={styles.careText}>Iron at a maximum of 110°C/230°F</Text>
            </View>
          </View>

          <View style={styles.shippingContainer}>
            <Text style={styles.sectionTitle}>Shipping Information</Text>
            <View style={styles.shippingInfoContainer}>
              <View style={styles.shippingInfo}>
                <Image source={require('../assets/Shipping.png')} style={styles.shippingIcon} />
                <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
              </View>
              <Image source={require('../assets/Up.png')} style={styles.upIcon} />
            </View>
          </View>

          <Text style={styles.estimatedDelivery}>Estimated to be delivered on 09/11/2021 - 12/11/2021.</Text>
        </View>
      </ScrollView>
      <View style={styles.addToBasketContainer}>
        <TouchableOpacity style={styles.addToBasketButton}>
          <Image source={require('../assets/Plus.png')} style={styles.plusIcon} />
          <Text style={styles.addToBasketText}>ADD TO BASKET</Text>
        </TouchableOpacity>
        <Image source={require('../assets/Heart.png')} style={styles.heartIcon} />
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
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  productImage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
  },
  productDetails: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    marginBottom: 8,
  },
  exportIcon: {
    width: 24,
    height: 24,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: 'orange',
    marginBottom: 20,
  },
  careInstructions: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  careInstruction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  careIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  careText: {
    fontSize: 14,
    color: '#333',
  },
  shippingContainer: {
    marginTop: 20,
  },
  shippingInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shippingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  shippingIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  shippingText: {
    fontSize: 14,
    fontWeight: '500',
  },
  upIcon: {
    width: 24,
    height: 24,
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
    marginBottom: 20,
  },
  addToBasketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  addToBasketButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#fff',
  },
  addToBasketText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  heartIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default ProductDetailScreen;

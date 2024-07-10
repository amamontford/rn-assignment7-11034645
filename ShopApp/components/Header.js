import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ showOurStory = true }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../assets/Menu.png')} style={styles.icon} />
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <View style={styles.rightIcons}>
            <Image source={require('../assets/Search.png')} style={styles.icon} />
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {showOurStory && (
          <View style={styles.ourStorySection}>
            <Text style={styles.ourStoryTitle}>OUR STORY</Text>
            <View style={styles.rightIcons}>
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                <Image source={require('../assets/Listview.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/Filter.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  ourStorySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  ourStoryTitle: {
    fontSize: 20,
  },
});

export default Header;

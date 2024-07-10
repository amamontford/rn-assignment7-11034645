import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const JewelleryScreen = () => {
  return (
    <View style={styles.container}>
      <Header showOurStory={false} />
      <Text style={styles.text}>Jewellery Screen Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default JewelleryScreen;

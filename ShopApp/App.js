import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import Cart from './components/Cart';
import ProductDetailScreen from './components/ProductDetailScreen';
import DrawerScreen from './components/DrawerScreen';
import BlogScreen from './components/BlogScreen';
import JewelleryScreen from './components/JewelleryScreen';
import ElectronicScreen from './components/ElectronicScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Store"
          drawerContent={(props) => <DrawerScreen {...props} />}
        >
          <Drawer.Screen name="Store" component={HomeStack} options={{ headerShown: false }} />
          <Drawer.Screen name="Location" component={Cart} options={{ headerShown: false }} />
          <Drawer.Screen name="Clothing" component={ProductDetailScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="BlogScreen" component={BlogScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="JewelleryScreen" component={JewelleryScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="ElectronicScreen" component={ElectronicScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

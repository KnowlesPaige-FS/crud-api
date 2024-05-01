import * as Network from 'expo-network';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Movies from './src/screens/Movies';
import Events from './src/screens/Events';
import PastEvents from './src/screens/PastEvents';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

function EventsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="PastEvents" component={PastEvents} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const checkNetwork = async () => {
      const networkState = await Network.getNetworkStateAsync();
      console.log('Network state:', networkState);
    };

    checkNetwork();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="About" component={About} options={{ headerShown: true, title: 'About Us' }} />
        <Tab.Screen name="Events" component={EventsStack} options={{ headerShown: false }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

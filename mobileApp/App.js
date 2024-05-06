import * as Network from 'expo-network';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import authService from './src/services/auth.service';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Movies from './src/screens/Movies';
import Events from './src/screens/Events';
import PastEvents from './src/screens/PastEvents';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="PastEvents" component={PastEvents} /> 
      <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome Home' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkNetwork = async () => {
      const networkState = await Network.getNetworkStateAsync();
      console.log('Network state:', networkState);
    };

    checkNetwork();

    const fetchCurrentUser = async () => {
      const user = await authService.getCurrentUser();
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  return (
    <NavigationContainer>
      {currentUser ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
          <Tab.Screen name="About" component={About} options={{ title: 'About Us' }} />
          <Tab.Screen name="Events" component={Events} options={{ title: 'Events' }} />
          <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
        </Tab.Navigator>
      ) : (
        <AuthStack />
      )}
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

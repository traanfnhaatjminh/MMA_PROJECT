import React from 'react';
import { View, Text } from 'react-native';
import Homepage from './components/homepage'; // Ensure correct path
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  function home() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HOME' component={home}></Tab.Screen>
        <Tab.Screen name='REORDER' component={home}></Tab.Screen>
        <Tab.Screen name='CART' component={home}></Tab.Screen>
        <Tab.Screen name='ACCOUNT' component={home}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

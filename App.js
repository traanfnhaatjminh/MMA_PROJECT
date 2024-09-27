import React from 'react';
import { View, Text } from 'react-native';
import Homepage from './components/homepage'; // Ensure correct path
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <View>
        <Text>HOME</Text>
      </View>
    );
  }

  function Reorder() {
    return (
      <View>
        <Text>REORDER</Text>
      </View>
    );
  }

  function Cart() {
    return (
      <View>
        <Text>CART</Text>
      </View>
    );
  }

  function Account() {
    return (
      <View>
        <Text>ACCOUNT</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HOME' component={Home}></Tab.Screen>
        <Tab.Screen name='REORDER' component={Reorder}></Tab.Screen>
        <Tab.Screen name='CART' component={Cart}></Tab.Screen>
        <Tab.Screen name='ACCOUNT' component={Account}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

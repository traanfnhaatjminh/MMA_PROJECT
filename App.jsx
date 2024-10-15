import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';

export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

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

  const MyHomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{
      }}
        initialRouteName='PRODUCT_DETAILS'
      >
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "blue", // Notice the lowercase 'r' for red
        tabBarInactiveTintColor: "grey",
        keyboardHidesTabBar: false // You can define the inactive color
      }}>
        <Tab.Screen name='HOME_STACK' component={MyHomeStack} options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name='home' size={20} color={color} />
          }
        }}></Tab.Screen>
        <Tab.Screen name='REORDER' component={Reorder} options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name='reorder' size={20} color={color} />
          }
        }}></Tab.Screen>
        <Tab.Screen name='CART' component={Cart} options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name='shopping-cart' size={20} color={color} />
          }
        }}></Tab.Screen>
        <Tab.Screen name='ACCOUNT' component={Account} options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name='account' size={25} color={color} />
          }
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

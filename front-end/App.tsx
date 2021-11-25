import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FiHome, FiUser, FiShoppingCart } from 'react-icons/fi';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import ProductsCategory from './src/screens/ProductsCategory/index';
import Register from './src/screens/Register/index'
// import Edit from './src/screens/EditProfile';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Home from './src/screens/HomeScreen/index';
import Products from './src/screens/Products';
import Cart from './src/screens/ShoppingCart';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Rota de login para acessar home
function LoginRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// Rota de menu tab da home, carrinho e perfil
function HomeTabs() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen name="home" component={Home} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <FiHome name='home' size={size} color={color} />
        ), showIcon: true
      }} />
      <Tab.Screen name="cart" component={Cart} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <FiShoppingCart name="home" size={size} color={color} />
        ), showIcon: true
      }} />
      <Tab.Screen name="profile" component={Profile} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => 
        (<FiUser name='user' size={size} color={color} />)
      }} />
    </Tab.Navigator>
  )
}

// Rota do acesso sem login
function HomeWithoutLogin() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen name="home" component={Home} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <FiHome name='home' size={size} color={color} />
        ), showIcon: true
      }} />
      <Tab.Screen name="cart" component={Cart} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => (
          <FiShoppingCart name="home" size={size} color={color} />
        ), showIcon: true
      }} />
      <Tab.Screen name="profile" component={Register} options={{
        headerShown: false, tabBarIcon: ({ size, color }) => 
        (<FiUser name='user' size={size} color={color} />)
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginRoute" component={LoginRoute} options={{ headerShown: false }} />
        <Stack.Screen name="homeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="homeWithoutLogin" component={HomeWithoutLogin} options={{ headerShown: false }} />
        <Stack.Screen name="category" component={ProductsCategory} />
        <Stack.Screen name="products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

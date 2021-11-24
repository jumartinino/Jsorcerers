import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductsCategory from './src/screens/ProductsCategory/index';
import Register from './src/screens/Register/index'
import Edit from './src/screens/EditProfile';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';

export default function App() {
  return (
    <Login></Login>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Products from './src/screens/Products';

export default function App() {
  return (
    <Products></Products>
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

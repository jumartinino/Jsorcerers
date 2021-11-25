import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsCategory from './src/screens/ProductsCategory/ProductsCategory';

import Register from './src/screens/Register'

export default function App() {
  return (
    <ProductsCategory></ProductsCategory>
    // <View style={styles.container}>
    //   <Text>Hello World!</Text>
    // </View>
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

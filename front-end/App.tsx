import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsCategory from './src/screens/ProductsCategory/ProductsCategory.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsCategory></ProductsCategory>
    </View>
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

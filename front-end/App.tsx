import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsCategory from './src/pages/ProductsCategory';

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

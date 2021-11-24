import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductsCategory from './src/screens/ProductsCategory/ProductsCategory.tsx';

import Register from './src/screens/Register'

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>

        
      </AuthProvider>
      <Text>Hello World!</Text>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Register from './src/screens/Register'

export default function App() {
  return (
    <Register></Register>
    // <View style={styles.container}>
    //   <Register></Register>
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

// import React = require('react');
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {  
  return ( 
    <NavigationContainer>
      <Navigator>
            <Screen options={{headerShown:false}} name="Home" component={HomeScreen}></Screen>
      </Navigator>    
    </NavigationContainer>  
  );
};

export default App;
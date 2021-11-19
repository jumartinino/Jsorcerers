import React = require('react');
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './src/components/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {  
  return ( 
    <NavigationContainer style={styles.container}>
      <Navigator>
            <Screen options={{headerShown:false}} name="Home" component={HomeScreen}></Screen>
      </Navigator>    
    </NavigationContainer>  
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: 'black',
    marginLeft: 20, 
    marginRight: 20,
    justifyContent: 'center',
  },
});

export default App;

import React from 'react';
import COLORS from '../Colors';
import {Entypo} from '@expo/vector-icons'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen/index';
import Profile from '../screens/Profile/index';
import Cart from '../screens/Cart/index';


export default function Routes() {
  return(
      <Tab.Navigator initialRouteName='Home' tabBarOptions={{
        activeTintColor: COLORS.darkGreen
      }}
      
       screenOptions={{headerShown: false}}>

        <Tab.Screen 
        name='Perfil' 
        component={Profile}
        options={{
          tabBarIcon:({size,color})=>(
            <Entypo name='user' size={size} color={color}/>
          )
        }}
        />

        <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
        tabBarIcon:({size,color})=>(
        <Entypo name='home' size={size} color={color}/>
          )
        }}
        />
       
        <Tab.Screen 
        name='Carrinho' 
        component={Cart}
        options={{
        tabBarIcon:({size,color})=>(
        <Entypo name='shopping-cart' size={size} color={color}/>
          )
        }}
        />

      </Tab.Navigator>
  )
}
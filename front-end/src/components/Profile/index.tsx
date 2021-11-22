import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView,} from 'react-native';
import COLORS from '../Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function Profile() {

  return(
  <SafeAreaView>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Olá, Rafael</Text>
          <Image
            style={styles.profile} 
            source={require('../../Images/rafael.jpg')}
          />
        </View>
      </ScrollView>
  </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal:15,
    marginTop:30,
  },
  title:{
    marginTop:18,
    fontSize:20,
    marginLeft:20
  },
  profile:{
    height:70,
    width:70,
    borderRadius:35,  
  },
})
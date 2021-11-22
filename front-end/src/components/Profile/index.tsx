import React from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import COLORS from '../Colors';

import Icon from 'react-native-vector-icons/Entypo';

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

        <View style={styles.editContainer}>

          <View style={styles.editHeader}>
          <Text style={styles.containersTitle}>Meus dados:</Text>
          <TouchableOpacity>
          <Icon name='pencil' style={styles.icon} />
          </TouchableOpacity>
          </View>

          <View style={styles.dados}>
            <Text>Nome: Pedro Alves Faria</Text>
            <Text>Cpf: 123.456.789-10</Text>
            <Text>Email: Rafael@email.com</Text>
            <Text>Endereço: Rua das pedras 123, bairro alto</Text>
          </View>
        </View>

        <View style={styles.pedidosFavoritosContainer}>
          <Text style={styles.containersTitle}>Meus pedidos:</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>
            <TouchableOpacity style={styles.pedidosEach}>
              <Image source={require('../../Images/boardprod.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pedidosEach}>
              <Image source={require('../../Images/boardprod.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pedidosEach}>
              <Image source={require('../../Images/boardprod.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.pedidosEach}>
              <Image source={require('../../Images/boardprod.png')}/>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.pedidosFavoritosContainer}>
          <Text style={styles.containersTitle}>Meus favoritos:</Text>

        </View>
        
      </ScrollView>
  </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal:25,
    marginTop:30,
  },
  title:{
    marginTop:18,
    fontSize:20,
  },
  profile:{
    height:70,
    width:70,
    borderRadius:35,
  },
  editContainer:{
    paddingVertical: 15,
    paddingHorizontal:10,
    backgroundColor:COLORS.lightGreen,
    width:'90%',
    alignSelf:'center',
    borderRadius:10,
  },
  editHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
  containersTitle:{
    fontSize:20,
  },
  icon:{
    color:COLORS.darkBrown,
    fontSize:30,
  },
  dados:{

  },
  pedidosFavoritosContainer:{
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'90%',
    alignSelf:'center',
    borderRadius:10,
    borderColor:COLORS.darkGreen,
    borderWidth:2,
    marginTop:20
  },
  pedidosEach:{
    marginTop:10,
    backgroundColor:COLORS.darkBrown,
    width:'100%',
  },
})
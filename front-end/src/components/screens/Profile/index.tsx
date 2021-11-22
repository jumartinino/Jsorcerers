import React from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import COLORS from '../../Colors';

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

          <View style={styles.favoritosBigContainer}>

            <View style={styles.favoritosColumn1}>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>

              </TouchableOpacity>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>

              </TouchableOpacity>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>
              </TouchableOpacity>
            </View>


            <View>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>

              </TouchableOpacity>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>

              </TouchableOpacity>
                                                            <TouchableOpacity style={styles.favoritosEach}>
                <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                <Text style={styles.favoritoText}>Escape Room: Board Game</Text>

              </TouchableOpacity>
            </View>
          </View>
        </View>
        
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonTitle }>Comece a vender na GG</ Text>
              </View>
            </TouchableOpacity>

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
    fontWeight:'bold'
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
    fontSize:18,
    fontWeight:'bold',
    color:COLORS.darkBrown
  },
  icon:{
    color:COLORS.darkBrown,
    fontSize:30,
  },
  dados:{
    marginLeft:10,

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
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor:COLORS.lightGreen,
    marginLeft:10,
    marginTop:10,
    borderRadius:10,
  },
  favoritosBigContainer:{
    flexDirection: 'row',
  },
  favoritosColumn1:{
    marginRight:10,
    marginLeft:10,
    
  },
  favoritosEach:{
    borderRadius:10,
    backgroundColor:COLORS.lightGreen,
    paddingVertical:2,
    alignItems:'center',
    width:150,
    height: 180,
    marginTop:10,
  },
  photo:{
  width:110,
  height: 110,
  backgroundColor:COLORS.lightGreen,
  marginTop:15
  },
  favoritoText:{
    fontSize:18
  },
  button:{
    height: 40,
    width: "90%",
    backgroundColor: COLORS.lightGreen,
    marginBottom: 10,
    marginTop: 50,
    borderRadius: 7,
    alignSelf:'center'
  },
  buttonTitle:{
    textAlign: 'center',
    marginTop: 5,
    color: COLORS.darkBrown,
    fontSize: 20,
    fontWeight:'bold'
  }
})
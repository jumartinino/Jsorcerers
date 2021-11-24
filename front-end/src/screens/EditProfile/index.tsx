import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Image, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import COLORS from '../../Cores/Colors';
import Profile from '../Profile/index';

export default function EditProfile() {
  
    return(
    <SafeAreaView>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
      <ScrollView>

        <View style={styles.header}>
          <Image style={styles.image} source={require('../../Images')}/>
        </View>

        <View style={styles.editContainer}>

          <TextInput style={styles.input}
          placeholder='  Edite aqui o seu NOME'
          />
          <TextInput style={styles.input}
          placeholder='  Edite aqui o seu CPF'
          />
          <TextInput style={styles.input}
          placeholder='  Edite aqui o seu E-MAIL'
          />
          <TextInput style={styles.input}
          placeholder='  Edite aqui o seu ENDEREÇO'
          />
      
        </View>

          <TouchableOpacity>
            <View style={styles.button} 
                  onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.buttonTitle }>Editar</ Text>
            </View>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    )   
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    marginTop:0,
    justifyContent: 'space-between',
    paddingVertical: 35,
  },
  image:{
    width:210,
    height:160,

  },
  editContainer:{
    width: "90%",
    alignSelf:'center',
    marginTop:60
  },
  button: {
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
  },
  input:{
    height: 40,
    width:'100%',
    borderColor: COLORS.lightGreen,
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 15, 
    borderRadius: 5 ,
    textSelf:'center'
  }
});
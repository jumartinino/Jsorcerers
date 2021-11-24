import React = require('react');
import {View, Text, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import COLORS from '../../Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const HomeScreen=()=> {
  return (
    <SafeAreaView>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>

      <ScrollView>

        <View style={styles.header}>
          <Image
            style={styles.profile} 
            source={require('../../Images/rafael.jpg')}
          />
        </View>
          <View style={styles.searchContainer}>
            <Icon name='search' size={30} color={COLORS.darkBrown}/>
            <TextInput style={styles.input} placeholder='Pesquisar na GG'/>
          </View>


          <View>
              <Text style={styles.categTitle}>Categorias</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>

              <View style={styles.categoriesPhotos}>
                  <TouchableOpacity>
                    <ImageBackground style={styles.eachPhoto} source={require('../../Images/mangaDef.jpg')}>
                    <View style={styles.textView}>
                      <Text style={styles.photoText}>Mangá</Text>
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <ImageBackground style={styles.eachPhoto} source={require('../../Images/boardDef.jpg')}>
                    <View style={styles.textView}>
                      <Text style={styles.photoText}>Board Game</Text>
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <ImageBackground style={styles.eachPhoto} source={require('../../Images/actionDef.jpg')}>
                    <View style={styles.textView}>
                      <Text style={styles.photoText}>Action Figures</Text>
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <ImageBackground style={styles.eachPhoto} source={require('../../Images/funkoDef.jpg')}>
                    <View style={styles.textView}>
                      <Text style={styles.photoText}>Funko Pop</Text>
                    </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
            </ScrollView>


              <View style={styles.productsHeader}>
                <Text style={styles.productsTitle}>Produtos</Text>

                <TouchableOpacity style={styles.filter}>
                  <Text>filter</Text>
                </TouchableOpacity>
              </View>

    
              <View style={styles.productsBigContainer}>

                <View style={styles.productsColumn1}>
                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.productsColumn2}>
                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.productsEach}>
                      <Image source={require('../../Images/boardprod.png')} style={styles.photo}/>
                      <Text style={styles.productText}>Escape Room: Board Game</Text>
                      <Text style={styles.productPrice}>R$9999,99</Text>
                  </TouchableOpacity>
                </View>
              </View>

          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal:10,
    marginTop:30,
  },
  profile:{
    height:50,
    width:50,
    borderRadius:25,
  },
  searchContainer:{
      borderRadius:10,
      borderColor: COLORS.darkBrown,
      backgroundColor: '#F4F4F4',
      flexDirection: 'row',
      paddingHorizontal:10,  
      width: "90%",
      borderWidth: 1,
      marginLeft:20
  },
  input:{
    fontSize:17,
    width: "100%",
  },
  categTitle:{
    color: COLORS.darkBrown, 
    fontSize: 20,
    fontWeight:'bold',
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal:0,   
},
categoriesPhotos:{
    flexDirection: 'row',
    flex:1,
    marginVertical:5,
    marginHorizontal:10,    
  },
eachPhoto:{
  width:170,
  height: 100,
  marginHorizontal:5, 
 },
textView:{
  position:'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},
  photoText:{
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
 },
 productsBigContainer:{
  flexDirection: 'row',
},
 productsHeader:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom:0,
  marginTop:10
},
filter:{
  marginRight:25
},
 productsTitle:{
  color: COLORS.darkBrown, 
  fontSize: 20,
  fontWeight:'bold',
  marginLeft: 24,
 },
productsEach:{
  borderRadius:10,
  backgroundColor:COLORS.lightGreen,
  paddingVertical:2,
  alignItems:'center',
  width:180,
  height: 200,
  marginTop:10
},
photo:{
  width:120,
  height: 120,
  backgroundColor:COLORS.lightGreen,
  marginTop:15
},
productsColumn1:{ 
  marginLeft:10,
  marginRight:10,
},
productsColumn2:{
  marginRight:10,
},
productText:{
  marginBottom:0,
  fontSize:15
},
productPrice:{
  fontWeight:'bold',
  fontSize:15
}
})

export default HomeScreen;
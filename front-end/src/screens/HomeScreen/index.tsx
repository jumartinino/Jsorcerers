// import React = require('react');
import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import COLORS from '../../components/Colors/Colors';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Routes from '../../components/Routes/index'

Icon.loadFont();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <View style={styles.header}>
          <Image
            style={styles.profile}
            source={require('../../assets/pedro.png')}
          />
        </View>
        <View style={styles.searchContainer}>
          <Icon name='search' size={30} color={COLORS.darkBrown} />
          <TextInput style={styles.input} placeholder='Pesquisar na GG' />
        </View>


        <View>
          <Text style={styles.categTitle}>Categorias</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={styles.categories}>
              <TouchableOpacity onPress={()=> navigation.navigate('category')}>
                <ImageBackground style={styles.eachPhoto} source={require('../../assets/mangaDef.jpg')}>
                  <View style={styles.textView}>
                    <Text style={styles.photoText}>Mangá</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground style={styles.eachPhoto} source={require('../../assets/boardDef.jpg')}>
                  <View style={styles.textView}>
                    <Text style={styles.photoText}>Board Game</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity >
                <ImageBackground style={styles.eachPhoto} source={require('../../assets/actionDef.jpg')}>
                  <View style={styles.textView}>
                    <Text style={styles.photoText}>Action Figures</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity >
                <ImageBackground style={styles.eachPhoto} source={require('../../assets/funkoDef.jpg')}>
                  <View style={styles.textView}>
                    <Text style={styles.photoText}>Funko Pop</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.productsHeader}>
            <Text style={styles.productsTitle}>Produtos</Text>
          </View>

          <View style={styles.categoriesPhotos}>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/boardprod.png')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Escape Room: Board Game</Text>
                <Text style={styles.productPrice}>R$99,99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/masterboard.jpg')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Grow Master </Text>
                <Text style={styles.productPrice}>R$74,99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/zodiaco.jpg')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Cavaleiros do Zodíaco – Saint Seiya</Text>
                <Text style={styles.productPrice}>R$34,99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/fairyfunko.jpg')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>FUNKO POP! ANIME: Fairy Tail W2 </Text>
                <Text style={styles.productPrice}>R$266,99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/yodaaction.jpg')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Star Wars (Baby Yoda)</Text>
                <Text style={styles.productPrice}>R$103,99</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.productsEach}>
              <Image source={require('../../assets/scotlandboard.jpg')} style={styles.photo} />
              <View style={styles.productDetails}>
                <Text style={styles.productText}>Scotland Yard Maquina do Tempo </Text>
                <Text style={styles.productPrice}>R$84,99</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchContainer: {
    borderRadius: 10,
    borderColor: COLORS.darkBrown,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: "90%",
    borderWidth: 1,
    marginLeft: 20
  },
  input: {
    fontSize: 17,
    width: "100%",
  },
  categTitle: {
    color: COLORS.darkBrown,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoriesPhotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  categories: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  productsTitle: {
    color: COLORS.darkBrown,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 24,
  },
  productsEach: {
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 2,
    alignItems: 'center',
    width: '45%',
    height: 210,
    marginTop: 10
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.lightGreen,
    marginTop: 15
  },
  productDetails: {
    display: 'flex',
    width: '90%',
    justifyContent: 'flex-start',
  },
  productText: {
    marginBottom: 0,
    fontSize: 15,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 15
  },
  eachPhoto: {
    width: 170,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  photoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default HomeScreen;
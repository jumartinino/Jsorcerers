import React from "react";
import { Text, StyleSheet, View, SafeAreaView, StatusBar,TouchableOpacity} from "react-native";
import {  useForm } from 'react-hook-form';
import RadioForm from 'react-native-radio-form';
import COLORS from '../../components/Colors/Colors';

const mockData1 = [
    {
        label: 'Ruim',
        value: 'ruim'
    },
    {
        label: 'Regular',
        value: 'regular'
    },
    {
        label: 'Bom',
        value: 'bom'
    },
    {
        label: 'Ótimo',
        value: 'ótimo'
    },
    {
        label: 'Excelente',
        value: 'excelente'
    },
];
const mockData2 = [
    {
        label: 'Sim',
        value: 'sim'
    },
    {
        label: 'Não',
        value: 'não'
    },
];

export default function Avaliacao() {

  const {control, handleSubmit, getValues} = useForm({mode:'onTouched'});

   const _onSelect = ( item: any ) => {
      console.log(item);
    };

  return(
    <SafeAreaView>
      <StatusBar barStyle = "dark-content" hidden = {false}             backgroundColor = "white" translucent = {true}/>

      <View>
      <Text style={styles.header}>Avalie esse produto</Text>
      </View>

      <View style={styles.form1}>
        <Text style={styles.title}>Sua avaliação para o produto é:</Text>
          <RadioForm
              outerColor='black'
              innerColor='black'
              dataSource={mockData1}
              itemShowKey="label"
              itemRealKey="value"
              circleSize={20}
              initial={6}
              formHorizontal={false}
              labelHorizontal={true}
              onPress={(item: any) => this._onSelect(item)}
          />
      </View>

      <View style={styles.form2}>
        <Text style={styles.title}>Você recomendaria esse produto?</Text>
          <RadioForm
              outerColor='black'
              innerColor='black'
              dataSource={mockData2}
              itemShowKey="label"
              itemRealKey="value"
              circleSize={20}
              initial={3}
              formHorizontal={false}
              labelHorizontal={true}
              onPress={(item) => this._onSelect(item)}
          />
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.button} 
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTitle }>Avaliar</ Text>
          </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
} 

const styles= StyleSheet.create({
  header:{
    marginTop:80,
    color: COLORS.darkBrown, 
    fontSize: 35,
    fontWeight:'bold',
    textAlign: 'center',
  },
  form1:{
    marginTop:90,
    alignItems:'center',
  },
  form2:{
    marginTop:30,
    alignItems:'center',
  },
  title: {
    color: COLORS.darkBrown, 
    fontSize: 17,
    fontWeight:'bold',
  },
  buttonContainer:{
    alignItems:'center',
  },
  button: {
    height: 40,
    width: "90%",
    backgroundColor: COLORS.lightGreen,
    marginBottom: 10,
    marginTop: 50,
    borderRadius: 7
  },
  buttonTitle:{
    textAlign: 'center',
    marginTop: 5,
    color: COLORS.darkBrown,
    fontSize: 20,
    fontWeight:'bold'
  },
})
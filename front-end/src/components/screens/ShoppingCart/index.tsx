import React from 'react';
import {View,Text,FlatList,Button,SafeAreaView,processColor,StyleSheet,TouchableOpacity,StatusBar, ScrollView} from 'react-native';
import COLORS from '../../Colors'

const ListItem = ({ item, onSubtract, onAdd }) => (
  <View style={styles.bigContainer}>
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.name
    } >{item.name} - </Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>

      <View>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.bigButton}>

        <TouchableOpacity style={styles.button1} onPress={onSubtract}> <Text> - </Text></TouchableOpacity>
                <Text style={styles.quantity} > {item.quantity} </Text>
        <TouchableOpacity style={styles.button2} onPress={onAdd}> <Text> + </Text></TouchableOpacity>
      </View>

    </View>
  </View>
);

const styles=StyleSheet.create ({
  bigContainer:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center', 
    marginTop:15, 
    width:'90%', 
    alignSelf:'center'
  },
  container:{
    borderColor:COLORS.lightGreen,
    width:'100%', 
    borderWidth:2,

  },
  titulo:{ 
    flexDirection: 'row', 
    flex: 1, 
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft:5,

  },
  bigButton:{  
    marginRight:15,
    alignSelf:'flex-end',
    flexDirection: 'row', 
    marginLeft:15,
    marginTop:10,
  },
  name:{ 
    fontSize:18, 
  },
  price:{ 
    fontWeight:'bold', 
    fontSize:15, 
    alignItems:'flex-end',
    marginRight:10
    },
  button1:{
    backgroundColor:COLORS.lightGreen,
    paddingVertical:0,
    marginBottom:15,
    
  },
  button2:{
    backgroundColor:COLORS.lightGreen,
    marginBottom:15,
  },
  quantity:{
    marginBottom:5,

  },
  description:{
  marginLeft:5
},
  header:{
    backgroundColor: COLORS.lightGreen,
    paddingVertical:5,

  },
  headerTitle:{
    fontSize:30,
    alignSelf:'center',
    fontWeight:'bold',
    color:COLORS.darkBrown
  },
})

const Cart = () => {

  const [products, setProducts] = React.useState([
    { _id: 1, name: 'Item 1', price: 50, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { _id: 2, name: 'Item 2', price: 29, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { _id: 3, name: 'Item 3', price: 200, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { _id: 4, name: 'Item 4', price: 33, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { _id: 5, name: 'Item 5', price: 42, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
    { _id: 6, name: 'Item 6', price: 97, quantity: 0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
  ]);

  const onSubtract = (item, index) => {
    const nextProducts = [...products];
    nextProducts[index].quantity -= 1;
    setProducts(nextProducts);
  };

  const onAdd = (item, index) => {
    const nextProducts = [...products];
    nextProducts[index].quantity += 1;
    setProducts(nextProducts);
  };

  let totalQuantity = 0;
  let totalPrice = 0;
  products.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle = "dark-content" hidden = {false}             backgroundColor = "white" translucent = {true}/>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Carrinho</Text>
        </View>

        <ScrollView>
            <FlatList
              data={products}
              renderItem={({ item, index }) => (
                <ListItem
                  item={item}
                  onSubtract={() => onSubtract(item, index)}
                  onAdd={() => onAdd(item, index)}
                />
              )}
              keyExtractor={(item) => item._id}
            />
      </ScrollView>
       <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:10}}>
          <Text>Total: {totalPrice}</Text>
          <Text>Quantidade de itens: {totalQuantity}</Text>
       </View>
    </SafeAreaView>
  );
};

export default Cart;
import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import COLORS from '../../components/Colors/Colors'


const ListItem = ({ item, onSubtract, onAdd }) => (
  <View style={styles.bigContainer}>
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.name}>
          {item.name} -
        </Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>

      <View>
        <Text style={styles.description}>                 {item.description}
        </Text>
      </View>

      <View style={styles.bigButton}>

        <TouchableOpacity style={styles.button1} onPress={onSubtract}>
          <Text> - </Text>                   </TouchableOpacity>
        <Text style={styles.quantity}> {item.quantity} </Text>
        <TouchableOpacity style={styles.button2} onPress={onAdd}> <Text> + </Text></TouchableOpacity>
      </View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
    width: '90%',
    alignSelf: 'center'
  },
  container: {
    borderColor: COLORS.lightGreen,
    width: '100%',
    borderWidth: 2,

  },
  titulo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,

  },
  bigButton: {
    marginRight: 15,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'flex-end',
    marginRight: 10
  },
  button1: {
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 0,
    marginBottom: 15,

  },
  button2: {
    backgroundColor: COLORS.lightGreen,
    marginBottom: 15,
  },
  quantity: {
    marginBottom: 5
  },
  description: {
    marginLeft: 5
  },
  header: {
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 5,
    marginTop: 30
  },
  headerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: COLORS.darkBrown
  },
  name:{ 
    fontSize:18,
    fontWeight:'bold' 
  },
})

const Cart = () => {

  const [products, setProducts] = React.useState([
    { _id: 1, name: 'Grow - Scotland Yard Maquina do Tempo', price: 68, quantity: 0, description: ' Os jogadores leem juntos, em voz alta, um dos casos, para cada local existe uma dica, numerada, que pode ser consultada no livro de pistas. ' },

    { _id: 2, name: 'Jogo Perfil 6 - Grow ', price: 74, quantity: 0, description: ' CELEBRANDO 80 ANOS DE QUADRINHOS MARVEL!: Esta versão do jogo de tabuleiro Monopoly possui cartas, temática e detalhes inspirados na Marvel ' },

    { _id: 3, name: 'Demon Slayer: Kimetsu No Yaiba - 1', price: 28, quantity: 0, description: 'Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. ' },

    { _id: 4, name: 'Star Wars The Black Series The Child (Baby Yoda)', price: 46, quantity: 0, description: 'The child: os fãs se apaixonaram pelo personagem chamado de (baby yoda), e agora podem tê-los para si este personagem star wars the black series ' },

    { _id: 5, name: 'Figura de ação Jujutsu Kaisen Gojo Satoru ', price: 98, quantity: 0, description: 'Materiais de alta qualidade: feito de materiais ecológicos, luxuosos e bonitos e acabamento fino' },

    { _id: 6, name: 'Munchkin - Galápagos Jogos, Multicor, Medio', price: 120, quantity: 0, description: ' Um jogo de cartas para quem gosta de tretas, explore a Dungeon, trapaceie, pegue todo o tesouro e saia correndo! ' },
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text>Total: {totalPrice}</Text>
        <Text>Quantidade de itens: {totalQuantity}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CardapioScreen = () => {
  const cardapio = [
    { id: '1', nome: 'Prato 1', preco: 'R$ 20.00' },
    { id: '2', nome: 'Prato 2', preco: 'R$ 18.00' },
    { id: '3', nome: 'Prato 3', preco: 'R$ 25.00' },
    // Adicione mais pratos ao cardápio
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cardápio do Restaurante</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  nome: {
    fontSize: 18,
  },
  preco: {
    fontSize: 16,
    color: 'green',
  },
});

export default CardapioScreen;

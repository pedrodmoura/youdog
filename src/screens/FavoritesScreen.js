// src/screens/FavoritesScreen.js
import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import BreedCard from '../components/BreedCard';

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>🐾 Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BreedCard
            breed={item}
            onPress={() => navigation.navigate('Detalhes', { breed: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
});

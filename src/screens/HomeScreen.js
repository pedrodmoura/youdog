// src/screens/HomeScreen.js
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { fetchAllBreeds } from '../api/dogApi';
import BreedCard from '../components/BreedCard';
import getSizeCategory from '../utils/getSizeCategory';
import { ThemeContext } from '../contexts/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [breeds, setBreeds] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchAllBreeds().then(setBreeds);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setFiltered([]);
      return;
    }

    const result = breeds.filter((breed) => {
      const porte = getSizeCategory(breed);
      return (
        porte !== null &&
        breed.name.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFiltered(result);
  }, [query]);

  const handleFilter = (size) => {
    const result = breeds.filter((breed) => getSizeCategory(breed) === size);
    setFiltered(result);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />

      {/* Título principal no topo */}
      <Text style={[styles.header, { color: theme.text }]}>🐶 YOUDOG</Text>

      {/* Botão de alternância de tema */}
      <TouchableOpacity onPress={toggleTheme} style={styles.toggle}>
        <Text style={{ color: theme.primary }}>
          Alternar para modo {theme.mode === 'light' ? 'escuro' : 'claro'}
        </Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Buscar raça por nome"
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
        style={[
          styles.input,
          {
            borderColor: theme.primary,
            color: theme.text,
          },
        ]}
      />

      {/* Botões modernos de filtro */}
      <View style={styles.filters}>
        {['Pequeno', 'Médio', 'Grande'].map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => handleFilter(size)}
            style={[styles.filterButton, { backgroundColor: theme.primary }]}
          >
            <Text style={{ color: '#424242', fontWeight: 'bold' }}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  toggle: { marginBottom: 10, alignItems: 'center' },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    elevation: 2,
  },
});

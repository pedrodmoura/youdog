// src/screens/DetailsScreen.js
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Share,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { fetchBreedImage } from '../api/dogApi';
import { ThemeContext } from '../contexts/ThemeContext';

export default function DetailsScreen({ route }) {
  const { breed } = route.params;
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBreedImage(breed.id).then(setImage);
  }, []);

  const handleShare = async () => {
    await Share.share({
      message: `Confira a raça ${breed.name} no app YouDog!`,
    });
  };

  const isFav = favorites.find((b) => b.id === breed.id);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={[styles.name, { color: theme.text }]}>{breed.name}</Text>
        <Text style={[styles.info, { color: theme.text }]}>Origem: {breed.origin || 'Desconhecida'}</Text>
        <Text style={[styles.info, { color: theme.text }]}>Peso: {breed.weight.metric} kg</Text>
        <Text style={[styles.info, { color: theme.text }]}>Altura: {breed.height.metric} cm</Text>
        <Text style={[styles.info, { color: theme.text }]}>Expectativa de vida: {breed.life_span}</Text>
        <Text style={[styles.info, { color: theme.text }]}>Temperamento: {breed.temperament}</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={handleShare}>
            <Text style={[styles.button, { color: theme.primary }]}>📤 Compartilhar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(breed)}>
            <Text style={[styles.button, { color: theme.primary }]}>
              {isFav ? '★ Remover' : '☆ Favoritar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 250 },
  content: { padding: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { marginBottom: 6 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: { fontSize: 16 },
});

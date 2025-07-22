// src/components/BreedCard.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchBreedImage } from '../api/dogApi';

export default function BreedCard({ breed, onPress }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBreedImage(breed.id).then(setImage);
  }, []);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.name}>{breed.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: { width: 300, height: 200, borderRadius: 10 },
  name: { marginTop: 8, fontWeight: 'bold', fontSize: 16 }
});

// src/screens/InfoScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function InfoScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>ℹ️ Sobre o App</Text>
      <Text style={[styles.text, { color: theme.text }]}>Nome: YOUDOG</Text>
      <Text style={[styles.text, { color: theme.text }]}>Desenvolvedor: Seu Nome</Text>
      <Text style={[styles.text, { color: theme.text }]}>Email: seuemail@exemplo.com</Text>
      <Text style={[styles.text, { color: theme.text }]}>GitHub: github.com/seuusuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 4 },
});

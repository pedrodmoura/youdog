//// src/screens/StatsScreen.js
import React, { useContext } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import getSizeCategory from '../utils/getSizeCategory';

export default function StatsScreen() {
  const { favorites } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  const counts = { Pequeno: 0, Médio: 0, Grande: 0 };

  favorites.forEach((b) => {
    const porte = getSizeCategory(b);
    if (porte) counts[porte]++;
  });

  const data = Object.entries(counts).map(([key, value], i) => ({
    name: key,
    population: value,
    color: ['#FF6F00', '#FFA726', '#FFB74D'][i],
    legendFontColor: theme.text,
    legendFontSize: 14,
  }));

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>📊 Estatísticas de Favoritos</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 20}
        height={250}
        chartConfig={{
          backgroundColor: theme.background,
          backgroundGradientFrom: theme.background,
          backgroundGradientTo: theme.background,
          color: () => theme.primary,
        }}
        accessor="population"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

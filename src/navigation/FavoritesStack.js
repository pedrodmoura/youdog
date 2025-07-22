// src/navigation/FavoritesStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={FavoritesScreen} 
      options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

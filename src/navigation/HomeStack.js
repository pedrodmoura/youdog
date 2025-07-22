// src/navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Buscar Raças" component={HomeScreen}
      options={{ headerShown: false }} //uma vez que o título é escondido no screen de navegação
      />
      <Stack.Screen name="Detalhes" component={DetailsScreen}
      options={{ headerShown: false }} //uma vez que o título é escondido no screen de navegação
      />
    </Stack.Navigator>
  );
}

// src/navigation/DrawerNavigation.js
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';
import InfoScreen from '../screens/InfoScreen';
import { ThemeContext } from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitle: '', // 👈 Esconde o título da tela
        drawerStyle: {
          backgroundColor: theme.background,
        },
        drawerActiveTintColor: theme.primary,
        drawerInactiveTintColor: theme.text,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Favoritos" component={FavoritesStack} />
      <Drawer.Screen name="Informações" component={InfoScreen} />
    </Drawer.Navigator>
  );
}

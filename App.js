// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { FavoritesProvider } from './src/contexts/FavoritesContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

// src/contexts/ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const themes = {
  light: {
    mode: 'light',
    background: '#FDFEFE',
    text: '#2E2E2E',
    card: '#FFF3E0',
    primary: '#FF6F00',
    accent: '#FFA726',
  },
  dark: {
    mode: 'dark',
    background: '#1C1C1C',
    text: '#FAFAFA',
    card: '#2E2E2E',
    primary: '#FFB74D',
    accent: '#FFCC80',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

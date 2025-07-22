// src/contexts/FavoritesContext.js
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (breed) => {
    setFavorites((prev) =>
      prev.find((b) => b.id === breed.id)
        ? prev.filter((b) => b.id !== breed.id)
        : [...prev, breed]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

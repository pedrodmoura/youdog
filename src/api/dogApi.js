// src/api/dogApi.js
const BASE_URL = 'https://api.thedogapi.com/v1';

export async function fetchAllBreeds() {
  const res = await fetch(`${BASE_URL}/breeds`);
  return res.json();
}

export async function fetchBreedImage(breedId) {
  const res = await fetch(`${BASE_URL}/images/search?breed_id=${breedId}`);
  const data = await res.json();
  return data[0]?.url;
}

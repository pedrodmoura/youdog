// src/utils/getSizeCategory.js
export default function getSizeCategory(breed) {
  if (!breed.weight?.metric || breed.weight.metric.includes('NaN')) return null;

  const [minStr, maxStr] = breed.weight.metric.split(' - ');
  const min = parseFloat(minStr);
  const max = parseFloat(maxStr);

  if (isNaN(min) || isNaN(max)) return null;

  const avg = (min + max) / 2;
  if (avg < 10) return 'Pequeno';
  if (avg <= 25) return 'Médio';
  if (avg > 25) return 'Grande';

  return null;
}


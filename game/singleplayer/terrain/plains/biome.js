const PlainsTerrain = {
  isBiome({ humidityNoise, mountainNoise }) {
    return humidityNoise > -0.2 && mountainNoise < 0.55;
  },
  getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise }) {
    // flat but rolling
    const base = BASE_LAND_Y + continentalMask * 6;
    const hills = terrainNoise * 2.0; // small hills
    return base + hills;
  },
};
window.PlainsTerrain = PlainsTerrain;

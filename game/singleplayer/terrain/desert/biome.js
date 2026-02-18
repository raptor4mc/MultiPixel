const DesertTerrain = {
  isBiome({ climateNoise, moistureNoise, continentalNoise }) {
    return climateNoise > -0.12 && moistureNoise < 0.35 && continentalNoise > 0.3;
  },
  getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, duneNoise }) {
    const base = BASE_LAND_Y + continentalMask * 4 + 1;
    const dunes = duneNoise * 6 + Math.pow(duneNoise, 2.2) * 4; // add gentle dunes
    const hills = terrainNoise * 1.5;
    return base + hills + dunes;
  },
};
window.DesertTerrain = DesertTerrain;

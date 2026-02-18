const OakForestTerrain = {
  isBiome({ detailNoise, humidityNoise, distFromCenter, ISLAND_RADIUS }) {
    if (distFromCenter < ISLAND_RADIUS) return true;
    return detailNoise > -0.08 && humidityNoise > 0.05;
  },
  getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise, perlin, x, z }) {
    const base = BASE_LAND_Y + continentalMask * 10;
    const hills = terrainNoise * 5.5;
    const jagged = Math.pow(Math.max(0, erosionNoise), 1.8) * 3;
    return base + hills + jagged;
  },
};
window.OakForestTerrain = OakForestTerrain;

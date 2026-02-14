(function () {
  const DesertTerrain = {
    isBiome({ climateNoise, moistureNoise }) {
      return climateNoise > 0.2 && moistureNoise < 0.2;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise }) {
      return BASE_LAND_Y + 3 + continentalMask * 10 + terrainNoise * 5;
    },
  };
  window.DesertTerrain = DesertTerrain;
})();

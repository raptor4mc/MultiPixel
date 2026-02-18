(function () {
  const DesertTerrain = {
    isBiome({ climateNoise, moistureNoise, continentalNoise }) {
      return climateNoise > -0.12 && moistureNoise < 0.35 && continentalNoise > 0.3;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, duneNoise }) {
      return BASE_LAND_Y + 1 + continentalMask * 5 + terrainNoise * 2.2 + duneNoise * 5;
    },
  };
  window.DesertTerrain = DesertTerrain;
})();

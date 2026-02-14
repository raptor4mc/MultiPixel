(function () {
  const OceanTerrain = {
    isBiome({ climateNoise }) {
      return climateNoise <= -0.2;
    },
    getHeight({ SEA_LEVEL, terrainNoise }) {
      return SEA_LEVEL - 10 - terrainNoise * 5;
    },
  };
  window.OceanTerrain = OceanTerrain;
})();

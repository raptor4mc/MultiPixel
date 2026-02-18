(function () {

  const OceanTerrain = {
    isBiome({ continentalNoise, climateNoise }) {
      return continentalNoise < 0.36 || climateNoise < -0.58;
    },

    getHeight({ SEA_LEVEL, perlin, x, z }) {
      // Use base terrain for consistency
      const base = getBaseTerrain(x, z, perlin);

      // Depth calculation using deep noise and terrain noise
      const depth = 7 + base.continentalMask * 0.5 + base.terrainNoise * 4 + base.erosionNoise * 1.5;

      return SEA_LEVEL - depth;
    },
  };

  window.OceanTerrain = OceanTerrain;

})();

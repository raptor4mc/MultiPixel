(function () {

  const PlainsTerrain = {
    isBiome({ humidityNoise, mountainNoise }) {
      return humidityNoise > -0.2 && mountainNoise < 0.55;
    },

    getHeight({ BASE_LAND_Y, perlin, x, z }) {
      // Get the shared base terrain for smooth transitions
      const base = getBaseTerrain(x, z, perlin);

      // Base elevation from continental mask
      const baseHeight = BASE_LAND_Y + base.continentalMask * 6;

      // Gentle rolling hills
      const hills = base.terrainNoise * 2.0;

      // Small jaggedness from erosion
      const jagged = base.erosionNoise * 0.5;

      return baseHeight + hills + jagged;
    },
  };

  window.PlainsTerrain = PlainsTerrain;

})();

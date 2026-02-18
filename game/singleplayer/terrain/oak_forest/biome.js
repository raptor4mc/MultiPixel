(function () {

  const OakForestTerrain = {
    isBiome({ detailNoise, humidityNoise, distFromCenter, ISLAND_RADIUS }) {
      if (distFromCenter < ISLAND_RADIUS) return true;
      return detailNoise > -0.08 && humidityNoise > 0.05;
    },

    getHeight({ BASE_LAND_Y, perlin, x, z }) {
      // Get shared base terrain
      const base = getBaseTerrain(x, z, perlin);

      // Base elevation using continental mask
      const baseHeight = BASE_LAND_Y + base.continentalMask * 10;

      // Gentle rolling hills
      const hills = base.terrainNoise * 5.5;

      // Small jaggedness using erosion
      const jagged = Math.pow(Math.max(0, base.erosionNoise), 1.8) * 3;

      return baseHeight + hills + jagged;
    },
  };

  window.OakForestTerrain = OakForestTerrain;

})();

(function () {
  const PlainsTerrain = {
    isBiome({ humidityNoise, mountainNoise, distFromCenter, ISLAND_RADIUS }) {
      // Plains: moderately humid, mostly flat, extend close to center
      if (distFromCenter < ISLAND_RADIUS * 0.9) return true;
      return humidityNoise > -0.05 && mountainNoise < 0.55;
    },

    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise, detailNoise }) {
      // Adjusted to align with OakForest height while keeping plains flatter
      const continentalHeight = continentalMask * 9;       // closer to forest's 10
      const terrainVariation = terrainNoise * 5;           // more like forest
      const erosionEffect = erosionNoise * 1.3;            // smoother erosion
      const smallBumps = detailNoise * 1.5;               // subtle randomness for realism

      return BASE_LAND_Y + continentalHeight + terrainVariation - erosionEffect + smallBumps;
    },
  };

  window.PlainsTerrain = PlainsTerrain;
})();

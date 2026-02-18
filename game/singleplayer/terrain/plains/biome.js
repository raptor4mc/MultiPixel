(function () {
  const PlainsTerrain = {
    isBiome({ humidityNoise, mountainNoise }) {
      // Plains: moderately humid, mostly flat
      return humidityNoise > -0.2 && mountainNoise < 0.55;
    },

    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise }) {
      // Smoother height variation using slight weighted adjustments
      const continentalHeight = continentalMask * 6;
      const terrainVariation = terrainNoise * 2.7;  // slightly more variation
      const erosionEffect = erosionNoise * 1.5;     // same as before

      return BASE_LAND_Y + 3 + continentalHeight + terrainVariation - erosionEffect;
    },
  };

  window.PlainsTerrain = PlainsTerrain;
})();

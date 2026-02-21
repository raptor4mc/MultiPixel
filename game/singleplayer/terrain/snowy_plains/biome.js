(function () {
  const SnowyPlainsTerrain = {
    isBiome({ tempNoise, humidityNoise, mountainNoise }) {
      return tempNoise < -0.34 && humidityNoise > -0.12 && mountainNoise < 0.58;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, erosionNoise }) {
      return BASE_LAND_Y + continentalMask * 6.2 + terrainNoise * 1.9 - erosionNoise * 1.1;
    },
  };

  window.SnowyPlainsTerrain = SnowyPlainsTerrain;
})();

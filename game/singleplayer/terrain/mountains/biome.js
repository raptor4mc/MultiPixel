(function () {
  const MountainsTerrain = {
    isBiome({ mountainNoise, climateNoise }) {
      return mountainNoise > 0.62 && climateNoise > -0.15;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, ridgeNoise }) {
      return BASE_LAND_Y + 10 + continentalMask * 14 + terrainNoise * 14 + ridgeNoise * 8;
    },
  };
  window.MountainsTerrain = MountainsTerrain;
})();

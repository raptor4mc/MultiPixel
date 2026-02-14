(function () {
  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise }) {
      return mountainNoise > 0.62 && continentalNoise > 0.42;
    },
    getHeight({ BASE_LAND_Y, continentalMask, ridgeNoise, terrainNoise, peakNoise }) {
      const peaks = Math.max(0, peakNoise - 0.45) * 42;
      return BASE_LAND_Y + 20 + continentalMask * 20 + ridgeNoise * 24 + terrainNoise * 8 + peaks;
    },
  };
  window.MountainsTerrain = MountainsTerrain;
})();

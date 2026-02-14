(function () {
  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.6 && continentalNoise > 0.4 && climateNoise > -0.35;
    },
    getHeight({ BASE_LAND_Y, continentalMask, ridgeNoise, terrainNoise, peakNoise, erosionNoise, cliffNoise, valleyNoise }) {
      const macroUplift = 14 + continentalMask * 24;
      const ridgeField = ridgeNoise * 18;
      const alpinePeaks = Math.max(0, peakNoise - 0.5) * 54;
      const cliffBands = Math.max(0, cliffNoise - 0.55) * 20;
      const valleyCut = valleyNoise * 15 + erosionNoise * 10;
      const roughDetail = terrainNoise * 6;
      return BASE_LAND_Y + macroUplift + ridgeField + alpinePeaks + cliffBands + roughDetail - valleyCut;
    },
  };
  window.MountainsTerrain = MountainsTerrain;
})();

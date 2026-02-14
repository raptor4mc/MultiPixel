(function () {
  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.62 && continentalNoise > 0.43 && climateNoise > -0.42;
    },
    getHeight({ BASE_LAND_Y, continentalMask, ridgeNoise, terrainNoise, peakNoise, erosionNoise, cliffNoise, valleyNoise }) {
      const baseMassif = 12 + continentalMask * 22;
      const ridgedSpine = Math.pow(Math.max(0, ridgeNoise), 1.6) * 34;
      const alpinePeaks = Math.pow(Math.max(0, peakNoise - 0.35), 2.0) * 95;
      const cliffFaces = Math.max(0, cliffNoise - 0.58) * 14;
      const valleyCarve = valleyNoise * 7 + erosionNoise * 5;
      const roughness = terrainNoise * 4;
      return BASE_LAND_Y + baseMassif + ridgedSpine + alpinePeaks + cliffFaces + roughness - valleyCarve;
    },
  };
  window.MountainsTerrain = MountainsTerrain;
})();

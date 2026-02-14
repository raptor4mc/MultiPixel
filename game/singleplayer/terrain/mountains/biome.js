(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }

  // Approximate cubic-spline-style response for mountain uplift.
  function mountainFactor(continentalness, erosion, ridges) {
    const inland = Math.max(0, (continentalness + 0.15) / 0.85);
    const erodeInv = Math.max(0, 1 - (erosion + 1) * 0.5);
    const ridgeBoost = Math.max(0, ridges);

    const broadUplift = lerp(6, 28, inland);
    const steepness = lerp(0.4, 1.0, erodeInv);
    const peakGain = lerp(4, 46, Math.pow(ridgeBoost, 1.7));
    return broadUplift * steepness + peakGain;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.6 && continentalNoise > 0.42 && climateNoise > -0.45;
    },
    getHeight({ BASE_LAND_Y, continentalness, erosion, ridges, terrainNoise, cliffNoise, peakNoise }) {
      const uplift = mountainFactor(continentalness, erosion, ridges);
      const cliffFaces = Math.max(0, cliffNoise - 0.56) * 16;
      const needlePeaks = Math.max(0, peakNoise - 0.52) * 44;
      const roughness = terrainNoise * 4;
      return BASE_LAND_Y + uplift + cliffFaces + needlePeaks + roughness;
    },
  };

  window.MountainsTerrain = MountainsTerrain;
})();

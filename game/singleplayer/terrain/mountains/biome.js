(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }

  function splineMountainFactor(continentalness, erosion, ridges) {
    const inland = Math.max(0, Math.min(1, (continentalness + 0.2) / 0.9));
    const erosionInv = Math.max(0, Math.min(1, 1 - (erosion + 1) * 0.5));
    const ridgeShape = Math.max(0, Math.min(1, ridges));

    const continentalLift = lerp(8, 34, Math.pow(inland, 1.15));
    const erosionSharpness = lerp(0.35, 1.35, Math.pow(erosionInv, 1.2));
    const ridgeLift = lerp(2, 54, Math.pow(ridgeShape, 1.85));

    return continentalLift * erosionSharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.62 && continentalNoise > 0.43 && climateNoise > -0.45;
    },

    getHeight({
      BASE_LAND_Y,
      continentalness,
      erosion,
      ridges,
      terrainNoise,
      cliffNoise,
      peakNoise,
      peaksValleys,
      jaggedNoise
    }) {
      // Base mountain uplift
      const uplift = splineMountainFactor(continentalness, erosion, ridges);

      // Curved uplift for tall peaks
      const curvedUplift = Math.pow(uplift / 60, 1.7) * 100;

      // Ridge shaping
      let ridgeShape = 1 - Math.abs(peaksValleys);
      ridgeShape = Math.pow(ridgeShape, 2.2) * 65;

      // Valley lowering (erosion + negative peaksValleys)
      const valleyDip = Math.pow(Math.max(0, -peaksValleys), 1.5) * 20;
      ridgeShape -= valleyDip;

      // Peaks multiply to create sharp tops
      const peakFactor = Math.pow(Math.max(0, peakNoise - 0.55), 2.3) * 2.2;

      // Cliffs
      const cliffs = Math.max(0, cliffNoise - 0.65) * 20;

      // Roughness
      const roughness = terrainNoise * 4.5;

      // Optional: erosion effect lowering valleys
      const erosionEffect = erosion * 5; // now defined here

      // Final height
      const height =
        BASE_LAND_Y +
        (curvedUplift * (1 + peakFactor)) +
        ridgeShape +
        cliffs +
        roughness -
        erosionEffect; // correctly applied

      return height;
    },
  };

  window.MountainsTerrain = MountainsTerrain;
})();

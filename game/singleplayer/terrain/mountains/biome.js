(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smoothstep(edge0, edge1, x) {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  function mountainFactor(cont, erosion, ridges) {
    const inland = Math.max(0, Math.min(1, (cont + 0.2) / 0.9));
    const erosionInv = Math.max(0, Math.min(1, 1 - (erosion + 1) * 0.5));
    const ridgeShape = Math.max(0, Math.min(1, ridges));
    const continentalLift = lerp(8, 34, Math.pow(inland, 1.2));
    const erosionSharpness = lerp(0.35, 1.35, Math.pow(erosionInv, 1.2));
    const ridgeLift = lerp(2, 54, Math.pow(ridgeShape, 2));
    return continentalLift * erosionSharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.55 && continentalNoise > 0.35 && climateNoise > -0.5;
    },

    getHeight({ BASE_LAND_Y, continentalness, erosion, ridges, terrainNoise, cliffNoise, peakNoise, peaksValleys }) {
      // --- Biome base heights ---
      const PLAINS_Y = BASE_LAND_Y;
      const HILLS_Y = BASE_LAND_Y + 15;
      const HIGH_HILLS_Y = BASE_LAND_Y + 35;
      const MOUNTAIN_Y = BASE_LAND_Y + 60;

      // normalize continentalness -1..1 → 0..1
      const continentalNorm = (continentalness + 1) * 0.5;

      // ridge, peaks, cliffs, roughness
      const uplift = mountainFactor(continentalNorm, erosion, ridges);
      const curvedUplift = Math.pow(uplift / 50, 1.6) * 120;

      let ridgeShape = Math.pow(1 - Math.abs(peaksValleys), 2.2) * 80;
      ridgeShape -= Math.pow(Math.max(0, -peaksValleys), 2) * 40;

      const peakFactor = Math.pow(Math.max(0, peakNoise - 0.5), 3) * 20;
      const cliffs = Math.pow(Math.max(0, cliffNoise - 0.6), 3) * 60;
      const roughness = terrainNoise * 10;
      const erosionEffect = erosion * 5;

      const rawMountainHeight = MOUNTAIN_Y + curvedUplift + ridgeShape + peakFactor + cliffs + roughness - erosionEffect;

      // multi-stage blending: plains → hills → higher hills → mountains
      let height;
      if (continentalNorm < 0.45) {
        height = PLAINS_Y + terrainNoise * 5;
      } else if (continentalNorm < 0.6) {
        const t = smoothstep(0.45, 0.6, continentalNorm);
        height = lerp(PLAINS_Y + terrainNoise * 5, HILLS_Y + terrainNoise * 5, t);
      } else if (continentalNorm < 0.75) {
        const t = smoothstep(0.6, 0.75, continentalNorm);
        height = lerp(HILLS_Y + terrainNoise * 5, HIGH_HILLS_Y + terrainNoise * 5, t);
      } else {
        const t = smoothstep(0.75, 0.95, continentalNorm);
        height = lerp(HIGH_HILLS_Y + terrainNoise * 5, rawMountainHeight, t);
      }

      return height;
    }
  };

  window.MountainsTerrain = MountainsTerrain;
})();

(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function smoothstep(edge0, edge1, x) {
    let t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  // Clean but strong biome transition
  function biomeBlendFactor(continentalness) {
    return smoothstep(0.62, 0.78, continentalness);
  }

  function mountainMass(continentalness, erosion, ridges) {

    // Smooth inland ramp (prevents collapse zones)
    const inland = smoothstep(0.62, 0.85, continentalness);

    // Fast rise from plains
    const rise = Math.pow(inland, 1.2);

    // Slight peak compression (avoids flat tops)
    const peakCompression = 1 - Math.pow(1 - inland, 2.0);

    const profile = rise * peakCompression;

    // Main vertical lift
    const baseMass = profile * 190;

    // Steepness control
    const lowErosion = 1 - clamp((erosion + 1) * 0.5, 0, 1);
    const sharpness = lerp(0.9, 1.5, Math.pow(lowErosion, 1.1));

    // Ridge spine (not whole mountain)
    const ridgeLift =
      profile * Math.pow(clamp(ridges, 0, 1), 2.0) * 70;

    return baseMass * sharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise }) {
      // Relaxed slightly so mountains actually appear
      return mountainNoise > 0.6 && continentalNoise > 0.6;
    },

    getHeight({
      BASE_LAND_Y,
      continentalness,
      erosion,
      ridges,
      terrainNoise,
      peakNoise,
      cliffNoise
    }) {

      const biomeBlend = biomeBlendFactor(continentalness);

      const baseHeight = BASE_LAND_Y + terrainNoise * 6;

      if (biomeBlend <= 0) {
        return baseHeight;
      }

      const mass = mountainMass(continentalness, erosion, ridges);

      // Rare high peaks
      const peakBoost =
        Math.pow(clamp(peakNoise - 0.7, 0, 1), 3.0) * 120;

      // Controlled cliffs
      const cliffs =
        Math.pow(clamp(cliffNoise - 0.75, 0, 1), 2.0) * 50;

      const mountainHeight =
        BASE_LAND_Y +
        mass +
        peakBoost +
        cliffs +
        terrainNoise * 4;

      const finalHeight = lerp(
        baseHeight,
        mountainHeight,
        Math.pow(biomeBlend, 1.3)
      );

      // SAFETY FLOOR (prevents bedrock void columns)
      return Math.max(BASE_LAND_Y - 5, finalHeight);
    }
  };

  window.MountainsTerrain = MountainsTerrain;
})();

(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function smoothstep(edge0, edge1, x) {
    let t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  // Much more aggressive mountain separation
  function biomeBlendFactor(continentalness) {
    // Plains handled elsewhere
    // Only strong inland becomes mountain
    return smoothstep(0.55, 0.75, continentalness);
  }

  function mountainMass(continentalness, erosion, ridges) {
    const inland = smoothstep(0.55, 1.0, continentalness);
    const lowErosion = 1 - clamp((erosion + 1) * 0.5, 0, 1);

    // Big landmass control (prevents hill spam)
    const baseMass = Math.pow(inland, 2.4) * 140;

    // Erosion controls steepness only, not height spam
    const sharpness = lerp(0.6, 1.4, Math.pow(lowErosion, 1.3));

    // Ridges only enhance real mountains
    const ridgeLift = Math.pow(clamp(ridges, 0, 1), 2.2) * 60;

    return baseMass * sharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise }) {
      // Make mountains rarer and stronger
      return mountainNoise > 0.65 && continentalNoise > 0.5;
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
      if (biomeBlend <= 0) {
        // fallback to base terrain if not fully mountainous
        return BASE_LAND_Y + terrainNoise * 8;
      }

      const mass = mountainMass(continentalness, erosion, ridges);

      // Rare true peaks (noise-based, not random!)
      const peakBoost =
        Math.pow(clamp(peakNoise - 0.6, 0, 1), 2.5) * 90;

      // Cliffs only in high regions
      const cliffs =
        Math.pow(clamp(cliffNoise - 0.7, 0, 1), 1.8) * 40;

      // Small-scale surface variation (kept low)
      const surface = terrainNoise * 6;

      const mountainHeight =
        BASE_LAND_Y +
        mass +
        peakBoost +
        cliffs +
        surface;

      // Smooth transition from base land to mountain
      return lerp(
        BASE_LAND_Y + terrainNoise * 6,
        mountainHeight,
        biomeBlend
      );
    }
  };

  window.MountainsTerrain = MountainsTerrain;
})();

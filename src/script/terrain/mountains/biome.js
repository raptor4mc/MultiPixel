(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function smoothstep(edge0, edge1, x) {
    let t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }

  // VERY sharp biome gate
  function biomeBlendFactor(continentalness) {
    // Almost binary switch
    return smoothstep(0.68, 0.74, continentalness);
  }

function mountainMass(continentalness, erosion, ridges) {

  // Hard inland trigger
  const inland = clamp((continentalness - 0.65) * 3.0, 0, 1);

  // Mountain profile curve (THIS creates /\ shape)
  const profile = Math.sin(inland * Math.PI);

  // Strong but natural vertical lift
  const baseMass = profile * 220;

  // Erosion controls steepness
  const lowErosion = 1 - clamp((erosion + 1) * 0.5, 0, 1);
  const sharpness = lerp(0.8, 1.5, Math.pow(lowErosion, 1.2));

  // Ridges enhance the spine, not the whole mountain
  const ridgeLift =
    profile * Math.pow(clamp(ridges, 0, 1), 2.0) * 80;

  return baseMass * sharpness + ridgeLift;
}

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise }) {
      // Much stricter spawn condition
      return mountainNoise > 0.72 && continentalNoise > 0.68;
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
        return BASE_LAND_Y + terrainNoise * 6;
      }

      const mass = mountainMass(continentalness, erosion, ridges);

      // RARE extreme peaks
      const peakBoost =
        Math.pow(clamp(peakNoise - 0.65, 0, 1), 3.5) * 180;

      // Hard cliffs
      const cliffs =
        Math.pow(clamp(cliffNoise - 0.75, 0, 1), 2.5) * 80;

      // Minimal surface noise
      const surface = terrainNoise * 4;

      const mountainHeight =
        BASE_LAND_Y +
        mass +
        peakBoost +
        cliffs +
        surface;

      // MUCH sharper transition
      return lerp(
        BASE_LAND_Y + terrainNoise * 4,
        mountainHeight,
        Math.pow(biomeBlend, 1.5)
      );
    }
  };

  window.MountainsTerrain = MountainsTerrain;
})();

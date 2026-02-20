(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smoothstep(edge0, edge1, x) {
    let t = Math.clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }
  Math.clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function biomeBlendFactor(continentalness) {
    if (continentalness < 0.4) return 0;       // plains
    if (continentalness < 0.6) return 0.5;     // hills
    return 1;                                   // mountains
}

  function mountainFactor(cont, erosion, ridges) {
    const inland = Math.clamp((cont + 0.2) / 0.9, 0, 1);
    const erosionInv = Math.clamp(1 - (erosion + 1) * 0.5, 0, 1);
    const ridgeShape = Math.clamp(ridges, 0, 1);

    const continentalLift = lerp(8, 60, Math.pow(inland, 1.2));
    const erosionSharpness = lerp(0.35, 1.35, Math.pow(erosionInv, 1.2));
    const ridgeLift = lerp(2, 54, Math.pow(ridgeShape, 2));

    return continentalLift * erosionSharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.65 && continentalNoise > 0.35 && climateNoise > -0.2;
    },

    getHeight({ BASE_LAND_Y, continentalness, erosion, ridges, terrainNoise, cliffNoise, peakNoise, peaksValleys, jaggedNoise }) {
      const uplift = mountainFactor(continentalness, erosion, ridges);
      const curvedUplift = Math.pow(uplift / 50, 1.35) * 150;

      let ridgeShape = Math.pow(1 - Math.abs(peaksValleys), 1.6) * 70;
      ridgeShape -= Math.pow(Math.max(0, -peaksValleys), 1.5) * 20;

      const peakFactor = Math.pow(Math.max(0, peakNoise - 0.45), 2.1) * 40;
      const peakRandomness = Math.pow(Math.random(), 3) * 25; // rarer extreme peaks
      const cliffs = Math.max(0, cliffNoise - 0.65) * 18;
      const roughness = terrainNoise * 5;
      const erosionEffect = erosion * 5;

      // Smooth biome blending
      const biomeBlend = biomeBlendFactor(continentalness);
      
      const height = BASE_LAND_Y +
        (curvedUplift * (1 + peakFactor)) +
        ridgeShape +
        cliffs +
        roughness -
        erosionEffect +
        peakRandomness;

      return lerp(BASE_LAND_Y + terrainNoise * 10, height, biomeBlend );
    }
  };

  window.MountainsTerrain = MountainsTerrain;
})();

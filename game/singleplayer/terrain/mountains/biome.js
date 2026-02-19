(function () {
  function lerp(a, b, t) { return a + (b - a) * t; }
  function smoothstep(edge0, edge1, x) {
    let t = Math.clamp((x - edge0) / (edge1 - edge0), 0, 1);
    return t * t * (3 - 2 * t);
  }
  Math.clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function mountainFactor(cont, erosion, ridges) {
    const inland = Math.clamp((cont + 0.2) / 0.9, 0, 1);
    const erosionInv = Math.clamp(1 - (erosion + 1) * 0.5, 0, 1);
    const ridgeShape = Math.clamp(ridges, 0, 1);

    const continentalLift = lerp(8, 34, Math.pow(inland, 1.2));
    const erosionSharpness = lerp(0.35, 1.35, Math.pow(erosionInv, 1.2));
    const ridgeLift = lerp(2, 54, Math.pow(ridgeShape, 2));

    return continentalLift * erosionSharpness + ridgeLift;
  }

  const MountainsTerrain = {
    isBiome({ mountainNoise, continentalNoise, climateNoise }) {
      return mountainNoise > 0.55 && continentalNoise > 0.35 && climateNoise > -0.5;
    },

getHeight({ BASE_LAND_Y, continentalness, erosion, ridges, terrainNoise, cliffNoise, peakNoise, peaksValleys, jaggedNoise }) {
  // Base mountain offset
  const BASE_MOUNTAIN_Y = BASE_LAND_Y + 60; // 60 blocks above plains

  // Base ridge uplift
  const uplift = mountainFactor(continentalness, erosion, ridges);
  const curvedUplift = Math.pow(uplift / 50, 1.6) * 120; // increase scaling

  // Ridge shaping
  let ridgeShape = Math.pow(1 - Math.abs(peaksValleys), 2.2) * 80;
  ridgeShape -= Math.pow(Math.max(0, -peaksValleys), 2) * 40;

  // Peak exaggeration
  const peakFactor = Math.pow(Math.max(0, peakNoise - 0.5), 3) * 20;

  // Cliffs
  const cliffs = Math.pow(Math.max(0, cliffNoise - 0.6), 3) * 60;

  // Roughness
  const roughness = terrainNoise * 10;

  // Erosion lowering valleys
  const erosionEffect = erosion * 5;

  // Smooth blending only near plains edges
  const biomeBlend = smoothstep(0.5, 0.7, continentalness); // 0 = plain, 1 = full mountain

  // Final height
  const mountainHeight = BASE_MOUNTAIN_Y + curvedUplift + ridgeShape + peakFactor + cliffs + roughness - erosionEffect;

  // Blend only edges; otherwise full mountain stands above plains
  return lerp(BASE_LAND_Y + terrainNoise * 5, mountainHeight, biomeBlend);
}


  window.MountainsTerrain = MountainsTerrain;
})();

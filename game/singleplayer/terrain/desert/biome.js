(function () {

  const DesertTerrain = {
    isBiome({ climateNoise, moistureNoise, continentalNoise }) {
      return climateNoise > -0.12 && moistureNoise < 0.35 && continentalNoise > 0.3;
    },

    getHeight({ BASE_LAND_Y, perlin, x, z, duneNoise = 0 }) {
      // Use shared base terrain for smooth transitions
      const base = getBaseTerrain(x, z, perlin);

      // Base elevation from continental mask
      const baseHeight = BASE_LAND_Y + base.continentalMask * 4 + 1;

      // Small terrain hills
      const hills = base.terrainNoise * 1.5;

      // Sand dunes — can pass external duneNoise or generate small noise from Perlin
      const dunesValue = duneNoise || base.terrainNoise * 0.5; // fallback
      const dunes = dunesValue * 6 + Math.pow(dunesValue, 2.2) * 4;

      return baseHeight + hills + dunes;
    },
  };

  window.DesertTerrain = DesertTerrain;

})();

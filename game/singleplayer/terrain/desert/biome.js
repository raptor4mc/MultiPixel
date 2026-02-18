(function () {
  const DesertTerrain = {
    // Biome thresholds
    CLIMATE_MIN: -0.12,
    MOISTURE_MAX: 0.35,
    CONTINENTAL_MIN: 0.3,

    // Height modifiers
    BASE_HEIGHT_OFFSET: 1,
    CONTINENTAL_HEIGHT_MULTIPLIER: 5,
    TERRAIN_HEIGHT_MULTIPLIER: 2.2,
    DUNE_HEIGHT_MULTIPLIER: 5,
    DUNE_VARIATION: 1.5, // extra variation for rolling dunes

    // Determines if this biome is a desert
    isBiome({ climateNoise, moistureNoise, continentalNoise }) {
      return (
        climateNoise > this.CLIMATE_MIN &&
        moistureNoise < this.MOISTURE_MAX &&
        continentalNoise > this.CONTINENTAL_MIN
      );
    },

    // Calculates smooth desert height, blending with neighboring biomes
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise, duneNoise, neighborHeights = [] }) {
      // Base desert height
      let height =
        BASE_LAND_Y +
        this.BASE_HEIGHT_OFFSET +
        continentalMask * this.CONTINENTAL_HEIGHT_MULTIPLIER +
        terrainNoise * this.TERRAIN_HEIGHT_MULTIPLIER +
        Math.sin(duneNoise * Math.PI * 2) * this.DUNE_HEIGHT_MULTIPLIER;

      // Smooth edges: average with neighbor biome heights if provided
      if (neighborHeights.length > 0) {
        const neighborAverage = neighborHeights.reduce((a, b) => a + b, 0) / neighborHeights.length;
        // Smooth blend factor (0.0 = no blend, 1.0 = fully blended)
        const blendFactor = 0.5;
        height = height * (1 - blendFactor) + neighborAverage * blendFactor;
      }

      return height;
    },
  };

  window.DesertTerrain = DesertTerrain;
})();

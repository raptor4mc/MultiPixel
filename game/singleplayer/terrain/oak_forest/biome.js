(function () {
  const OakForestTerrain = {
    isBiome({ detailNoise, distFromCenter, ISLAND_RADIUS }) {
      if (distFromCenter < ISLAND_RADIUS) return true;
      return detailNoise > 0.1;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise }) {
      return BASE_LAND_Y + continentalMask * 12 + terrainNoise * 7;
    },
  };
  window.OakForestTerrain = OakForestTerrain;
})();

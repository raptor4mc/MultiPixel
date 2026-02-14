(function () {
  const PlainsTerrain = {
    isBiome() {
      return true;
    },
    getHeight({ BASE_LAND_Y, continentalMask, terrainNoise }) {
      return BASE_LAND_Y + continentalMask * 8 + terrainNoise * 2;
    },
  };
  window.PlainsTerrain = PlainsTerrain;
})();

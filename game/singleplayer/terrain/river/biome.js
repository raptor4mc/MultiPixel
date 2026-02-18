(function () {

  const RiverTerrain = {
    getMask({ perlin, x, z }) {
      const scale = 0.001;
      const bendScale = 0.002;

      // Bend the river path slightly
      const bend = perlin.noise2D(x * bendScale + 500, z * bendScale + 500) * 0.5;

      // River path with domain-warping style
      const path = perlin.noise2D(x * scale + bend, z * scale);

      const thickness = 0.08;
      return 1.0 - Math.min(1.0, Math.abs(path) / thickness);
    },

    applyHeight({ height, riverInfluence, SEA_LEVEL }) {
      if (riverInfluence <= 0.1) return height;

      // Deeper rivers where influence is strong
      const riverDepth = riverInfluence * 15;

      // Clamp river to at least 5 blocks below sea level
      return Math.max(height - riverDepth, SEA_LEVEL - 5);
    },

    getHeight({ BASE_LAND_Y, perlin, x, z, SEA_LEVEL }) {
      // Get base terrain
      const base = getBaseTerrain(x, z, perlin);

      // Initial height from base terrain
      let height = BASE_LAND_Y + base.continentalMask * 6 + base.terrainNoise * 2;

      // River mask
      const influence = this.getMask({ perlin, x, z });

      // Apply river depth
      return this.applyHeight({ height, riverInfluence: influence, SEA_LEVEL });
    }
  };

  window.RiverTerrain = RiverTerrain;

})();

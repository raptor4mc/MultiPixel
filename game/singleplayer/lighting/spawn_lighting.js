(function () {
  function create({ getBlockType, isLiquid, CHUNK_HEIGHT }) {
    const EMISSIVE_BLOCK_LIGHT = {
      22: 14, // torch
    };

    // Alpha-style: full sky light only if nothing blocks above
    function isOpenToSky(wx, wy, wz) {
      for (let y = wy + 1; y < CHUNK_HEIGHT; y++) {
        const b = getBlockType(wx, y, wz);
        if (b !== 0 && !isLiquid(b)) return false;
      }
      return true;
    }

    function getSkyLightLevel(wx, wy, wz) {
      return isOpenToSky(wx, wy, wz) ? 15 : 0;
    }

    // Alpha torch lighting
    function getBlockLightLevel(wx, wy, wz) {
      let best = 0;
      const r = 14; // max torch reach in Alpha

      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dz = -r; dz <= r; dz++) {

            const b = getBlockType(wx + dx, wy + dy, wz + dz);
            const emit = EMISSIVE_BLOCK_LIGHT[b] || 0;
            if (!emit) continue;

            const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
            const val = emit - dist;

            if (val > best) best = val;
          }
        }
      }

      return Math.max(0, best);
    }

    function getCombinedLight(wx, wy, wz) {
      return Math.max(
        getSkyLightLevel(wx, wy, wz),
        getBlockLightLevel(wx, wy, wz)
      );
    }

    return {
      isOpenToSky,
      getSkyLightLevel,
      getBlockLightLevel,
      getCombinedLight
    };
  }

  window.SpawnLighting = { create };
})();

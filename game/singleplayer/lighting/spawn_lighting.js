(function () {
  function create({ getBlockType, isLiquid, CHUNK_HEIGHT }) {
    const EMISSIVE_BLOCK_LIGHT = {
      22: 14, // torch
    };

    // Is the block open to the sky? (no blocks above)
    function isOpenToSky(wx, wy, wz) {
      for (let y = CHUNK_HEIGHT - 1; y > wy; y--) {
        const b = getBlockType(wx, y, wz);
        if (b !== 0 && !isLiquid(b)) return false;
      }
      return true;
    }

    // Sky light like Beta: max 15, decreases by 1 per block down until blocked
    function getSkyLightLevel(wx, wy, wz) {
      if (isOpenToSky(wx, wy, wz)) return 15;

      let light = 0;
      for (let y = CHUNK_HEIGHT - 1; y > wy; y--) {
        const b = getBlockType(wx, y, wz);
        if (b !== 0 && !isLiquid(b)) {
          light = 0; // blocked
          break;
        } else {
          light = Math.min(15, light + 1); // gradual falloff
        }
      }
      return light;
    }

    // Block light like Beta: linear falloff, Manhattan distance
    function getBlockLightLevel(wx, wy, wz) {
      let best = 0;
      const r = 4; // radius
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dz = -r; dz <= r; dz++) {
            const b = getBlockType(wx + dx, wy + dy, wz + dz);
            const emit = EMISSIVE_BLOCK_LIGHT[b] || 0;
            if (!emit) continue;

            const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz); // Manhattan distance
            const val = Math.max(0, emit - dist);
            if (val > best) best = val;
          }
        }
      }
      return best;
    }

    // Combine sky and block light
    function getCombinedLight(wx, wy, wz) {
      return Math.max(getSkyLightLevel(wx, wy, wz), getBlockLightLevel(wx, wy, wz));
    }

    return { isOpenToSky, getSkyLightLevel, getBlockLightLevel, getCombinedLight };
  }

  window.SpawnLighting = { create };
})();

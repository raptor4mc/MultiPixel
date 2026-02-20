(function () {
  function create({ getBlockType, setBlockLight, getBlockLight, isSolid, CHUNK_HEIGHT }) {

    // Emissive blocks and their light levels
    const EMISSIVE_BLOCK_LIGHT = {
      22: 14, // Torch
      33: 15  // Lava
    };

    // Max light level
    const MAX_LIGHT = 15;

    // Directions for neighbors
    const DIRS = [
      [1,0,0], [-1,0,0],
      [0,1,0], [0,-1,0],
      [0,0,1], [0,0,-1]
    ];

    // Check if a block has direct sky access
    function isOpenToSky(wx, wy, wz) {
      for (let y = CHUNK_HEIGHT - 1; y > wy; y--) {
        const b = getBlockType(wx, y, wz);
        if (b !== 0 && isSolid(b)) return false;
      }
      return true;
    }

    // Get sky light (simple top-down propagation)
    function getSkyLightLevel(wx, wy, wz) {
      return isOpenToSky(wx, wy, wz) ? MAX_LIGHT : 0;
    }

    // Propagate block light using BFS
    function propagateBlockLight(startX, startY, startZ) {
      const visited = new Set();
      const queue = [];
      const emit = EMISSIVE_BLOCK_LIGHT[getBlockType(startX, startY, startZ)];
      if (!emit) return;

      queue.push({ x: startX, y: startY, z: startZ, light: emit });
      const key = (x,y,z) => `${x},${y},${z}`;

      while (queue.length) {
        const { x, y, z, light } = queue.shift();
        const currentKey = key(x,y,z);

        if (visited.has(currentKey)) continue;
        visited.add(currentKey);

        const existingLight = getBlockLight(x, y, z) || 0;
        if (light <= existingLight) continue;

        setBlockLight(x, y, z, light);

        if (light <= 1) continue; // stop propagation

        for (const [dx, dy, dz] of DIRS) {
          const nx = x + dx, ny = y + dy, nz = z + dz;
          const neighborBlock = getBlockType(nx, ny, nz);
          if (!isSolid(neighborBlock)) {
            queue.push({ x: nx, y: ny, z: nz, light: light - 1 });
          }
        }
      }
    }

    // Get the combined light at a position
    function getCombinedLight(wx, wy, wz) {
      const sky = getSkyLightLevel(wx, wy, wz);
      const block = getBlockLight(wx, wy, wz) || 0;
      return Math.max(sky, block);
    }

    return { isOpenToSky, getSkyLightLevel, propagateBlockLight, getCombinedLight };
  }

  window.SpawnLighting = { create };
})();

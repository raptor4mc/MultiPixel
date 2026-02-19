(function () {
  const WATER_SOURCE = 4;
  const FLOWING_WATER = 47;
  const MAX_FLOW_DISTANCE = 7;

  function shuffledDirs(randomFn) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let i = dirs.length - 1; i > 0; i--) {
      const j = Math.floor(randomFn() * (i + 1));
      const tmp = dirs[i];
      dirs[i] = dirs[j];
      dirs[j] = tmp;
    }
    return dirs;
  }

  function countAdjacentSources(getBlock, x, y, z) {
    let count = 0;

    if (getBlock(x + 1, y, z) === WATER_SOURCE) count++;
    if (getBlock(x - 1, y, z) === WATER_SOURCE) count++;
    if (getBlock(x, y, z + 1) === WATER_SOURCE) count++;
    if (getBlock(x, y, z - 1) === WATER_SOURCE) count++;

    return count;
  }

  function tryUpdate(ctx) {
    const { wx, wy, wz, getBlock, setBlock, swapBlocks, random } = ctx;

    if (wy <= 1) return false;

    const blockHere = getBlock(wx, wy, wz);
    if (blockHere !== WATER_SOURCE && blockHere !== FLOWING_WATER)
      return false;

    // ---- 1️⃣ Infinite Source Logic ----
    if (blockHere === FLOWING_WATER) {
      const below = getBlock(wx, wy - 1, wz);

      // Must be solid below
      if (below !== 0) {
        const sourceCount = countAdjacentSources(getBlock, wx, wy, wz);

        if (sourceCount >= 2) {
          setBlock(wx, wy, wz, WATER_SOURCE);
          return true;
        }
      }
    }

    // ---- 2️⃣ Flow Down First ----
    const below = getBlock(wx, wy - 1, wz);
    if (below === 0) {
      swapBlocks(wx, wy, wz, wx, wy - 1, wz);
      return true;
    }

    // ---- 3️⃣ Spread Sideways ----
    const currentLevel = ctx.level || 0;
    if (currentLevel >= MAX_FLOW_DISTANCE) return false;

    const dirs = shuffledDirs(random || Math.random);
    let moved = false;

    for (const [dx, dz] of dirs) {
      const nx = wx + dx;
      const nz = wz + dz;
      const side = getBlock(nx, wy, nz);

      if (side === 0) {
        setBlock(nx, wy, nz, FLOWING_WATER);
        if (ctx.setLevel)
          ctx.setLevel(nx, wy, nz, currentLevel + 1);
        moved = true;
      }
    }

    return moved;
  }

  window.WaterPhysics = { tryUpdate };
})();

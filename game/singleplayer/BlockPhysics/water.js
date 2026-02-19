(function () {
  const WATER_SOURCE = 4;
  const FLOWING_WATER = 47;

  const MAX_HORIZONTAL = 7;
  const FLOW_DELAY = 5; // 1 move every 5 ticks

  function shuffledDirs(randomFn) {
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let i = dirs.length - 1; i > 0; i--) {
      const j = Math.floor(randomFn() * (i + 1));
      [dirs[i], dirs[j]] = [dirs[j], dirs[i]];
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
    const {
      wx, wy, wz,
      getBlock, setBlock, swapBlocks,
      getMeta, setMeta,
      gameTick,
      random
    } = ctx;

    const blockHere = getBlock(wx, wy, wz);
    if (blockHere !== WATER_SOURCE && blockHere !== FLOWING_WATER)
      return false;

    // ---- FLOW DELAY CONTROL ----
    const lastTick = getMeta(wx, wy, wz, "lastFlow") || 0;

    if (gameTick - lastTick < FLOW_DELAY) {
      return false;
    }

    setMeta(wx, wy, wz, "lastFlow", gameTick);

    // ---- INFINITE SOURCE ----
    if (blockHere === FLOWING_WATER) {
      const below = getBlock(wx, wy - 1, wz);

      if (below !== 0) {
        const sources = countAdjacentSources(getBlock, wx, wy, wz);
        if (sources >= 2) {
          setBlock(wx, wy, wz, WATER_SOURCE);
          return true;
        }
      }
    }

    // ---- FLOW DOWN (UNLIMITED) ----
    const below = getBlock(wx, wy - 1, wz);

    if (below === 0) {
      swapBlocks(wx, wy, wz, wx, wy - 1, wz);

      // RESET horizontal distance when falling
      setMeta(wx, wy - 1, wz, "distance", 0);

      return true;
    }

    // ---- HORIZONTAL SPREAD ----
    let distance = getMeta(wx, wy, wz, "distance") || 0;

    if (blockHere === WATER_SOURCE) {
      distance = 0;
    }

    if (distance >= MAX_HORIZONTAL) return false;

    const dirs = shuffledDirs(random || Math.random);

    let moved = false;

    for (const [dx, dz] of dirs) {
      const nx = wx + dx;
      const nz = wz + dz;

      if (getBlock(nx, wy, nz) === 0) {
        setBlock(nx, wy, nz, FLOWING_WATER);
        setMeta(nx, wy, nz, "distance", distance + 1);
        moved = true;
      }
    }

    return moved;
  }

  window.WaterPhysics = { tryUpdate };
})();

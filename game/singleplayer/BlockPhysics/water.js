(function () {

  const WATER_SOURCE = 4;

  const FLOW_START = 47;   // distance 1
  const FLOW_END   = 53;   // distance 7

  const MAX_HORIZONTAL = 7;
  const FLOW_DELAY = 5;

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

  function isFlowing(id) {
    return id >= FLOW_START && id <= FLOW_END;
  }

  function getDistance(id) {
    if (id === WATER_SOURCE) return 0;
    return id - FLOW_START + 1;
  }

  function tryUpdate(ctx) {
    const {
      wx, wy, wz,
      getBlock, setBlock, swapBlocks,
      gameTick,
      random
    } = ctx;

    const id = getBlock(wx, wy, wz);

    if (id !== WATER_SOURCE && !isFlowing(id))
      return false;

    // --- FLOW SPEED CONTROL ---
    if ((gameTick + wx + wy + wz) % FLOW_DELAY !== 0)
      return false;

    const below = getBlock(wx, wy - 1, wz);

    // --- FLOW DOWN (INFINITE) ---
    if (below === 0) {
      swapBlocks(wx, wy, wz, wx, wy - 1, wz);

      // Reset horizontal distance when falling
      setBlock(wx, wy - 1, wz, FLOW_START);

      return true;
    }

    // --- HORIZONTAL SPREAD ---
    const distance = getDistance(id);

    if (distance >= MAX_HORIZONTAL)
      return false;

    const dirs = shuffledDirs(random || Math.random);

    for (const [dx, dz] of dirs) {
      const nx = wx + dx;
      const nz = wz + dz;

      if (getBlock(nx, wy, nz) === 0) {

        const newLevel = FLOW_START + distance;

        setBlock(nx, wy, nz, newLevel);
        return true;
      }
    }

    return false;
  }

  window.WaterPhysics = { tryUpdate };

})();

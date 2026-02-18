function propagateBlockLight(lightMap) {
  const queue = [];

  for (let x = 0; x < WORLD_SIZE; x++) {
    for (let y = 0; y < CHUNK_HEIGHT; y++) {
      for (let z = 0; z < WORLD_SIZE; z++) {
        const block = getBlockType(x,y,z);
        const emit = EMISSIVE_BLOCK_LIGHT[block] || 0;

        if (emit > 0) {
          lightMap[x][y][z] = emit;
          queue.push({ x,y,z });
        }
      }
    }
  }

  while (queue.length) {
    const { x,y,z } = queue.shift();
    const current = lightMap[x][y][z];

    const neighbors = [
      [x+1,y,z],[x-1,y,z],
      [x,y+1,z],[x,y-1,z],
      [x,y,z+1],[x,y,z-1]
    ];

    for (const [nx,ny,nz] of neighbors) {
      if (!inBounds(nx,ny,nz)) continue;

      const block = getBlockType(nx,ny,nz);
      const opacity = block === 0 ? 1 : 2;

      const newLight = current - opacity;
      if (newLight <= 0) continue;

      if (lightMap[nx][ny][nz] < newLight) {
        lightMap[nx][ny][nz] = newLight;
        queue.push({ x:nx, y:ny, z:nz });
      }
    }
  }
}

export function generateChunkData(simplex, cx, cz, settings) {
  const { CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL } = settings;
  const data = new Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);

  for (let x = 0; x < CHUNK_SIZE; x++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {
      const wx = cx * CHUNK_SIZE + x;
      const wz = cz * CHUNK_SIZE + z;

      const h = Math.floor(
        (simplex.noise2D(wx * 0.05, wz * 0.05) + 1) * 10 + SEA_LEVEL
      );

      for (let y = 0; y < CHUNK_HEIGHT; y++) {
        const i = x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
        if (y > h) data[i] = y <= SEA_LEVEL ? 4 : 0;
        else if (y === h) data[i] = 1;
        else if (y > h - 4) data[i] = 2;
        else data[i] = 3;
      }
    }
  }
  return data;
}

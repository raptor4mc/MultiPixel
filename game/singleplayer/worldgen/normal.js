import { noise2D } from "./noise.js";

const CHUNK_SIZE = 16;
const HEIGHT = 64;

export function normal(cx, cz, seed) {
  const blocks = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * HEIGHT);

  const baseHeight = 24;
  const amplitude = 20;
  const scale = 0.05;

  for (let x = 0; x < CHUNK_SIZE; x++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {

      // 🌍 WORLD COORDINATES (THIS FIXES TILING)
      const worldX = cx * CHUNK_SIZE + x;
      const worldZ = cz * CHUNK_SIZE + z;

      const n = noise2D(
        Math.floor(worldX * scale),
        Math.floor(worldZ * scale),
        Number(seed) || 0
      );

      const height = Math.floor(baseHeight + n * amplitude);

      for (let y = 0; y < HEIGHT; y++) {
        const index = (x * CHUNK_SIZE + z) * HEIGHT + y;

        if (y > height) blocks[index] = 0;
        else if (y === height) blocks[index] = 1; // grass
        else blocks[index] = 2; // dirt
      }
    }
  }

  return blocks;
}

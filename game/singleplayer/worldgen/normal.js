import { noise2D } from "./noise.js";

const CHUNK = 16;
const HEIGHT = 64;

export function normal(cx, cz, seed) {
  const blocks = new Uint8Array(CHUNK * CHUNK * HEIGHT);

  for (let x = 0; x < CHUNK; x++) {
    for (let z = 0; z < CHUNK; z++) {

      const wx = cx * CHUNK + x;
      const wz = cz * CHUNK + z;

      // 🌍 FRACTAL NOISE (3 octaves)
      let n = 0;
      n += noise2D(wx * 0.02, wz * 0.02, seed) * 1.0;
      n += noise2D(wx * 0.04, wz * 0.04, seed + 1) * 0.5;
      n += noise2D(wx * 0.08, wz * 0.08, seed + 2) * 0.25;
      n /= 1.75;

      // ✅ declare ONCE
      let height = Math.floor(18 + n * 40);

      // flatten slightly
      height = Math.round(height / 2) * 2;

      for (let y = 0; y < HEIGHT; y++) {
        const i = (x * CHUNK + z) * HEIGHT + y;
        blocks[i] = y <= height ? 1 : 0;
      }
    }
  }

  return blocks;
}

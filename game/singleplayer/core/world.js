import { ChunkManager } from "./chunks.js";
import { Player } from "./player.js";

export class World {
  constructor(config) {
    this.config = config;
    this.chunks = new ChunkManager(config);

    // IMPORTANT: pass world into player
    this.player = new Player(this);
  }

  getBlock(x, y, z) {
    const cx = Math.floor(x / 16);
    const cz = Math.floor(z / 16);
    const chunk = this.chunks.getChunk(cx, cz);

    if (!chunk) return 0;
    if (y < 0 || y >= 64) return 0;

    const lx = ((x % 16) + 16) % 16;
    const lz = ((z % 16) + 16) % 16;

    const index = (lz * 16 + lx) * 64 + y;
    return chunk[index] ?? 0;
  }

  isSolid(x, y, z) {
    return this.getBlock(x, y, z) !== 0;
  }

  getHeight(x, z) {
    const cx = Math.floor(x / 16);
    const cz = Math.floor(z / 16);
    const chunk = this.chunks.getChunk(cx, cz);

    if (!chunk) return 0;

    const lx = ((x % 16) + 16) % 16;
    const lz = ((z % 16) + 16) % 16;

    for (let y = 63; y >= 0; y--) {
      const i = (lz * 16 + lx) * 64 + y;
      if (chunk[i] !== 0) return y;
    }
    return 0;
  }
}

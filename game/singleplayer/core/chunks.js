import { ChunkManager } from "./chunks.js";
import { Player } from "./player.js";

export class World {
  constructor(config) {
    this.config = config;
    this.player = new Player();
    this.chunks = new ChunkManager(config);

    this.generateSpawnChunks();
  }

  generateSpawnChunks() {
    // Generate ONE chunk at 0,0
    const cx = 0;
    const cz = 0;

    const chunk = new Uint8Array(16 * 16 * 64);

    // Flat terrain at y = 8
    for (let z = 0; z < 16; z++) {
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y <= 8; y++) {
          chunk[(z * 16 + x) * 64 + y] = 1;
        }
      }
    }

    this.chunks.setChunk(cx, cz, chunk);

    // Spawn player above terrain
    this.player.position.set(8, 12, 8);
  }

  getBlock(x, y, z) {
    const cx = Math.floor(x / 16);
    const cz = Math.floor(z / 16);
    const chunk = this.chunks.getChunk(cx, cz);
    if (!chunk) return 0;

    const lx = ((x % 16) + 16) % 16;
    const lz = ((z % 16) + 16) % 16;
    if (y < 0 || y >= 64) return 0;

    return chunk[(lz * 16 + lx) * 64 + y];
  }

  isSolid(x, y, z) {
    return this.getBlock(x, y, z) !== 0;
  }
}

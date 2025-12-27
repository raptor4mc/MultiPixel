import { generateChunk } from "../worldgen/generator.js";

export class ChunkManager {
  constructor(config) {
    this.seed = config.seed;
    this.terrain = config.terrain;
    this.chunks = new Map();
  }

  getChunk(x, z) {
    const key = `${x},${z}`;
    if (!this.chunks.has(key)) {
      this.chunks.set(key, generateChunk(x, z, this.seed, this.terrain));
    }
    return this.chunks.get(key);
  }
}

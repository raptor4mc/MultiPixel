import { ChunkManager } from "./chunks.js";
import { Player } from "./player.js";

export class World {
  constructor(config) {
    this.config = config;
    this.player = new Player();
    this.chunks = new ChunkManager(config);
  }
}

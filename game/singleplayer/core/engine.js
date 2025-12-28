import { Renderer } from "./renderer.js";
import { Input } from "./input.js";

export class Engine {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;

    this.input = new Input(canvas);
    this.renderer = new Renderer(canvas, world);

    this.lastTime = performance.now();
    this.loop = this.loop.bind(this);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop(time) {
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    // ✅ SINGLE SOURCE OF TRUTH
    this.world.player.update(dt, this.input);

    this.renderer.render();
    requestAnimationFrame(this.loop);
  }
}

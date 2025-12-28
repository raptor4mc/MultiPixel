import { Renderer } from "./renderer.js";
import { Input } from "./input.js";
import { Tick } from "./tick.js";

export class Engine {
  constructor(canvas, world) {
    this.world = world;

    this.input = new Input(canvas);
    this.renderer = new Renderer(canvas, world);
    this.tick = new Tick(world);

    this.running = false;
  }

  start() {
    this.running = true;
    let last = performance.now();

    const loop = (now) => {
      if (!this.running) return;

      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // update player (movement + camera)
      this.world.player.update(dt, this.input);

      // update world systems
      this.tick.update(dt);

      // render frame
      this.renderer.render();

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
  }
}

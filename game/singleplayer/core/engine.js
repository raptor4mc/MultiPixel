import { Renderer } from "./renderer.js";
import { Input } from "./input.js";
import { Tick } from "./tick.js";

export class Engine {
  constructor(canvas, world) {
    this.renderer = new Renderer(canvas, world);
    this.input = new Input();
    this.tick = new Tick(world);
    this.running = false;
  }

  start() {
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.tick.update();
      this.renderer.render();
      requestAnimationFrame(loop);
    };
    loop();
  }
}

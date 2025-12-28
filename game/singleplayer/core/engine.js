import { Renderer } from "./renderer.js";
import { Input } from "./input.js";

export class Engine {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.input = new Input(canvas);

    // ✅ PASS WORLD CORRECTLY
    this.renderer = new Renderer(canvas, world);
    this.world.renderer = this.renderer;

    this.lastTime = performance.now();
  }
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop(time) {
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    // Update player
    this.world.player.update(dt, this.input);

    // GET CAMERA FROM PLAYER
    const camera = this.world.player.getCameraMatrix();

    // Render world with camera
    this.renderer.render(this.world, camera);

    requestAnimationFrame(this.loop);
  }
}

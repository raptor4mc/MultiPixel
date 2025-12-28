import { Renderer } from "./renderer.js";
import { Input } from "./input.js";

export class Engine {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;

    this.input = new Input(canvas);
    this.renderer = new Renderer(canvas);

    this.lastTime = 0;
    this.loop = this.loop.bind(this);
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

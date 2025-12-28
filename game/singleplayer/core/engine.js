import { Renderer } from "./renderer.js";
import { Input } from "./input.js";

export class Engine {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.input = new Input(canvas);

    // Create renderer
    this.renderer = new Renderer(canvas, world);
    this.world.renderer = this.renderer;

    this.lastTime = performance.now();

    // bind loop once
    this.loop = this.loop.bind(this);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop(time) {
    const dt = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    // Update + render
    this.update(dt);
    this.renderer.render();

    requestAnimationFrame(this.loop);
  }

  update(dt) {
    const p = this.world.player;
    const input = this.input;

    // Mouse look
    const { dx, dy } = input.consumeMouse();
    p.yaw -= dx * 0.002;
    p.pitch -= dy * 0.002;
    p.pitch = Math.max(-1.5, Math.min(1.5, p.pitch));

    // Movement
    let mx = 0, mz = 0;
    if (input.keys["KeyW"]) mz += 1;
    if (input.keys["KeyS"]) mz -= 1;
    if (input.keys["KeyA"]) mx -= 1;
    if (input.keys["KeyD"]) mx += 1;

    const sin = Math.sin(p.yaw);
    const cos = Math.cos(p.yaw);

    p.velocity.x = (mx * cos + mz * sin) * p.speed;
    p.velocity.z = (mz * cos - mx * sin) * p.speed;

    // Gravity
    p.velocity.y -= 20 * dt;

    // Jump
    if (input.keys["Space"] && p.onGround) {
      p.velocity.y = p.jumpStrength;
      p.onGround = false;
    }

    // Apply movement
    this.movePlayer(dt);
  }

  movePlayer(dt) {
    const p = this.world.player;

    p.position.x += p.velocity.x * dt;
    p.position.z += p.velocity.z * dt;
    p.position.y += p.velocity.y * dt;

    const feetY = Math.floor(p.position.y - 1);
    if (this.world.isSolid(
      Math.floor(p.position.x),
      feetY,
      Math.floor(p.position.z)
    )) {
      p.position.y = feetY + 1.001;
      p.velocity.y = 0;
      p.onGround = true;
    }
  }
}

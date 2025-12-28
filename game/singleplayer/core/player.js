export class Player {
  constructor() {
    this.pos = { x: 0, y: 80, z: 0 };
    this.vel = { x: 0, y: 0, z: 0 };

    this.yaw = 0;
    this.speed = 6;
    this.gravity = 30;
    this.onGround = false;
  }

  update(dt, input, world) {
    // mouse look
    this.yaw -= input.consumeMouseDX() * 0.002;

    let mx = 0;
    let mz = 0;

    if (input.isDown("KeyW")) mz -= 1;
    if (input.isDown("KeyS")) mz += 1;
    if (input.isDown("KeyA")) mx -= 1;
    if (input.isDown("KeyD")) mx += 1;

    if (mx || mz) {
      const len = Math.hypot(mx, mz);
      mx /= len;
      mz /= len;
    }

    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);

    this.vel.x = (mx * cos - mz * sin) * this.speed;
    this.vel.z = (mz * cos + mx * sin) * this.speed;

    // gravity
    this.vel.y -= this.gravity * dt;

    // integrate
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.pos.z += this.vel.z * dt;

    // ground collision
    const ground = world.getHeight(
      Math.floor(this.pos.x),
      Math.floor(this.pos.z)
    ) + 1;

    if (this.pos.y < ground) {
      this.pos.y = ground;
      this.vel.y = 0;
      this.onGround = true;
    } else {
      this.onGround = false;
    }
  }
}

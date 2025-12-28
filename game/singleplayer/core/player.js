export class Player {
  constructor() {
    this.position = { x: 0, z: 0 };
    this.speed = 6;
  }

  update(dt, input) {
    let dx = 0;
    let dz = 0;

    if (input.isDown("KeyW")) dz -= 1;
    if (input.isDown("KeyS")) dz += 1;
    if (input.isDown("KeyA")) dx -= 1;
    if (input.isDown("KeyD")) dx += 1;

    // normalize diagonal movement
    if (dx !== 0 || dz !== 0) {
      const len = Math.hypot(dx, dz);
      dx /= len;
      dz /= len;
    }

    this.position.x += dx * this.speed * dt;
    this.position.z += dz * this.speed * dt;
  }
}

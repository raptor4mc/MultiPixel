export class Player {
  constructor() {
    this.position = { x: 0, y: 0, z: 0 };

    this.rotation = {
      yaw: 0,   // left/right
      pitch: 0  // up/down
    };

    this.speed = 6;
    this.lookSpeed = 1.0;
  }

  update(dt, input) {
    /* ---------- Mouse look ---------- */
    const { dx, dy } = input.consumeMouse();

    this.rotation.yaw -= dx * input.mouse.sensitivity * this.lookSpeed;
    this.rotation.pitch -= dy * input.mouse.sensitivity * this.lookSpeed;

    // Clamp pitch to avoid flipping
    const limit = Math.PI / 2 - 0.01;
    this.rotation.pitch = Math.max(-limit, Math.min(limit, this.rotation.pitch));

    /* ---------- Movement ---------- */
    let forward = 0;
    let strafe = 0;

    if (input.isDown("KeyW")) forward += 1;
    if (input.isDown("KeyS")) forward -= 1;
    if (input.isDown("KeyA")) strafe -= 1;
    if (input.isDown("KeyD")) strafe += 1;

    if (forward !== 0 || strafe !== 0) {
      const len = Math.hypot(forward, strafe);
      forward /= len;
      strafe /= len;

      const sin = Math.sin(this.rotation.yaw);
      const cos = Math.cos(this.rotation.yaw);

      this.position.x += (forward * sin + strafe * cos) * this.speed * dt;
      this.position.z += (forward * cos - strafe * sin) * this.speed * dt;
    }
  }

  /* Camera data for renderer */
  getCamera() {
    return {
      position: this.position,
      yaw: this.rotation.yaw,
      pitch: this.rotation.pitch
    };
  }
}


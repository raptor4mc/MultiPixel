export class Player {
  constructor() {
    this.position = { x: 0, y: 40, z: 0 };
    this.velocity = { x: 0, y: 0, z: 0 };

    this.yaw = 0;
    this.pitch = 0;

    this.speed = 5;
    this.gravity = -20;
    this.onGround = false;
  }

  update(dt, input) {
    if (input?.isDown("KeyW")) this.velocity.z -= this.speed * dt;
    if (input?.isDown("KeyS")) this.velocity.z += this.speed * dt;
    if (input?.isDown("KeyA")) this.velocity.x -= this.speed * dt;
    if (input?.isDown("KeyD")) this.velocity.x += this.speed * dt;

    this.velocity.y += this.gravity * dt;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.position.z += this.velocity.z;
  }
}

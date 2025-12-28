import { Physics } from "./physics.js";

export class Player {
    constructor(world) {
        this.world = world;

        this.pos = { x: 0, y: 20, z: 0 };
        this.vel = { x: 0, y: 0, z: 0 };

        this.yaw = 0;
        this.pitch = 0;

        this.speed = 6;
        this.jumpForce = 7;
        this.onGround = false;

        this.collider = {
            width: 0.6,
            height: 1.8
        };
    }

    update(dt, input) {
        // Mouse look
        const { dx, dy } = input.consumeMouse();
        this.yaw -= dx * 0.002;
        this.pitch -= dy * 0.002;
        this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));

        // Movement input
        let forward = 0;
        let strafe = 0;

        if (input.isDown("KeyW")) forward += 1;
        if (input.isDown("KeyS")) forward -= 1;
        if (input.isDown("KeyA")) strafe -= 1;
        if (input.isDown("KeyD")) strafe += 1;

        const sin = Math.sin(this.yaw);
        const cos = Math.cos(this.yaw);

        const moveX = (forward * sin + strafe * cos) * this.speed;
        const moveZ = (forward * cos - strafe * sin) * this.speed;

        this.vel.x = moveX;
        this.vel.z = moveZ;

        // Jump
        if (this.onGround && input.isDown("Space")) {
            this.vel.y = this.jumpForce;
            this.onGround = false;
        }

        // Gravity
        this.vel.y -= 20 * dt;

        // Physics
        Physics.move(this, this.world, dt);
    }

    getCameraMatrix() {
        return {
            position: [
                this.pos.x,
                this.pos.y + this.collider.height * 0.9,
                this.pos.z
            ],
            rotation: [this.pitch, this.yaw, 0]
        };
    }
}

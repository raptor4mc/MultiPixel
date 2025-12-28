export class Input {
  constructor(canvas = document.body) {
    this.keys = new Set();

    this.mouse = {
      dx: 0,
      dy: 0,
      sensitivity: 0.002
    };

    // Keyboard
    window.addEventListener("keydown", e => this.keys.add(e.code));
    window.addEventListener("keyup", e => this.keys.delete(e.code));

    // Pointer lock
    canvas.addEventListener("click", () => {
      canvas.requestPointerLock();
    });

    // Mouse movement
    window.addEventListener("mousemove", e => {
      if (document.pointerLockElement === canvas) {
        this.mouse.dx += e.movementX;
        this.mouse.dy += e.movementY;
      }
    });
  }

  isDown(key) {
    return this.keys.has(key);
  }

  consumeMouse() {
    const dx = this.mouse.dx;
    const dy = this.mouse.dy;
    this.mouse.dx = 0;
    this.mouse.dy = 0;
    return { dx, dy };
  }
}

export class Input {
  constructor(canvas) {
    this.keys = new Set();
    this.mouseDX = 0;
    this.locked = false;

    window.addEventListener("keydown", e => this.keys.add(e.code));
    window.addEventListener("keyup", e => this.keys.delete(e.code));

    canvas.addEventListener("click", () => {
      canvas.requestPointerLock();
    });

    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === canvas;
    });

    document.addEventListener("mousemove", e => {
      if (!this.locked) return;
      this.mouseDX += e.movementX;
    });
  }

  isDown(key) {
    return this.keys.has(key);
  }

  consumeMouseDX() {
    const dx = this.mouseDX;
    this.mouseDX = 0;
    return dx;
  }
}


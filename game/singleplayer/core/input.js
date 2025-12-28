export class Input {
    constructor(canvas) {
        this.canvas = canvas;
        this.keys = {};
        this.mouseDX = 0;
        this.mouseDY = 0;
        this.locked = false;

        window.addEventListener("keydown", e => this.keys[e.code] = true);
        window.addEventListener("keyup", e => this.keys[e.code] = false);

        canvas.addEventListener("click", () => {
            canvas.requestPointerLock();
        });

        document.addEventListener("pointerlockchange", () => {
            this.locked = document.pointerLockElement === canvas;
        });

        document.addEventListener("mousemove", e => {
            if (!this.locked) return;
            this.mouseDX += e.movementX;
            this.mouseDY += e.movementY;
        });
    }

    consumeMouse() {
        const dx = this.mouseDX;
        const dy = this.mouseDY;
        this.mouseDX = 0;
        this.mouseDY = 0;
        return { dx, dy };
    }

    isDown(code) {
        return !!this.keys[code];
    }
}

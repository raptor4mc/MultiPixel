// ---------------------------------------------
// MENU ENGINE
// ---------------------------------------------

class MenuController {
    constructor() {
        // Options and state
        this.options = ["Singleplayer", "Multiplayer", "Credits"];
        this.index = 0;
        this.isAnimating = false;

        // Elements
        this.leftBox   = document.getElementById("menu-left");
        this.centerBox = document.getElementById("menu-center");
        this.rightBox  = document.getElementById("menu-right");
        this.centerLabel = document.getElementById("menu-label");

        // Audio
        this.moveSound = new Audio("boot/audio/swoosh_devour.mp3");
        this.moveSound.volume = 0.65;

        // Swipe tracking
        this.pointerActive = false;
        this.startX = 0;
        this.startTime = 0;

        // Init
        this.init();
    }

    init() {
        // Unblur body
        window.addEventListener("load", () => {
            setTimeout(() => {
                document.body.classList.add("unblur");
            }, 100);
        });

        this.updateContent();
        this.bindInput();
        this.setupTilt();
    }

    // -----------------------------
    // Content / layout
    // -----------------------------
    updateContent() {
        const len = this.options.length;
        const left  = (this.index - 1 + len) % len;
        const right = (this.index + 1) % len;

        this.leftBox.textContent = this.options[left];
        this.centerLabel.textContent = this.options[this.index];
        this.rightBox.textContent = this.options[right];
    }

    // -----------------------------
    // Rotation
    // -----------------------------
    rotate(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Direction: -1 = left, +1 = right
        const dur = 380;

        if (direction === -1) {
            // Move left: everything shifts left
            this.leftBox.style.transform   = "translateX(-420px)";
            this.centerBox.style.transform = "translateX(-210px)";
            this.rightBox.style.transform  = "translateX(0px)";
        } else {
            // Move right: everything shifts right
            this.leftBox.style.transform   = "translateX(0px)";
            this.centerBox.style.transform = "translateX(210px)";
            this.rightBox.style.transform  = "translateX(420px)";
        }

        // Play movement sound
        this.playMoveSound();

        setTimeout(() => {
            const len = this.options.length;

            if (direction === -1) {
                this.index = (this.index - 1 + len) % len;
            } else {
                this.index = (this.index + 1) % len;
            }

            // Snap back to base positions
            this.leftBox.style.transform   = "translateX(-210px)";
            this.centerBox.style.transform = "translateX(0)";
            this.rightBox.style.transform  = "translateX(210px)";

            this.updateContent();
            this.isAnimating = false;
        }, dur);
    }

    rotateLeft() {
        this.rotate(-1);
    }

    rotateRight() {
        this.rotate(1);
    }

    // -----------------------------
    // Tilt and parallax (subtle)
    // -----------------------------
    setupTilt() {
        const row = document.getElementById("menu-row");

        // subtle tilt only on the center card
        const maxTilt = 6; // degrees
        const maxShift = 10; // px

        row.addEventListener("pointermove", (e) => {
            const rect = row.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const normX = (x / rect.width) - 0.5;
            const normY = (y / rect.height) - 0.5;

            const tiltX = normY * -maxTilt;
            const tiltY = normX * maxTilt;
            const shiftX = normX * maxShift;
            const shiftY = normY * maxShift;

            this.centerBox.style.transform =
                `translateX(0px) translate(${shiftX}px, ${shiftY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        row.addEventListener("pointerleave", () => {
            this.centerBox.style.transform = "translateX(0)";
        });
    }

    // -----------------------------
    // Input binding
    // -----------------------------
    bindInput() {
        // Keyboard
        window.addEventListener("keydown", (e) => {
            if (this.isAnimating) return;

            if (e.key === "ArrowLeft") {
                this.rotateLeft();
            } else if (e.key === "ArrowRight") {
                this.rotateRight();
            } else if (e.key === "Enter") {
                this.selectCurrent();
            }
        });

        // Pointer / swipe
        document.addEventListener("pointerdown", (e) => {
            this.pointerActive = true;
            this.startX = e.clientX;
            this.startTime = performance.now();
        });

        document.addEventListener("pointerup", (e) => {
            if (!this.pointerActive) return;
            this.pointerActive = false;

            const dx = e.clientX - this.startX;
            const dt = performance.now() - this.startTime;

            const minDistance = 60;
            const minSpeed = 0.4; // px/ms

            const speed = Math.abs(dx) / dt;

            if (Math.abs(dx) > minDistance && speed > minSpeed) {
                if (dx > 0) this.rotateLeft();
                else this.rotateRight();
            }
        });

        // Center click = select
        this.centerBox.addEventListener("click", () => {
            this.selectCurrent();
        });

        // Top bar
        document.getElementById("settings-btn").addEventListener("click", () => {
            console.log("Settings clicked");
        });

        document.getElementById("profile-btn").addEventListener("click", () => {
            console.log("Profile clicked");
        });
    }

    // -----------------------------
    // Audio
    // -----------------------------
    playMoveSound() {
        try {
            // restart if already playing
            this.moveSound.currentTime = 0;
            this.moveSound.play();
        } catch (e) {
            // ignore if autoplay blocked
        }
    }

    // -----------------------------
    // Selection
    // -----------------------------
    selectCurrent() {
        const selected = this.options[this.index];

        // small visual feedback: scale pulse
        this.centerBox.style.scale = 1.28;
        setTimeout(() => {
            this.centerBox.style.scale = 1.22;
        }, 120);

        // hook for your logic
        switch (selected) {
            case "Singleplayer":
                console.log("Singleplayer selected");
                break;
            case "Multiplayer":
                console.log("Multiplayer selected");
                break;
            case "Credits":
                console.log("Credits selected");
                break;
        }
    }
}

// ---------------------------------------------
// BOOTSTRAP
// ---------------------------------------------
const menu = new MenuController();

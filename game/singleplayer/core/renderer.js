export class Renderer {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.ctx = canvas.getContext("2d");

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  render() {
    const ctx = this.ctx;
    const p = this.world.player;

    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const scale = 12;
    const view = 4;

    const camX = p.pos.x * scale;
    const camZ = p.pos.z * scale;

    for (let cx = -view; cx <= view; cx++) {
      for (let cz = -view; cz <= view; cz++) {
        const chunk = this.world.chunks.getChunk(cx, cz);

        for (let x = 0; x < 16; x++) {
          for (let z = 0; z < 16; z++) {

            let h = 0;
            for (let y = 63; y >= 0; y--) {
              const i = (z * 16 + x) * 64 + y;
              if (chunk[i]) { h = y; break; }
            }

            ctx.fillStyle =
              h > 42 ? "#7f8c8d" :
              h > 30 ? "#2ecc71" :
                       "#8e5a2b";

            ctx.fillRect(
              (cx * 16 + x) * scale - camX + this.canvas.width / 2,
              (cz * 16 + z) * scale - camZ + this.canvas.height / 2,
              scale,
              scale
            );
          }
        }
      }
    }
  }
}

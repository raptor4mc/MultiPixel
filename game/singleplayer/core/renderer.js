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
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const scale = 12;
    const viewRadius = 2;

    const player = this.world.player;
    const camX = player.position.x * scale;
    const camZ = player.position.z * scale;

    for (let cx = -viewRadius; cx <= viewRadius; cx++) {
      for (let cz = -viewRadius; cz <= viewRadius; cz++) {
        const chunk = this.world.chunks.getChunk(cx, cz);

        for (let x = 0; x < 16; x++) {
          for (let z = 0; z < 16; z++) {
            let height = 0;

            for (let y = 63; y >= 0; y--) {
              const index = (x * 16 + z) * 64 + y;
              if (chunk[index] !== 0) {
                height = y;
                break;
              }
            }

           if (height > 42) ctx.fillStyle = "#7f8c8d";      // stone
else if (height > 30) ctx.fillStyle = "#2ecc71"; // grass
else ctx.fillStyle = "#8e5a2b";                  // dirt


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

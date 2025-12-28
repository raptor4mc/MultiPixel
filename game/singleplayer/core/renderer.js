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
    ctx.fillStyle = "#87CEEB"; // sky
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const chunk = this.world.chunks.getChunk(0, 0);

    const scale = 8;
    let i = 0;

    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        let height = 0;

        for (let y = 63; y >= 0; y--) {
          if (chunk[i + y] !== 0) {
            height = y;
            break;
          }
        }

        ctx.fillStyle = height > 25 ? "#228B22" : "#8B4513";
        ctx.fillRect(
          x * scale + 100,
          z * scale + 100,
          scale,
          scale
        );

        i += 64;
      }
    }
  }
}

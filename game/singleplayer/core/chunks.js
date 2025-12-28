export class ChunkManager {
  constructor(config) {
    this.config = config;
    this.chunks = new Map();
  }

  key(cx, cz) {
    return `${cx},${cz}`;
  }

  getChunk(cx, cz) {
    return this.chunks.get(this.key(cx, cz));
  }

  setChunk(cx, cz, data) {
    this.chunks.set(this.key(cx, cz), data);
  }

  forEachChunk(cb) {
    for (const [key, chunk] of this.chunks) {
      const [cx, cz] = key.split(",").map(Number);
      cb(cx, cz, chunk);
    }
  }

  buildMesh(cx, cz, chunk, world) {
    const vertices = [];
    const indices = [];
    let index = 0;

    const get = (x, y, z) => {
      if (x < 0 || x >= 16 || z < 0 || z >= 16 || y < 0 || y >= 64)
        return world.isSolid(cx * 16 + x, y, cz * 16 + z);
      return chunk[(z * 16 + x) * 64 + y] !== 0;
    };

    const faces = [
      { n: [1, 0, 0], v: [[1,0,0],[1,1,0],[1,1,1],[1,0,1]] },
      { n: [-1,0,0], v: [[0,0,1],[0,1,1],[0,1,0],[0,0,0]] },
      { n: [0,1,0], v: [[0,1,1],[1,1,1],[1,1,0],[0,1,0]] },
      { n: [0,-1,0], v: [[0,0,0],[1,0,0],[1,0,1],[0,0,1]] },
      { n: [0,0,1], v: [[0,0,1],[1,0,1],[1,1,1],[0,1,1]] },
      { n: [0,0,-1], v: [[1,0,0],[0,0,0],[0,1,0],[1,1,0]] }
    ];

    for (let z = 0; z < 16; z++) {
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 64; y++) {
          if (chunk[(z * 16 + x) * 64 + y] === 0) continue;

          for (const face of faces) {
            const nx = x + face.n[0];
            const ny = y + face.n[1];
            const nz = z + face.n[2];
            if (get(nx, ny, nz)) continue;

            for (const v of face.v) {
              vertices.push(
                cx * 16 + x + v[0],
                y + v[1],
                cz * 16 + z + v[2]
              );
            }

            indices.push(index, index+1, index+2, index, index+2, index+3);
            index += 4;
          }
        }
      }
    }

    return { vertices, indices };
  }
}

(function () {
  class PerlinNoise {
    constructor(seed = Math.random() * 65536) {
      this.p = new Uint8Array(512);
      const permutation = new Uint8Array(256);
      for (let i = 0; i < 256; i++) permutation[i] = i;

      let s = seed >>> 0;
      const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

      for (let i = 255; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
      }
      for (let i = 0; i < 512; i++) this.p[i] = permutation[i & 255];
    }

    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(t, a, b) { return a + t * (b - a); }
    grad(hash, x, y, z) {
      const h = hash & 15, u = h < 8 ? x : y, v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
    }

    noise(x, y, z = 0) {
      const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
      x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
      const u = this.fade(x), v = this.fade(y), w = this.fade(z);
      const A = this.p[X] + Y, AA = this.p[A] + Z, AB = this.p[A + 1] + Z;
      const B = this.p[X + 1] + Y, BA = this.p[B] + Z, BB = this.p[B + 1] + Z;

      return this.lerp(w,
        this.lerp(v,
          this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)),
          this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))
        ),
        this.lerp(v,
          this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)),
          this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1))
        )
      );
    }

    noise2D(x, y) { return this.noise(x, y, 0); }

    normalize(n) { return (n + 1) * 0.5; }
    clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    fbm2D(x, y, octaves = 6, lacunarity = 2, gain = 0.5) {
      let sum = 0, amplitude = 1, frequency = 1, max = 0;
      for (let i = 0; i < octaves; i++) {
        sum += this.noise2D(x * frequency, y * frequency) * amplitude;
        max += amplitude;
        amplitude *= gain;
        frequency *= lacunarity;
      }
      return sum / max;
    }

    ridged2D(x, y, octaves = 6) {
      let result = 0, amplitude = 0.5, frequency = 1;
      for (let i = 0; i < octaves; i++) {
        let n = this.noise2D(x * frequency, y * frequency);
        n = 1 - Math.abs(n);
        result += n * amplitude;
        frequency *= 2;
        amplitude *= 0.5;
      }
      return result;
    }

    warp2D(x, y, scale = 0.005, strength = 30) {
      const qx = this.noise2D(x * scale, y * scale);
      const qy = this.noise2D((x + 1000) * scale, (y + 1000) * scale);
      return { x: x + qx * strength, y: y + qy * strength };
    }

    blendNoise(x, y) {
      const w = this.warp2D(x, y, 0.01, 15);
      const nx = w.x, ny = w.y;
      const base = this.fbm2D(nx * 0.002, ny * 0.002, 6);
      const ridge = this.ridged2D(nx * 0.001, ny * 0.001) * 0.5;
      return this.clamp(base + ridge, -1, 1);
    }
  }

  window.PerlinNoise = PerlinNoise;
})();

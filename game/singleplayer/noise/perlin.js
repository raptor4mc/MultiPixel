(function () {

  class PerlinNoise {
    constructor(seed = Math.random() * 65536) {
      this.p = new Uint8Array(512);
      const permutation = new Uint8Array(256);
      for (let i = 0; i < 256; i++) permutation[i] = i;

      let s = seed >>> 0;
      const rand = () => {
        s = (s * 1664525 + 1013904223) >>> 0;
        return s / 4294967296;
      };

      for (let i = 255; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
      }

      for (let i = 0; i < 512; i++) this.p[i] = permutation[i & 255];
    }

    // Core Perlin functions
    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(t, a, b) { return a + t * (b - a); }

    grad(hash, x, y, z) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
    }

    noise(x, y, z) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;

      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);

      const u = this.fade(x);
      const v = this.fade(y);
      const w = this.fade(z);

      const A  = this.p[X] + Y;
      const AA = this.p[A] + Z;
      const AB = this.p[A + 1] + Z;
      const B  = this.p[X + 1] + Y;
      const BA = this.p[B] + Z;
      const BB = this.p[B + 1] + Z;

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
    noise3D(x, y, z) { return this.noise(x, y, z); }

    // Utility helpers
    normalize(n) { return (n + 1) * 0.5; } // -1..1 → 0..1
    remap(value, min1, max1, min2, max2) { return min2 + (value - min1) * (max2 - min2) / (max1 - min1); }
    clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    // Fractal Brownian Motion
    fbm2D(x, y, octaves = 4, lacunarity = 2.0, gain = 0.5) {
      let sum = 0, amplitude = 1, frequency = 1, max = 0;
      for (let i = 0; i < octaves; i++) {
        sum += this.noise2D(x * frequency, y * frequency) * amplitude;
        max += amplitude;
        amplitude *= gain;
        frequency *= lacunarity;
      }
      return sum / max;
    }

    // Ridged noise for mountains
    ridged2D(x, y, octaves = 4) {
      let result = 0, amplitude = 0.5, frequency = 1;
      for (let i = 0; i < octaves; i++) {
        let n = 1 - Math.abs(this.noise2D(x * frequency, y * frequency));
        result += n * amplitude;
        frequency *= 2;
        amplitude *= 0.5;
      }
      return result;
    }

    // Domain warping
    warp2D(x, y, scale = 0.002, strength = 35) {
      const qx = this.noise2D(x * scale, y * scale);
      const qy = this.noise2D((x + 100) * scale, (y + 100) * scale);
      return { x: x + qx * strength, y: y + qy * strength };
    }
  }

  // ========================
  // Base Terrain Helper
  // ========================
  function getBaseTerrain(x, z, perlin) {
    const warped = perlin.warp2D(x, z, 0.002, 25);
    const continentalMask = perlin.fbm2D(warped.x * 0.0007, warped.y * 0.0007, 3);
    const terrainNoise = perlin.fbm2D(warped.x * 0.004, warped.y * 0.004, 4);
    const erosionNoise = perlin.fbm2D(warped.x * 0.008, warped.y * 0.008, 3);
    return { continentalMask, terrainNoise, erosionNoise, warped };
  }

  // Expose globally
  window.PerlinNoise = PerlinNoise;
  window.getBaseTerrain = getBaseTerrain;

})();

export function noise2D(x, z, seed = 0) {
  const s = Math.sin(x * 127.1 + z * 311.7 + seed * 101.3) * 43758.5453;
  return s - Math.floor(s); // 0..1
}

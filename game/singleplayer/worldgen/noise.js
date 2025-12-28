export function noise2D(x, z, seed) {
  let n = x * 374761 + z * 668265 + seed * 144665;
  n = (n ^ (n >> 13)) * 1274126177;
  return ((n ^ (n >> 16)) >>> 0) / 4294967295;
}

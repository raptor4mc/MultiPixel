export function noise2D(x, z, seed = 0) {
  let n = x * 374761393 + z * 668265263 + seed * 1442695041;
  n = (n ^ (n >> 13)) * 1274126177;
  n = (n ^ (n >> 16)) >>> 0;
  return n / 4294967295;
}

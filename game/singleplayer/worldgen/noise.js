export function noise2D(x, z, seed = 0) {
  let n = x * 374761393 + z * 668265263 + seed * 1442695040888963407n;
  n = BigInt.asUintN(64, n ^ (n >> 13n));
  n *= 1274126177n;
  return Number(n & 0xffffffffn) / 0xffffffff;
}

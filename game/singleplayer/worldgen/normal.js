export function normal(cx, cz, seed) {
  const blocks = [];
  const rand = hash(seed + cx + cz);

  for (let x = 0; x < 16; x++) {
    for (let z = 0; z < 16; z++) {
      const height = Math.floor(rand(x, z) * 20 + 20);
      for (let y = 0; y < 64; y++) {
        blocks.push(y <= height ? 1 : 0);
      }
    }
  }
  return blocks;
}

function hash(seed) {
  return (x, z) => {
    let n = x * 374761 + z * 668265 + seed.length;
    n = (n ^ (n >> 13)) * 1274126177;
    return (n & 0xffffffff) / 0xffffffff;
  };
}

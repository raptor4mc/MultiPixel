export function flat(cx, cz) {
  const blocks = [];
  for (let x = 0; x < 16; x++) {
    for (let z = 0; z < 16; z++) {
      for (let y = 0; y < 64; y++) {
        blocks.push(y < 5 ? 1 : 0);
      }
    }
  }
  return blocks;
}

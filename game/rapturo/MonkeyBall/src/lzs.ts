export function lzssDecompress(buffer) {
  const view = new DataView(buffer);
  const srcSize = view.getUint32(0, true);
  const destSize = view.getUint32(4, true);
  if (!srcSize || !destSize) {
    return new Uint8Array();
  }
  const src = new Uint8Array(buffer, 8, srcSize - 8);
  const dest = new Uint8Array(destSize);
  const ring = new Uint8Array(4096);
  ring.fill(0);
  let bufPos = 4078;
  let flags = 0;
  let srcp = 0;
  let destp = 0;

  while (true) {
    flags >>= 1;
    if ((flags & 0x100) === 0) {
      if (srcp >= src.length) {
        break;
      }
      flags = src[srcp] | 0xff00;
      srcp += 1;
    }
    if (flags & 1) {
      if (srcp >= src.length) {
        break;
      }
      const byte = src[srcp];
      srcp += 1;
      dest[destp] = byte;
      ring[bufPos] = byte;
      bufPos = (bufPos + 1) & 4095;
      destp += 1;
    } else {
      if (srcp + 1 >= src.length) {
        break;
      }
      let offset = src[srcp];
      const r8 = src[srcp + 1];
      srcp += 2;
      const length = (r8 & 0x0f) + 2;
      offset |= (r8 & 0xf0) << 4;
      for (let i = 0; i <= length; i += 1) {
        const byte = ring[(offset + i) & 4095];
        dest[destp] = byte;
        ring[bufPos] = byte;
        bufPos = (bufPos + 1) & 4095;
        destp += 1;
      }
    }
  }

  return dest;
}

import { GX } from './gx.js';

function readU16(view, offset) {
  return view.getUint16(offset, false);
}

function readU32(view, offset) {
  return view.getUint32(offset, false);
}

function decodeRGB565(value) {
  const r = ((value >> 11) & 0x1f) * 255 / 31;
  const g = ((value >> 5) & 0x3f) * 255 / 63;
  const b = (value & 0x1f) * 255 / 31;
  return [r, g, b, 255];
}

function decodeRGB5A3(value) {
  if (value & 0x8000) {
    const r = ((value >> 10) & 0x1f) * 255 / 31;
    const g = ((value >> 5) & 0x1f) * 255 / 31;
    const b = (value & 0x1f) * 255 / 31;
    return [r, g, b, 255];
  }
  const a = ((value >> 12) & 0x7) * 255 / 7;
  const r = ((value >> 8) & 0xf) * 255 / 15;
  const g = ((value >> 4) & 0xf) * 255 / 15;
  const b = (value & 0xf) * 255 / 15;
  return [r, g, b, a];
}

function decodeCmprBlock(dst, dstIndex, stride, src, srcIndex) {
  const c1 = (src[srcIndex] << 8) | src[srcIndex + 1];
  const c2 = (src[srcIndex + 2] << 8) | src[srcIndex + 3];
  const [r1, g1, b1] = decodeRGB565(c1);
  const [r2, g2, b2] = decodeRGB565(c2);
  const colors = new Array(4);
  colors[0] = [r1, g1, b1, 255];
  colors[1] = [r2, g2, b2, 255];

  if (c1 > c2) {
    colors[2] = [
      (2 * r1 + r2) / 3,
      (2 * g1 + g2) / 3,
      (2 * b1 + b2) / 3,
      255,
    ];
    colors[3] = [
      (r1 + 2 * r2) / 3,
      (g1 + 2 * g2) / 3,
      (b1 + 2 * b2) / 3,
      255,
    ];
  } else {
    colors[2] = [
      (r1 + r2) / 2,
      (g1 + g2) / 2,
      (b1 + b2) / 2,
      255,
    ];
    colors[3] = [r2, g2, b2, 0];
  }

  let bitIndex = srcIndex + 4;
  for (let y = 0; y < 4; y += 1) {
    let val = src[bitIndex++];
    for (let x = 0; x < 4; x += 1) {
      const idx = (val >> 6) & 0x03;
      val = (val << 2) & 0xff;
      const color = colors[idx];
      const out = dstIndex + y * stride + x * 4;
      dst[out] = color[0];
      dst[out + 1] = color[1];
      dst[out + 2] = color[2];
      dst[out + 3] = color[3];
    }
  }
}

function decodeTileI4(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const byte = src[srcIndex];
      const value = (x & 1) === 0 ? (byte >> 4) : (byte & 0x0f);
      const intensity = (value << 4) | value;
      dst[dstIndex] = intensity;
      dst[dstIndex + 1] = intensity;
      dst[dstIndex + 2] = intensity;
      dst[dstIndex + 3] = 255;
      dstIndex += 4;
      if (x & 1) {
        srcIndex += 1;
      }
    }
    dstIndex += stride - 8 * 4;
  }
}

function decodeTileI8(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const intensity = src[srcIndex++];
      dst[dstIndex] = intensity;
      dst[dstIndex + 1] = intensity;
      dst[dstIndex + 2] = intensity;
      dst[dstIndex + 3] = 255;
      dstIndex += 4;
    }
    dstIndex += stride - 8 * 4;
  }
}

function decodeTileIA4(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const byte = src[srcIndex++];
      const intensity = (byte & 0x0f) * 17;
      const alpha = (byte >> 4) * 17;
      dst[dstIndex] = intensity;
      dst[dstIndex + 1] = intensity;
      dst[dstIndex + 2] = intensity;
      dst[dstIndex + 3] = alpha;
      dstIndex += 4;
    }
    dstIndex += stride - 8 * 4;
  }
}

function decodeTileIA8(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const intensity = src[srcIndex++];
      const alpha = src[srcIndex++];
      dst[dstIndex] = intensity;
      dst[dstIndex + 1] = intensity;
      dst[dstIndex + 2] = intensity;
      dst[dstIndex + 3] = alpha;
      dstIndex += 4;
    }
    dstIndex += stride - 4 * 4;
  }
}

function decodeTileRGB565(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const value = (src[srcIndex] << 8) | src[srcIndex + 1];
      srcIndex += 2;
      const [r, g, b, a] = decodeRGB565(value);
      dst[dstIndex] = r;
      dst[dstIndex + 1] = g;
      dst[dstIndex + 2] = b;
      dst[dstIndex + 3] = a;
      dstIndex += 4;
    }
    dstIndex += stride - 4 * 4;
  }
}

function decodeTileRGB5A3(dst, dstPos, stride, src, srcPos) {
  let srcIndex = srcPos;
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const value = (src[srcIndex] << 8) | src[srcIndex + 1];
      srcIndex += 2;
      const [r, g, b, a] = decodeRGB5A3(value);
      dst[dstIndex] = r;
      dst[dstIndex + 1] = g;
      dst[dstIndex + 2] = b;
      dst[dstIndex + 3] = a;
      dstIndex += 4;
    }
    dstIndex += stride - 4 * 4;
  }
}

function decodeTileRGBA8(dst, dstPos, stride, src, srcPos) {
  let dstIndex = dstPos;
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const srcMv = srcPos + y * 8 + x * 2;
      const a = src[srcMv];
      const r = src[srcMv + 1];
      const g = src[srcMv + 32];
      const b = src[srcMv + 33];
      dst[dstIndex] = r;
      dst[dstIndex + 1] = g;
      dst[dstIndex + 2] = b;
      dst[dstIndex + 3] = a;
      dstIndex += 4;
    }
    dstIndex += stride - 4 * 4;
  }
}

function decodeTileCMPR(dst, dstPos, stride, src, srcPos) {
  decodeCmprBlock(dst, dstPos + 0 * 4 + 0 * stride, stride, src, srcPos + 0);
  decodeCmprBlock(dst, dstPos + 4 * 4 + 0 * stride, stride, src, srcPos + 8);
  decodeCmprBlock(dst, dstPos + 0 * 4 + 4 * stride, stride, src, srcPos + 16);
  decodeCmprBlock(dst, dstPos + 4 * 4 + 4 * stride, stride, src, srcPos + 24);
}

function getFormatInfo(format) {
  switch (format) {
    case GX.TexFormat.I4:
      return { tileW: 8, tileH: 8, bpp: 4, decodeTile: decodeTileI4 };
    case GX.TexFormat.I8:
      return { tileW: 8, tileH: 4, bpp: 8, decodeTile: decodeTileI8 };
    case GX.TexFormat.IA4:
      return { tileW: 8, tileH: 4, bpp: 8, decodeTile: decodeTileIA4 };
    case GX.TexFormat.IA8:
      return { tileW: 4, tileH: 4, bpp: 16, decodeTile: decodeTileIA8 };
    case GX.TexFormat.RGB565:
      return { tileW: 4, tileH: 4, bpp: 16, decodeTile: decodeTileRGB565 };
    case GX.TexFormat.RGB5A3:
      return { tileW: 4, tileH: 4, bpp: 16, decodeTile: decodeTileRGB5A3 };
    case GX.TexFormat.RGBA8:
      return { tileW: 4, tileH: 4, bpp: 32, decodeTile: decodeTileRGBA8 };
    case GX.TexFormat.CMPR:
      return { tileW: 8, tileH: 8, bpp: 4, decodeTile: decodeTileCMPR };
    default:
      return null;
  }
}

function calcLevelSize(format, width, height) {
  const info = getFormatInfo(format);
  if (!info) {
    return 0;
  }
  const tilesX = Math.ceil(width / info.tileW);
  const tilesY = Math.ceil(height / info.tileH);
  return (tilesX * tilesY * info.tileW * info.tileH * info.bpp) >> 3;
}

export function decodeTplLevel(format, width, height, src, srcOffset = 0) {
  const info = getFormatInfo(format);
  if (!info) {
    return null;
  }
  const stride = width * 4;
  const dst = new Uint8Array(width * height * 4);
  let srcPos = srcOffset;
  for (let ty = 0; ty < height; ty += info.tileH) {
    for (let tx = 0; tx < width; tx += info.tileW) {
      const dstPos = (ty * width + tx) * 4;
      info.decodeTile(dst, dstPos, stride, src, srcPos);
      const tileBytes = (info.tileW * info.tileH * info.bpp) >> 3;
      srcPos += tileBytes;
    }
  }
  return dst;
}

export function decodeTplMipmaps(format, width, height, src, mipCount) {
  const levels = [];
  let offs = 0;
  let w = width;
  let h = height;
  for (let level = 0; level < mipCount; level += 1) {
    const size = calcLevelSize(format, w, h);
    const pixels = decodeTplLevel(format, w, h, src, offs);
    levels.push({ width: w, height: h, data: pixels });
    offs += size;
    w = Math.max(1, w >> 1);
    h = Math.max(1, h >> 1);
  }
  return levels;
}

function parseAVTplHeader(buffer, name, idx) {
  const view = new DataView(buffer);
  if (readU16(view, 0x0e) !== 0x1234) {
    throw new Error('Invalid TPL header');
  }
  const format = readU32(view, 0x00);
  const offs = readU32(view, 0x04);
  const width = readU16(view, 0x08);
  const height = readU16(view, 0x0a);
  const mipCount = readU16(view, 0x0c);
  return {
    name: `${name}_${String(idx).padStart(3, '0')}`,
    format,
    width,
    height,
    mipCount,
    offs,
  };
}

export function parseAVTpl(buffer, name) {
  const view = new DataView(buffer);
  const entryCount = readU32(view, 0x00);
  const textures = new Map();
  let offs = 0x04;
  for (let i = 0; i < entryCount; i += 1) {
    const header = parseAVTplHeader(buffer.slice(offs, offs + 0x10), name, i);
    offs += 0x10;
    if (header.width === 0 && header.height === 0 && header.mipCount === 0) {
      continue;
    }
    textures.set(i, header);
  }
  return { name, buffer, textures };
}

export function buildTplTextureData(tpl, idx) {
  const entry = tpl.textures.get(idx);
  if (!entry) {
    return null;
  }
  const data = new Uint8Array(tpl.buffer, entry.offs);
  const mipCount = Math.max(1, entry.mipCount);
  return {
    name: entry.name,
    format: entry.format,
    width: entry.width,
    height: entry.height,
    mipCount,
    levels: decodeTplMipmaps(entry.format, entry.width, entry.height, data, mipCount),
  };
}

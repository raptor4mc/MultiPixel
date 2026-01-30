import { GX, S16_SHIFT } from './gx.js';

const ATTR_ORDER = [
  GX.Attr.PNMTXIDX,
  GX.Attr.TEX0MTXIDX,
  GX.Attr.TEX1MTXIDX,
  GX.Attr.TEX2MTXIDX,
  GX.Attr.TEX3MTXIDX,
  GX.Attr.TEX4MTXIDX,
  GX.Attr.TEX5MTXIDX,
  GX.Attr.TEX6MTXIDX,
  GX.Attr.TEX7MTXIDX,
  GX.Attr.POS,
  GX.Attr.NRM,
  GX.Attr.CLR0,
  GX.Attr.CLR1,
  GX.Attr.TEX0,
  GX.Attr.TEX1,
  GX.Attr.TEX2,
  GX.Attr.TEX3,
  GX.Attr.TEX4,
  GX.Attr.TEX5,
  GX.Attr.TEX6,
  GX.Attr.TEX7,
];

function readS16(view, offset) {
  return view.getInt16(offset, false);
}

function readU16(view, offset) {
  return view.getUint16(offset, false);
}

function readF32(view, offset) {
  return view.getFloat32(offset, false);
}

function readAttr(view, offset, attr, useVat16) {
  let pos = offset;
  const compShift = useVat16 ? S16_SHIFT : 0;
  const scale = useVat16 ? (1 / (1 << compShift)) : 1;
  switch (attr) {
    case GX.Attr.PNMTXIDX:
    case GX.Attr.TEX0MTXIDX:
    case GX.Attr.TEX1MTXIDX:
    case GX.Attr.TEX2MTXIDX:
    case GX.Attr.TEX3MTXIDX:
    case GX.Attr.TEX4MTXIDX:
    case GX.Attr.TEX5MTXIDX:
    case GX.Attr.TEX6MTXIDX:
    case GX.Attr.TEX7MTXIDX:
      return { value: view.getUint8(pos), size: 1 };
    case GX.Attr.POS: {
      const x = useVat16 ? readS16(view, pos) * scale : readF32(view, pos);
      const y = useVat16 ? readS16(view, pos + 2) * scale : readF32(view, pos + 4);
      const z = useVat16 ? readS16(view, pos + 4) * scale : readF32(view, pos + 8);
      return { value: { x, y, z }, size: useVat16 ? 6 : 12 };
    }
    case GX.Attr.NRM: {
      const x = useVat16 ? readS16(view, pos) * scale : readF32(view, pos);
      const y = useVat16 ? readS16(view, pos + 2) * scale : readF32(view, pos + 4);
      const z = useVat16 ? readS16(view, pos + 4) * scale : readF32(view, pos + 8);
      return { value: { x, y, z }, size: useVat16 ? 6 : 12 };
    }
    case GX.Attr.CLR0:
    case GX.Attr.CLR1: {
      const r = view.getUint8(pos);
      const g = view.getUint8(pos + 1);
      const b = view.getUint8(pos + 2);
      const a = view.getUint8(pos + 3);
      return { value: { r, g, b, a }, size: 4 };
    }
    case GX.Attr.TEX0:
    case GX.Attr.TEX1:
    case GX.Attr.TEX2:
    case GX.Attr.TEX3:
    case GX.Attr.TEX4:
    case GX.Attr.TEX5:
    case GX.Attr.TEX6:
    case GX.Attr.TEX7: {
      const s = useVat16 ? readS16(view, pos) * scale : readF32(view, pos);
      const t = useVat16 ? readS16(view, pos + 2) * scale : readF32(view, pos + 4);
      return { value: { s, t }, size: useVat16 ? 4 : 8 };
    }
    default:
      return { value: null, size: 0 };
  }
}

function makeVertex() {
  return {
    pos: { x: 0, y: 0, z: 0 },
    nrm: { x: 0, y: 0, z: 1 },
    clr: { r: 255, g: 255, b: 255, a: 255 },
    tex0: { s: 0, t: 0 },
    tex1: { s: 0, t: 0 },
    tex2: { s: 0, t: 0 },
  };
}

function pushVertex(out, vertex) {
  out.positions.push(vertex.pos.x, vertex.pos.y, vertex.pos.z);
  out.normals.push(vertex.nrm.x, vertex.nrm.y, vertex.nrm.z);
  out.colors.push(vertex.clr.r / 255, vertex.clr.g / 255, vertex.clr.b / 255, vertex.clr.a / 255);
  out.uvs.push(vertex.tex0.s, vertex.tex0.t);
  out.uvs1.push(vertex.tex1.s, vertex.tex1.t);
  out.uvs2.push(vertex.tex2.s, vertex.tex2.t);
}

function addTriangle(out, v0, v1, v2) {
  pushVertex(out, v0);
  pushVertex(out, v1);
  pushVertex(out, v2);
}

function emitTrianglesForStrip(out, verts) {
  for (let i = 0; i + 2 < verts.length; i += 1) {
    if (i & 1) {
      addTriangle(out, verts[i + 1], verts[i], verts[i + 2]);
    } else {
      addTriangle(out, verts[i], verts[i + 1], verts[i + 2]);
    }
  }
}

export function parseDisplayList(buffer, vtxAttrs, useVat16) {
  const view = new DataView(buffer);
  let offs = 0;
  const out = {
    positions: [],
    normals: [],
    colors: [],
    uvs: [],
    uvs1: [],
    uvs2: [],
  };
  const hasTex1 = (vtxAttrs & (1 << GX.Attr.TEX1)) !== 0;
  const hasTex2 = (vtxAttrs & (1 << GX.Attr.TEX2)) !== 0;

  while (offs < view.byteLength) {
    const cmd = view.getUint8(offs);
    offs += 1;
    if (cmd === GX.Command.NOOP) {
      continue;
    }
    const opcode = cmd & 0xf8;
    const vertexCount = readU16(view, offs);
    offs += 2;
    const verts = [];
    for (let i = 0; i < vertexCount; i += 1) {
      const vert = makeVertex();
      for (const attr of ATTR_ORDER) {
        if ((vtxAttrs & (1 << attr)) === 0) {
          continue;
        }
        const { value, size } = readAttr(view, offs, attr, useVat16);
        offs += size;
        if (attr === GX.Attr.POS && value) {
          vert.pos = value;
        } else if (attr === GX.Attr.NRM && value) {
          vert.nrm = value;
        } else if (attr === GX.Attr.CLR0 && value) {
          vert.clr = value;
        } else if (attr === GX.Attr.TEX0 && value) {
          vert.tex0 = value;
        } else if (attr === GX.Attr.TEX1 && value) {
          vert.tex1 = value;
        } else if (attr === GX.Attr.TEX2 && value) {
          vert.tex2 = value;
        }
      }
      if (!hasTex1) {
        vert.tex1 = vert.tex0;
      }
      if (!hasTex2) {
        vert.tex2 = vert.tex0;
      }
      verts.push(vert);
    }

    switch (opcode) {
      case GX.Command.DRAW_TRIANGLES:
        for (let i = 0; i + 2 < verts.length; i += 3) {
          addTriangle(out, verts[i], verts[i + 1], verts[i + 2]);
        }
        break;
      case GX.Command.DRAW_TRIANGLE_STRIP:
        emitTrianglesForStrip(out, verts);
        break;
      case GX.Command.DRAW_TRIANGLE_FAN:
        for (let i = 1; i + 1 < verts.length; i += 1) {
          addTriangle(out, verts[0], verts[i], verts[i + 1]);
        }
        break;
      case GX.Command.DRAW_QUADS:
        for (let i = 0; i + 3 < verts.length; i += 4) {
          addTriangle(out, verts[i], verts[i + 1], verts[i + 2]);
          addTriangle(out, verts[i], verts[i + 2], verts[i + 3]);
        }
        break;
      case GX.Command.DRAW_QUAD_STRIP:
        for (let i = 0; i + 3 < verts.length; i += 2) {
          addTriangle(out, verts[i], verts[i + 1], verts[i + 2]);
          addTriangle(out, verts[i + 1], verts[i + 3], verts[i + 2]);
        }
        break;
      default:
        return out;
    }
  }
  return out;
}

import { GX } from './gx.js';

const TEXT_DECODER = new TextDecoder('utf-8');
const SHAPE_BASE_SIZE = 0x60;

export const MaterialFlags = {
  Unlit: 1 << 0,
  DoubleSided: 1 << 1,
  NoFog: 1 << 2,
  CustomMatAmbColors: 1 << 3,
  CustomBlendSrc: 1 << 5,
  CustomBlendDest: 1 << 6,
  SimpleMaterial: 1 << 7,
  VertColors: 1 << 8,
};

export const DlistFlags = {
  HasDlist0: 1 << 0,
  HasDlist1: 1 << 1,
  HasDlist2: 1 << 2,
  HasDlist3: 1 << 3,
};

export const TevLayerFlags = {
  TypeViewSpecular: 1 << 0,
  Type3: 1 << 1,
  DoEdgeLod: 1 << 6,
  MagfiltNear: 1 << 11,
  TypeAlphaBlend: 1 << 13,
  TypeWorldSpecular: 1 << 15,
  Unk16: 1 << 16,
  EnableUvScroll: 1 << 17,
};

export const ModelFlags = {
  Vat16Bit: 0x01,
  Stitching: 0x04,
  Skin: 0x08,
  Effective: 0x10,
};

function readU16(view, offset) {
  return view.getUint16(offset, false);
}

function readS16(view, offset) {
  return view.getInt16(offset, false);
}

function readU32(view, offset) {
  return view.getUint32(offset, false);
}

function readF32(view, offset) {
  return view.getFloat32(offset, false);
}

function readString(buffer, offset) {
  let end = offset;
  while (end < buffer.byteLength && buffer[end] !== 0) {
    end += 1;
  }
  return TEXT_DECODER.decode(buffer.subarray(offset, end));
}

function parseTevLayer(view, tpl, offset) {
  const flags = readU32(view, offset);
  const texIdx = readS16(view, offset + 0x04);
  const lodBias = view.getInt8(offset + 0x06);
  const anisotropy = view.getInt8(offset + 0x07);
  const unk0x0c = view.getInt8(offset + 0x0c);
  const swappable = !!view.getUint8(offset + 0x0d);
  const unk0x10 = view.getInt32(offset + 0x10);
  const type = view.getUint8(offset + 0x13);
  const alphaType = (type >> 4) & 0x07;
  const colorType = type & 0x0f;
  return {
    flags,
    texIdx,
    gxTexture: tpl.textures.get(texIdx) ?? null,
    lodBias,
    maxAniso: anisotropy,
    unk0x0c,
    unk0x10,
    alphaType,
    colorType,
    swappable,
  };
}

function parseMatrix(view, offset) {
  return [
    readF32(view, offset),
    readF32(view, offset + 0x04),
    readF32(view, offset + 0x08),
    readF32(view, offset + 0x0c),
    readF32(view, offset + 0x10),
    readF32(view, offset + 0x14),
    readF32(view, offset + 0x18),
    readF32(view, offset + 0x1c),
    readF32(view, offset + 0x20),
    readF32(view, offset + 0x24),
    readF32(view, offset + 0x28),
    readF32(view, offset + 0x2c),
  ];
}

function unpackColor(value) {
  return {
    r: (value >> 24) & 0xff,
    g: (value >> 16) & 0xff,
    b: (value >> 8) & 0xff,
    a: value & 0xff,
  };
}

function parseMaterial(view, offset) {
  const materialColor = unpackColor(readU32(view, offset + 0x04));
  const ambientColor = unpackColor(readU32(view, offset + 0x08));
  const specularColor = unpackColor(readU32(view, offset + 0x0c));
  const alpha = view.getUint8(offset + 0x11) / 0xff;
  const tevLayerCount = view.getUint8(offset + 0x12);
  const unk0x14 = view.getUint8(offset + 0x14);
  const unk0x15 = view.getUint8(offset + 0x15);
  const tevLayerIdxs = [
    readS16(view, offset + 0x16),
    readS16(view, offset + 0x18),
    readS16(view, offset + 0x1a),
  ];
  const vtxAttrs = readU32(view, offset + 0x1c);
  let flags = readU32(view, offset + 0x00);
  if (vtxAttrs & (1 << GX.Attr.CLR0)) {
    flags |= MaterialFlags.VertColors;
  }
  if (tevLayerCount === 0) {
    flags |= MaterialFlags.SimpleMaterial;
  }
  const blendFactors = readU32(view, offset + 0x40);
  return {
    flags,
    materialColor,
    ambientColor,
    specularColor,
    alpha,
    tevLayerCount,
    unk0x14,
    unk0x15,
    tevLayerIdxs,
    vtxAttrs,
    blendFactors,
  };
}

function parseShape(view, offset) {
  const material = parseMaterial(view, offset);
  const dlistFlags = view.getUint8(offset + 0x13);
  const frontSize = view.getInt32(offset + 0x28);
  const backSize = view.getInt32(offset + 0x2c);
  const origin = {
    x: readF32(view, offset + 0x30),
    y: readF32(view, offset + 0x34),
    z: readF32(view, offset + 0x38),
  };
  let dlistOffs = offset + SHAPE_BASE_SIZE;
  const dlists = [];

  if (dlistFlags & DlistFlags.HasDlist0) {
    const data = view.buffer.slice(dlistOffs, dlistOffs + frontSize);
    dlists.push({
      data,
      cullMode: material.flags & MaterialFlags.DoubleSided ? GX.CullMode.NONE : GX.CullMode.FRONT,
    });
    dlistOffs += frontSize;
  }

  if (dlistFlags & DlistFlags.HasDlist1) {
    const data = view.buffer.slice(dlistOffs, dlistOffs + backSize);
    dlists.push({
      data,
      cullMode: material.flags & MaterialFlags.DoubleSided ? GX.CullMode.NONE : GX.CullMode.BACK,
    });
    dlistOffs += backSize;
  }

  if (dlistFlags & (DlistFlags.HasDlist2 | DlistFlags.HasDlist3)) {
    const extraFrontSize = view.getInt32(dlistOffs + 0x08);
    const extraBackSize = view.getInt32(dlistOffs + 0x0c);
    dlistOffs += 0x20;
    dlists.push({
      data: view.buffer.slice(dlistOffs, dlistOffs + extraFrontSize),
      cullMode: GX.CullMode.FRONT,
    });
    dlistOffs += extraFrontSize;
    dlists.push({
      data: view.buffer.slice(dlistOffs, dlistOffs + extraBackSize),
      cullMode: GX.CullMode.BACK,
    });
    dlistOffs += extraBackSize;
  }

  return {
    material,
    origin,
    dlists,
    size: dlistOffs - offset,
  };
}

function parseModel(view, offset, name, tpl) {
  const tag = String.fromCharCode(
    view.getUint8(offset),
    view.getUint8(offset + 1),
    view.getUint8(offset + 2),
    view.getUint8(offset + 3),
  );
  if (tag !== 'GCMF') {
    throw new Error(`Invalid GMA model tag: ${tag}`);
  }
  const flags = readU32(view, offset + 0x04);
  const boundSphereCenter = {
    x: readF32(view, offset + 0x08),
    y: readF32(view, offset + 0x0c),
    z: readF32(view, offset + 0x10),
  };
  const boundSphereRadius = readF32(view, offset + 0x14);
  const tevLayerCount = readS16(view, offset + 0x18);
  const opaqueShapeCount = readS16(view, offset + 0x1a);
  const translucentShapeCount = readS16(view, offset + 0x1c);
  const mtxCount = view.getInt8(offset + 0x1e);
  const texMtxSize = readU32(view, offset + 0x20);
  let offs = offset + 0x40;

  const tevLayers = [];
  for (let i = 0; i < tevLayerCount; i += 1) {
    tevLayers.push(parseTevLayer(view, tpl, offs));
    offs += 0x20;
  }

  const matrices = [];
  for (let i = 0; i < mtxCount; i += 1) {
    matrices.push(parseMatrix(view, offs));
    offs += 0x30;
  }

  let shapeOffs = offset + texMtxSize;
  const shapes = [];
  const totalShapes = opaqueShapeCount + translucentShapeCount;
  for (let i = 0; i < totalShapes; i += 1) {
    const shape = parseShape(view, shapeOffs);
    shapeOffs += shape.size;
    if (shape.material.vtxAttrs & (1 << GX.Attr._NBT)) {
      continue;
    }
    shapes.push(shape);
  }

  return {
    name,
    flags,
    boundSphereCenter,
    boundSphereRadius,
    opaqueShapeCount,
    translucentShapeCount,
    matrices,
    tevLayers,
    shapes,
  };
}

export function parseGma(buffer, tpl) {
  const view = new DataView(buffer);
  const count = readU32(view, 0x00);
  const gcmfBaseOffs = readU32(view, 0x04);
  const entryOffs = 0x08;
  const modelNameMap = new Map();
  const modelIdMap = new Map();
  const nameBuf = new Uint8Array(buffer, entryOffs + 0x08 * count, gcmfBaseOffs - (entryOffs + 0x08 * count));
  for (let i = 0; i < count; i += 1) {
    const gcmfOffs = view.getInt32(entryOffs + i * 0x08, false);
    const nameOffs = view.getInt32(entryOffs + i * 0x08 + 0x04, false);
    if (gcmfOffs < 0 && nameOffs <= 0) {
      continue;
    }
    const name = readString(nameBuf, nameOffs);
    const modelFlags = readU32(view, gcmfBaseOffs + gcmfOffs + 0x04);
    const unsupported = modelFlags & (ModelFlags.Stitching | ModelFlags.Skin | ModelFlags.Effective);
    if (unsupported) {
      continue;
    }
    const model = parseModel(view, gcmfBaseOffs + gcmfOffs, name, tpl);
    if (model.opaqueShapeCount + model.translucentShapeCount < 1) {
      continue;
    }
    modelNameMap.set(name, model);
    modelIdMap.set(i, model);
  }
  return { nameMap: modelNameMap, idMap: modelIdMap };
}

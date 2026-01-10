export const BLOCKS = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  WATER: 4,
  LOG: 5,
  LEAVES: 6,
  SAND: 7,
  PLANKS: 8
};

export const blockDefs = {
  [BLOCKS.AIR]: { name: "Air", solid: false },

  [BLOCKS.GRASS]: {
    name: "Grass",
    solid: true,
    textured: true,
    texture: "DIRT"
  },

  [BLOCKS.DIRT]: {
    name: "Dirt",
    solid: true,
    textured: true,
    texture: "DIRT"
  },

  [BLOCKS.STONE]: {
    name: "Stone",
    solid: true,
    textured: true,
    texture: "STONE"
  },

  [BLOCKS.WATER]: {
    name: "Water",
    solid: false,
    liquid: true,
    transparent: true,
    opacity: 0.7
  },

  [BLOCKS.LOG]: {
    name: "Wood Log",
    solid: true
  },

  [BLOCKS.LEAVES]: {
    name: "Leaves",
    solid: true,
    textured: true,
    texture: "LEAVES",
    transparent: true,
    opacity: 0.8
  },

  [BLOCKS.SAND]: {
    name: "Sand",
    solid: true,
    textured: true,
    texture: "SAND"
  },

  [BLOCKS.PLANKS]: {
    name: "Oak Planks",
    solid: true,
    textured: true,
    texture: "OAK_PLANK"
  }
};

// ---- helpers ----

export const isAir = id => id === BLOCKS.AIR;
export const isSolid = id => !!blockDefs[id]?.solid;
export const isLiquid = id => !!blockDefs[id]?.liquid;
export const isTransparent = id => !!blockDefs[id]?.transparent;
export const getBlockTexture = id =>
  blockDefs[id]?.textured ? blockDefs[id].texture : null;

export const getBlockName = id =>
  blockDefs[id]?.name ?? "Unknown";

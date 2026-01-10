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
  0: { name: "Air", solid: false },
  1: { name: "Grass", solid: true, textured: true, texture: "DIRT" },
  2: { name: "Dirt", solid: true, textured: true, texture: "DIRT" },
  3: { name: "Stone", solid: true, textured: true, texture: "STONE" },
  4: { name: "Water", solid: false, liquid: true, transparent: true, opacity: 0.7 },
  5: { name: "Wood Log", solid: true },
  6: { name: "Leaves", solid: true, textured: true, texture: "LEAVES", transparent: true, opacity: 0.8 },
  7: { name: "Sand", solid: true, textured: true, texture: "SAND" },
  8: { name: "Oak Planks", solid: true, textured: true, texture: "OAK_PLANK" }
};

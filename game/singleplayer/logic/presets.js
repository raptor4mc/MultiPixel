export const BLOCKS = {
  1: { name: "Grass", color: 0x4CAF50 },
  2: { name: "Dirt",  color: 0x654321 },
  3: { name: "Stone", color: 0x666666 },
  4: { name: "Water", color: 0x1976D2, transparent: true, opacity: 0.7 }
};

export const BLOCK_IDS = Object.keys(BLOCKS).map(Number);

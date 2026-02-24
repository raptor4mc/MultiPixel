(function () {
  const PICKAXE_BY_ITEM_ID = {
    11: { name: 'Wooden Pickaxe', tier: 1, hardBlockSpeed: 0.56, softBlockPenalty: 1.05 },
    12: { name: 'Stone Pickaxe', tier: 2, hardBlockSpeed: 0.38, softBlockPenalty: 1.02 },
  };

const HARD_BLOCKS = new Set([
  // --- Natural stone ---
  3,   // Stone
  13,  // Sandstone
  21,  // Stone Brick
  24,  // Cracked Stone Brick
  27,  // Smooth Stone
  29,  // Smooth Sandstone

  // --- Ores ---
  18,  // Coal Ore
  30,  // Iron Ore
  35,  // Copper Ore
  40,  // Gold Ore
  43,  // Diamond Ore
  54,  // Emerald Ore

  // --- Mineral / metal blocks ---
  17,  // Cobblestone
  20,  // Coal Block
  32,  // Raw Iron Block
  34,  // Copper Block
  36,  // Raw Copper Block
  37,  // Weathered Copper Block
  41,  // Raw Gold Block
  45,  // Diamond Block
  55,  // Emerald Block
  68,  // Steel Block

  // --- Special heavy blocks ---
  23,  // Furnace
  71,  // Lit Furnace
  39   // Obsidian
]);

  function getEquippedPickaxe(item) {
    if (!item) return null;
    return PICKAXE_BY_ITEM_ID[item.id] || null;
  }

  function getMiningTimeMs(blockId, hardness, equippedPickaxe) {
    if (!isFinite(hardness)) return Infinity;
    const baseMs = hardness * 900;
    const isHard = HARD_BLOCKS.has(blockId);

    if (isHard) {
      if (!equippedPickaxe) return baseMs * 2.9;
      return baseMs * equippedPickaxe.hardBlockSpeed;
    }

    if (!equippedPickaxe) return baseMs;
    return baseMs * equippedPickaxe.softBlockPenalty;
  }

  function getDrop(blockId) {
    if (blockId === 3) return { id: 17, count: 1 };      // Stone -> Cobblestone
    if (blockId === 15) return { id: 16, count: 2 };     // Snow block -> Snowballs
    if (blockId === 18) return { id: 19, count: 1 };     // Coal ore -> Coal
    if (blockId === 30) return { id: 31, count: 1 };     // Steel ore -> iron
    if (blockId === 1) return { id: 2, count: 1};
    if (blockId === 35) {
  const amount = Math.floor(Math.random() * 5) + 1; // 1–5
  return { id: 38, count: amount };
}
    if (blockId === 40) return { id: 42, count: 1};
    if (blockId === 43) return { id: 44, count: 1};
    if (blockId === 54) return { id: 56, count: 1};
    if (blockId === 28) {
  if (Math.random() < 0.5) {
    return { id: 46, count: 1 }; // Flint
  } else {
    return { id: 28, count: 1 }; // Gravel
  }
}

    return { id: blockId, count: 1 };
    
  }

  window.PickaxeSystem = {
    getEquippedPickaxe,
    getMiningTimeMs,
    getDrop,
    HARD_BLOCKS,
  };
})();

(function () {
  const CHUNK_SIZE = 16;
  const CHUNK_HEIGHT = 96;
  const WORLD_RADIUS = 13;
  const BLOCK_SIZE = 1;
  const SEA_LEVEL = 18;
  const BASE_LAND_Y = 20;
  const ISLAND_RADIUS = 30;

  const CAVE_SCALE = 0.05;
  const CAVE_THRESHOLD = 0.7;
  const CAVE_MIN_Y = 5;
  const CAVE_MAX_Y_OFFSET = 4;

  const PLAYER_HEIGHT = 1.8 * BLOCK_SIZE;
  const PLAYER_RADIUS = 0.3;
  const GRAVITY = -0.0002;
  const JUMP_POWER = 0.17;

  const INV_COLS = 9;
  const INV_ROWS = 3;
  const HOTBAR_SLOTS = 9;
  const TOTAL_INV_SIZE = INV_ROWS * INV_COLS + HOTBAR_SLOTS;

  const REPO_BASE_PREFIX = '/MultiPixel';
  const getAssetPath = (subPath) => {
    const ASSET_BASE_DIR = 'game/singleplayer/assets';
    if (REPO_BASE_PREFIX) return `${REPO_BASE_PREFIX}/${ASSET_BASE_DIR}/${subPath}`;
    return `${ASSET_BASE_DIR}/${subPath}`;
  };

  const ASSET_FILEPATHS = {
    GRASS: getAssetPath('textures/grass.png'),
    DIRT: getAssetPath('textures/dirt.png'),
    STONE: getAssetPath('textures/stone.png'),
    LEAVES: getAssetPath('textures/azalea_leaves.png'),
    SAND: getAssetPath('textures/sand.png'),
    HEART: getAssetPath('ui/heart_full.png'),
    FOOD: getAssetPath('ui/food_full.png'),
    OAK_PLANK: getAssetPath('textures/oak_planks.png'),
    CRAFTING_TABLE_SIDE: getAssetPath('textures/crafting_table_side.png'),
    STICK: getAssetPath('textures/item/stick.png'),
    SAND_STONE: getAssetPath('textures/sand/normal/sand_stone.png'),
    COBBLESTONE: getAssetPath('textures/cobblestone.png'),
    SNOW_BLOCK: getAssetPath('textures/snow.png'),
    SNOWBALL: getAssetPath('textures/item/snowball.png'),
    WOODEN_PICKAXE: getAssetPath('textures/item/tool/pickaxe/wooden_pickaxe.png'),
    BEDROCK: getAssetPath('textures/bedrock.png'),
    COAL: getAssetPath('textures/item/coal.png'),
    COAL_ORE_BLOCK: getAssetPath('textures/coal_ore.png'),
    COAL_BLOCK: getAssetPath('textures/coal_block.png'),
    STONE_BRICK_BLOCK: getAssetPath('textures/stone_bricks.png'),
    TORCH: getAssetPath('textures/item/torch.png'),
    FURNACE: getAssetPath('textures/furnace_off.png'),
    CRACKED_STONE_BRICK: getAssetPath('textures/cracked_stone_bricks.png'),
    CHARCOAL: getAssetPath('textures/item/charcoal.png'),
    GLASS_BLOCK: getAssetPath('textures/building/glass_block.png'),
    SMOOTH_STONE_BLOCK: getAssetPath('textures/smooth_stone.png'),
    GRAVEL: getAssetPath('textures/gravel.png'),
    SMOOTH_SANDSTONE_BLOCK: getAssetPath('textures/sand/normal/smooth_sandstone_block.png'),
    IRON_ORE_BLOCK: getAssetPath('textures/iron_ore.png'),
    IRON_ORE: getAssetPath('textures/item/raw_iron.png'),
    RAW_IRON_BLOCK: getAssetPath('textures/raw_iron_block.png'),
    LAVA_LIQUID: getAssetPath('textures/liquid/lava.jpeg'),
    WATER: getAssetPath('textures/liquid/water_still.jpeg'),
    COPPER_BLOCK: getAssetPath('textures/copper/copper_block.png'),
    COPPER_ORE: getAssetPath('textures/copper/copper_ore.png'),
    RAW_COPPER_BLOCK: getAssetPath('textures/copper/raw_copper_block.png'),
    WEATHERED_COPPER_BLOCK: getAssetPath('textures/copper/weathered_copper.png'),
    RAW_COPPER_ITEM: getAssetPath('textures/item/raw_copper.png'),
    OBSIDIAN_BLOCK: getAssetPath('textures/obsidian.png'),
    GOLD_ORE_BLOCK: getAssetPath('textures/gold_ore.png'),
    RAW_GOLD_BLOCK: getAssetPath('textures/raw_gold_block.png'),
    GOLD_ORE: getAssetPath('textures/item/raw_gold.png'),
    DIAMOND_ORE: getAssetPath('textures/diamond_ore.png'),
    DIAMOND: getAssetPath('textures/item/diamond.png'),
    DIAMOND_BLOCK: getAssetPath('textures/diamond_block.png'),
    FLINT: getAssetPath('textures/item/flint.png'),
    WOOD_LOG: getAssetPath('textures/oak/oak_log.png'),
    EMERALD_ORE: getAssetPath('textures/emerald_ore.png'),
    EMERALD_BLOCK: getAssetPath('textures/emerald_block.png'),
    EMERALD:  getAssetPath('textures/item/emerald.png'),
    STONE_PICKAXE: getAssetPath('textures/item/tool/pickaxe/stone_pickaxe.png'),
    BLACK_DYE: getAssetPath('textures/item/black_dye.png'),
    GREEN_DYE: getAssetPath('textures/item/green_dye.png'),
  };

  const blockMaterials = {
    0: { name: 'Air', id: 0, textured: false },
    1: { name: 'Grass', id: 1, textured: true, textureKey: 'GRASS' },
    2: { name: 'Dirt', id: 2, textured: true, textureKey: 'DIRT' },
    3: { name: 'Stone', id: 3, textured: true, textureKey: 'STONE' },
    4: { name: 'Water', id: 4, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    5: { name: 'Wood Log', id: 5, textured: true, textureKey: 'WOOD_LOG' },
    6: { name: 'Leaves', id: 6, textured: true, textureKey: 'LEAVES', transparent: true, opacity: 1 },
    7: { name: 'Sand', id: 7, textured: true, textureKey: 'SAND' },
    8: { name: 'Oak Planks', id: 8, textured: true, textureKey: 'OAK_PLANK' },
    9: { name: 'Crafting Table', id: 9, textured: true, textureKey: 'CRAFTING_TABLE_SIDE' },
    10: { name: 'Stick', id: 10, textured: true, textureKey: 'STICK' },
    11: { name: 'Wooden Pickaxe', id: 11, textured: true, textureKey: 'WOODEN_PICKAXE', toolType: 'pickaxe', tier: 1 },
    12: { name: 'Stone Pickaxe', id: 12, textured: true, textureKey: 'STONE_PICKAXE', toolType: 'pickaxe', tier: 2  },
    13: { name: 'Sand stone', id: 13, textured: true, textureKey: 'SAND_STONE' },
    14: { name: 'Bedrock', id: 14, textured: true, textureKey: 'BEDROCK', unbreakable: true },
    15: { name: 'Snow Block', id: 15, textured: true, textureKey: 'SNOW_BLOCK', color: 0xf2f7ff },
    16: { name: 'Snowball', id: 16, textured: true, textureKey: 'SNOWBALL', color: 0xe7eefc },
    17: { name: 'Cobblestone', id: 17, textured: true, textureKey: 'COBBLESTONE' },
    18: { name: 'Coal Ore', id: 18, textured: true, textureKey: 'COAL_ORE_BLOCK' },
    19: { name: 'Coal', id: 19, textured: true, textureKey: 'COAL' },
    20: { name: 'Coal Block', id: 20, textured: true, textureKey: 'COAL_BLOCK' },
    21: { name: 'Stone Brick', id: 21, textured: true, textureKey: 'STONE_BRICK_BLOCK' },
    22: { name: 'torch', id: 22, textured: true, textureKey: 'TORCH', transparent: true, opacity: 0 },
    23: { name: 'Furnace', id: 23, textured: true, textureKey: 'FURNACE' },
    24: { name: 'Cracked Stone Brick', id: 24, textured: true, textureKey: 'CRACKED_STONE_BRICK' },
    25: { name: 'Charcoal', id: 25, textured: true, textureKey: 'CHARCOAL' },
    26: { name: 'Glass', id: 26, textured: true, textureKey: 'GLASS_BLOCK', transparent: true, opacity: 0.8 },
    27: { name: 'Smooth Stone', id: 27, textured: true, textureKey: 'SMOOTH_STONE_BLOCK' }, 
    28: { name: 'gravel', id: 28, textured: true, textureKey: 'GRAVEL' },
    29: { name: 'Smooth SandStone', id: 29, textured: true, textureKey: 'SMOOTH_SANDSTONE_BLOCK' },
    30: { name: 'Iron Ore Block', id: 30, textured: true, textureKey: 'IRON_ORE_BLOCK' },
    31: { name: 'Iron Ore', id: 31, textured: true, textureKey: 'IRON_ORE' },
    32: { name: 'Block of raw iron', id: 32, textured: true, textureKey: 'RAW_IRON_BLOCK' },
    33: { name: 'Lava', id: 33, textured: true, textureKey: 'LAVA_LIQUID' },
    34: { name: 'Copper Block', id: 34, textured: true, textureKey: 'COPPER_BLOCK' },
    35: { name: 'Copper ore', id: 35, textured: true, textureKey: 'COPPER_ORE' },
    36: { name: 'Raw copper block', id: 36, textured: true, textureKey: 'RAW_COPPER_BLOCK' },
    37: { name: 'Weathered Copper Block', id: 37, textured: true, textureKey: 'WEATHERED_COPPER_BLOCK' },
    38: { name: 'raw copper', id: 38, textured: true, textureKey: 'RAW_COPPER_ITEM' },
    39: { name: 'Obsidian Block', id: 39, textured: true, textureKey: 'OBSIDIAN_BLOCK' },
    40: { name: 'Gold Ore', id: 40, textured: true, textureKey: 'GOLD_ORE_BLOCK' },
    41: { name: 'Raw Gold Block', id: 41, textured: true, textureKey: 'RAW_GOLD_BLOCK' },
    42: { name: 'Gold Ore', id: 42, textured: true, textureKey: 'GOLD_ORE' },
    43: { name: 'Diamond Ore', id: 43, textured: true, textureKey: 'DIAMOND_ORE' },
    44: { name: 'Diamond', id: 44, textured: true, textureKey: 'DIAMOND' },
    45: { name: 'Diamond Block', id: 45, textured: true, textureKey: 'DIAMOND_BLOCK' },
    46: { name: 'Flint', id: 46, id: 46, textured: true, textureKey: 'FLINT' },
    47: { name: 'Flowing Water', id: 47, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    48: { name: 'Flowing Water', id: 48, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    49: { name: 'Flowing Water', id: 49, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    50: { name: 'Flowing Water', id: 50, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    51: { name: 'Flowing Water', id: 51, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    52: { name: 'Flowing Water', id: 52, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    53: { name: 'Flowing Water', id: 53, transparent: true, opacity: 0.9, textured: true, textureKey: 'WATER' },
    54: { name: 'Emerald ore', id: 54, textured: true, textureKey: 'EMERALD_ORE' },
    55: { name: 'Emerald Block', id: 55, textured: true, textureKey: 'EMERALD_BLOCK' },
    56: { name: 'Emerald', id: 56, textured: true, textureKey: 'EMERALD' },
    57: { name: 'Black Dye', id: 57, textured: true, textureKey: 'BLACK_DYE' },
    58: { name: 'Green Dye', id: 58, textured: true, textureKey: 'GREEN_DYE' },
  }; 

  window.SingleplayerConfig = {
    CHUNK_SIZE, CHUNK_HEIGHT, WORLD_RADIUS, BLOCK_SIZE, SEA_LEVEL, BASE_LAND_Y, ISLAND_RADIUS,
    CAVE_SCALE, CAVE_THRESHOLD, CAVE_MIN_Y, CAVE_MAX_Y_OFFSET,
    PLAYER_HEIGHT, PLAYER_RADIUS, GRAVITY, JUMP_POWER,
    INV_COLS, INV_ROWS, HOTBAR_SLOTS, TOTAL_INV_SIZE,
    REPO_BASE_PREFIX,
    ASSET_FILEPATHS, blockMaterials,
    SOLID_BLOCKS: [1, 2, 3, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 28, 29, 30, 32, 34, 35, 36, 37, 39, 40, 41, 43, 45, 54, 55],
    LIQUID_BLOCKS: [4, 33, 47, 48, 49, 50, 51, 52, 53],
    DEFAULT_PLAYER: {
      moveSpeed: 0.20,
      sprintMultiplier: 6,
      rotationSpeed: 0.002,
      health: 20,
      maxHealth: 20,
    },
  };
})();

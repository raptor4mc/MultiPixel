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
  const GRAVITY = -0.012;
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
    DIRT: getAssetPath('textures/natural/dirt_block.png'),
    STONE: getAssetPath('textures/natural/stone_block.png'),
    LEAVES: getAssetPath('textures/natural/oak/leaf_oak.png'),
    SAND: getAssetPath('textures/natural/sand_block.png'),
    HEART: getAssetPath('ui/heart_full.png'),
    FOOD: getAssetPath('ui/food_full.png'),
    OAK_PLANK: getAssetPath('textures/wood/oak/oak_planks.png'),
    CRAFTING_TABLE_SIDE: getAssetPath('textures/crafting_table_side.png'),
    STICK: getAssetPath('textures/item/stick.png'),
    SAND_STONE: getAssetPath('textures/sand/normal/sand_stone.png'),
    COBBLESTONE: getAssetPath('textures/cobblestone.png'),
    SNOW_BLOCK: getAssetPath('textures/natural/snow_block.png'),
    SNOWBALL: getAssetPath('textures/item/snowball_item.png'),
    WOODEN_PICKAXE: getAssetPath('textures/tool/pickaxe/wooden_pickaxe.png'),
    BEDROCK: getAssetPath('textures/natural/bedrock.png'),
    COAL: getAssetPath('textures/item/coal.png'),
    COAL_ORE_BLOCK: getAssetPath('textures/natural/ore/coal_ore_block.png'),
    COAL_BLOCK: getAssetPath('textures/coal_block.png'),
    STONE_BRICK_BLOCK: getAssetPath('textures/stone/stone_brick_block.png'),
    TORCH: getAssetPath('textures/torch.png'),
    FURNACE: getAssetPath('textures/furnace_off.png'),
    CRACKED_STONE_BRICK: getAssetPath('textures/stone/cracked_stone_brick.png'),
    CHARCOAL: getAssetPath('textures/item/charcoal.png'),
    GLASS_BLOCK: getAssetPath('textures/building/glass_block.png'),
    SMOOTH_STONE_BLOCK: getAssetPath('textures/stone/smooth_stone_block.png'),
    GRAVEL: getAssetPath('textures/natural/gravel_block.png'),
    SMOOTH_SANDSTONE_BLOCK: getAssetPath('textures/sand/normal/smooth_sandstone_block.png'),
    IRON_ORE_BLOCK: GetAssetPath('textures/natural/ore/iron_ore_block.png'),
    IRON_ORE: GetAssetPath('textures/item/iron_ore.png'),
  };

  const blockMaterials = {
    0: { name: 'Air', id: 0, textured: false },
    1: { name: 'Grass', id: 1, textured: true, textureKey: 'DIRT' },
    2: { name: 'Dirt', id: 2, textured: true, textureKey: 'DIRT' },
    3: { name: 'Stone', id: 3, textured: true, textureKey: 'STONE' },
    4: { name: 'Water', id: 4, color: 0x1976D2, transparent: true, opacity: 0.7, textured: false },
    5: { name: 'Wood Log', id: 5, color: 0x8B4513, textured: false },
    6: { name: 'Leaves', id: 6, textured: true, textureKey: 'LEAVES', transparent: true, opacity: 0.8 },
    7: { name: 'Sand', id: 7, textured: true, textureKey: 'SAND' },
    8: { name: 'Oak Planks', id: 8, textured: true, textureKey: 'OAK_PLANK' },
    9: { name: 'Crafting Table', id: 9, textured: true, textureKey: 'CRAFTING_TABLE_SIDE' },
    10: { name: 'Stick', id: 10, textured: true, textureKey: 'STICK' },
    11: { name: 'Wooden Pickaxe', id: 11, textured: true, textureKey: 'WOODEN_PICKAXE', toolType: 'pickaxe', tier: 1 },
    12: { name: 'Stone Pickaxe', id: 12, textured: false, color: 0x7F8C8D },
    13: { name: 'Sand stone', id: 13, textured: true, textureKey: 'SAND_STONE' },
    14: { name: 'Bedrock', id: 14, textured: true, textureKey: 'BEDROCK', unbreakable: true },
    15: { name: 'Snow Block', id: 15, textured: true, textureKey: 'SNOW_BLOCK', color: 0xf2f7ff },
    16: { name: 'Snowball', id: 16, textured: true, textureKey: 'SNOWBALL', color: 0xe7eefc },
    17: { name: 'Cobblestone', id: 17, textured: true, textureKey: 'COBBLESTONE' },
    18: { name: 'Coal Ore', id: 18, textured: true, textureKey: 'COAL_ORE_BLOCK' },
    19: { name: 'Coal', id: 19, textured: true, textureKey: 'COAL' },
    20: { name: 'Coal Block', id: 20, textured: true, textureKey: 'COAL_BLOCK' },
    21: { name: 'Stone Brick', id: 21, textured: true, textureKey: 'STONE_BRICK_BLOCK' },
    22: { name: 'torch', id: 22, textured: true, textureKey: 'TORCH' },
    23: { name: 'Furnace', id: 23, textured: true, textureKey: 'FURNACE' },
    24: { name: 'Cracked Stone Brick', id: 24, textured: true, textureKey: 'CRACKED_STONE_BRICK' },
    25: { name: 'Charcoal', id: 25, textured: true, textureKey: 'CHARCOAL' },
    26: { name: 'Glass', id: 26, textured: true, textureKey: 'GLASS_BLOCK' },
    27: { name: 'Smooth Stone', id: 27, textured: true, textureKey: 'SMOOTH_STONE_BLOCK' }, 
    28: { name: 'gravel', id: 28, textured: true, textureKey: 'GRAVEL' },
    29: { name: 'Smooth SandStone', id: 29, textured: true, textureKey: 'SMOOTH_SANDSTONE_BLOCK' },
    30: { name: 'Iron Ore Block', id: 30, textured: true, textureKey: 'IRON_ORE_BLOCK' },
    31: { name: 'Iron Ore', id: 31, textured: true, textureKey: 'IRON_ORE' },
  };

  window.SingleplayerConfig = {
    CHUNK_SIZE, CHUNK_HEIGHT, WORLD_RADIUS, BLOCK_SIZE, SEA_LEVEL, BASE_LAND_Y, ISLAND_RADIUS,
    CAVE_SCALE, CAVE_THRESHOLD, CAVE_MIN_Y, CAVE_MAX_Y_OFFSET,
    PLAYER_HEIGHT, PLAYER_RADIUS, GRAVITY, JUMP_POWER,
    INV_COLS, INV_ROWS, HOTBAR_SLOTS, TOTAL_INV_SIZE,
    REPO_BASE_PREFIX,
    ASSET_FILEPATHS, blockMaterials,
    SOLID_BLOCKS: [1, 2, 3, 5, 6, 7, 8, 9, 13, 14, 15, 17, 18, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30],
    LIQUID_BLOCKS: [4],
    DEFAULT_PLAYER: {
      moveSpeed: 0.12,
      sprintMultiplier: 1.7,
      rotationSpeed: 0.002,
      health: 20,
      maxHealth: 20,
    },
  };
})();

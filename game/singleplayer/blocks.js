// src/blocks.js

// --- 1. CORE CONSTANTS ---
// These define the structure of the world and the game mechanics.
export const CHUNK_SIZE = 16;
export const WORLD_HEIGHT = 128; // Max height for the world generation
export const TEXTURE_SIZE = 16;  // Size of individual textures in a tileset (if used)
export const PLAYER_REACH_DISTANCE = 5; // How far the player can interact with blocks
export const MAX_INVENTORY_SLOTS = 27;
export const HOTBAR_SIZE = 9;

// --- 2. ASSET FILE PATHS ---
// In a real project, these would point to your actual texture files.
export const ASSET_FILEPATHS = {
    // Placeholder images used for demonstration
    grass_top: 'https://placehold.co/16x16/4F9A43/FFFFFF?text=G',
    grass_side: 'https://placehold.co/16x16/707070/FFFFFF?text=GS',
    dirt: 'https://placehold.co/16x16/7B5C3C/FFFFFF?text=D',
    stone: 'https://placehold.co/16x16/A0A0A0/000000?text=S',
    cobblestone: 'https://placehold.co/16x16/808080/FFFFFF?text=CS',
    planks: 'https://placehold.co/16x16/B88849/FFFFFF?text=P',
    glass: 'https://placehold.co/16x16/FFFFFF/AAAAAA?text=O', // 'O' for Opaque glass
    water: 'https://placehold.co/16x16/4C72A0/FFFFFF?text=W',
    air: null,
};

// --- 3. BLOCK DEFINITIONS ---
// This map defines the properties of every single block type.
// The key is the internal name, and the value is an object containing metadata.
export const blockMaterials = {
    'air': { 
        id: 0, 
        name: 'Air', 
        transparent: true, 
        solid: false, 
        textureKey: ASSET_FILEPATHS.air,
    },
    'grass': { 
        id: 1, 
        name: 'Grass Block', 
        transparent: false, 
        solid: true, 
        // Define textures for each face (top, side, bottom)
        textures: {
            top: ASSET_FILEPATHS.grass_top,
            side: ASSET_FILEPATHS.grass_side,
            bottom: ASSET_FILEPATHS.dirt,
        },
        drop: 'dirt',
    },
    'dirt': { 
        id: 2, 
        name: 'Dirt', 
        transparent: false, 
        solid: true, 
        textureKey: ASSET_FILEPATHS.dirt,
        drop: 'dirt',
    },
    'stone': { 
        id: 3, 
        name: 'Stone', 
        transparent: false, 
        solid: true, 
        textureKey: ASSET_FILEPATHS.stone,
        drop: 'cobblestone',
    },
    'cobblestone': {
        id: 4,
        name: 'Cobblestone',
        transparent: false,
        solid: true,
        textureKey: ASSET_FILEPATHS.cobblestone,
        drop: 'cobblestone',
    },
    'oak_planks': {
        id: 5,
        name: 'Oak Planks',
        transparent: false,
        solid: true,
        textureKey: ASSET_FILEPATHS.planks,
        drop: 'oak_planks',
    },
    'glass': {
        id: 6,
        name: 'Glass',
        transparent: true, // Transparent blocks need special rendering order
        solid: true,
        textureKey: ASSET_FILEPATHS.glass,
        drop: 'glass',
    },
    'water': {
        id: 7,
        name: 'Water',
        transparent: true,
        solid: false, // Non-solid for movement
        textureKey: ASSET_FILEPATHS.water,
    }
    // Add more blocks here
};

// Helper function to get a block's ID by its name
export function getBlockId(name) {
    const block = blockMaterials[name];
    return block ? block.id : 0;
}

// Helper function to get a block's name by its ID
export function getBlockName(id) {
    for (const name in blockMaterials) {
        if (blockMaterials[name].id === id) {
            return name;
        }
    }
    return 'air';
}

// --- 4. CRAFTING RECIPES ---
// Format: { output: {item: 'block_name', count: N}, ingredients: [{item: 'name', count: N}, ...] }
export const RECIPES = [
    {
        output: { item: 'oak_planks', count: 4 },
        ingredients: [{ item: 'wood', count: 1 }] // Assuming 'wood' is a resource block
    },
    {
        output: { item: 'stone', count: 1 },
        ingredients: [{ item: 'cobblestone', count: 1 }]
    },
    // Add more crafting recipes
];

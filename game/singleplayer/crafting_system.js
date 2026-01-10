/**
 * MultiPixel Crafting System
 * Handles recipe definitions and pattern matching for 2x2 and 3x3 grids.
 */

// --- 1. RECIPE DEFINITIONS ---
// Shape: Array of rows. 0 = empty, ID = required block.
// Recipes are agnostic of grid size; the matcher finds the pattern within the grid.
window.CRAFTING_RECIPES = [
    // 1. Oak Planks (1 Log -> 4 Planks)
    {
        name: "Oak Planks",
        output: { id: 8, count: 4 },
        shape: [
            [5] 
        ]
    },
    // 2. Crafting Table (4 Planks -> 1 Crafting Table)
    {
        name: "Crafting Table",
        output: { id: 9, count: 1 }, 
        shape: [
            [8, 8],
            [8, 8]
        ]
    },
    // 3. Stick (2 Planks vertical -> 4 Sticks)
    {
        name: "Stick",
        output: { id: 10, count: 4 },
        shape: [
            [8],
            [8]
        ]
    },
    // 4. Wooden Pickaxe (3 Planks, 2 Sticks -> 1 Pickaxe)
    // REQUIRES 3x3 Grid
    {
        name: "Wooden Pickaxe",
        output: { id: 11, count: 1 },
        shape: [
            [8, 8, 8],
            [0, 10, 0],
            [0, 10, 0]
        ]
    },
    // 5. Stone Pickaxe (3 Stone, 2 Sticks)
    {
        name: "Stone Pickaxe",
        output: { id: 12, count: 1 },
        shape: [
            [3, 3, 3],
            [0, 10, 0],
            [0, 10, 0]
        ]
    }
];

// --- 2. LOGIC ---

/**
 * Checks if the current grid contains a valid recipe.
 * @param {Array} inputSlots - Array of item objects (null or {id, count}).
 * @param {Number} gridWidth - Width of the grid (2 for Inv, 3 for Table).
 * @returns {Object|null} The result object or null.
 */
window.checkCraftingRecipe = function(inputSlots, gridWidth) {
    // 1. Convert input slots to a 2D matrix of IDs
    const grid = [];
    let hasItems = false;
    
    for (let r = 0; r < gridWidth; r++) {
        const row = [];
        for (let c = 0; c < gridWidth; c++) {
            const item = inputSlots[r * gridWidth + c];
            row.push(item ? item.id : 0);
            if (item) hasItems = true;
        }
        grid.push(row);
    }

    if (!hasItems) return null;

    // 2. Find the bounds of the actual items in the grid (Crop the empty space)
    let minR = gridWidth, maxR = -1, minC = gridWidth, maxC = -1;

    for (let r = 0; r < gridWidth; r++) {
        for (let c = 0; c < gridWidth; c++) {
            if (grid[r][c] !== 0) {
                if (r < minR) minR = r;
                if (r > maxR) maxR = r;
                if (c < minC) minC = c;
                if (c > maxC) maxC = c;
            }
        }
    }

    const patternHeight = maxR - minR + 1;
    const patternWidth = maxC - minC + 1;

    // 3. Match against recipes
    for (const recipe of window.CRAFTING_RECIPES) {
        const shape = recipe.shape;
        const recipeH = shape.length;
        const recipeW = shape[0].length;

        // If dimensions don't match exactly, skip
        if (patternHeight !== recipeH || patternWidth !== recipeW) continue;

        let match = true;
        // Check every block in the cropped area
        for (let r = 0; r < recipeH; r++) {
            for (let c = 0; c < recipeW; c++) {
                const requiredId = shape[r][c];
                // Get the actual ID from the grid, offset by minR/minC
                const actualId = grid[minR + r][minC + c];

                if (requiredId !== 0 && requiredId !== actualId) {
                    match = false;
                    break;
                }
                // Also ensure that if the recipe has air (0), the grid also has air/nothing there
                // (Though our cropping logic mostly handles this, specific internal gaps matter)
                 if (requiredId === 0 && actualId !== 0) {
                    match = false;
                    break;
                }
            }
            if (!match) break;
        }

        if (match) {
            // Check if we have enough items (assuming 1 per craft for now)
            // We need to find the minimum count of all ingredients used
            let minCount = 64;
            
            for (let r = 0; r < gridWidth; r++) {
                for (let c = 0; c < gridWidth; c++) {
                    const item = inputSlots[r * gridWidth + c];
                    // If this slot is part of the pattern (not empty in grid)
                    if (item && grid[r][c] !== 0) {
                        minCount = Math.min(minCount, item.count);
                    }
                }
            }

            return {
                id: recipe.output.id,
                count: recipe.output.count * minCount,
                requiredCountPerCraft: 1, // Standard recipe uses 1 of each input
                recipeOutputPerCraft: recipe.output.count,
                // We return the crop offset so we know where to consume items from
                offset: { r: minR, c: minC, h: recipeH, w: recipeW, shape: shape }
            };
        }
    }

    return null;
};

/**
 * Consumes items from the grid based on the successful recipe match.
 * @param {Array} inputSlots - The actual inventory array for the grid.
 * @param {Object} recipeResult - The result object returned by checkCraftingRecipe.
 * @param {Number} gridWidth - Width of the grid.
 * @returns {Boolean} Success.
 */
window.consumeCraftingInputForOne = function(inputSlots, recipeResult, gridWidth) {
    if (!recipeResult || !recipeResult.offset) return false;

    const { r: minR, c: minC, h, w, shape } = recipeResult.offset;

    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            const requiredId = shape[r][c];
            if (requiredId !== 0) {
                // Calculate actual index in the flat inputSlots array
                const slotIndex = (minR + r) * gridWidth + (minC + c);
                const item = inputSlots[slotIndex];
                
                if (item) {
                    item.count--;
                    if (item.count <= 0) {
                        inputSlots[slotIndex] = null;
                    }
                }
            }
        }
    }
    return true;
};

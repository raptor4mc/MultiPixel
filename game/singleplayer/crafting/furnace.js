(function () {
  const DEFAULTS = {
    cookTimeSec: 8,
    fuels: {
      19: 80,  // coal
      20: 800, // coal block
      25: 80,  // charcoal
      5: 15,   // wood log
      8: 15,   // planks
      10: 5,   // stick
    },
    recipes: {
      17: { out: 3, cookTimeSec: 8 },   // cobblestone -> stone
      7: { out: 13, cookTimeSec: 7 },   // sand -> sandstone
      30: { out: 31, cookTimeSec: 10 }, // iron ore block -> raw iron
      35: { out: 38, cookTimeSec: 10 }, // copper ore -> raw copper
      40: { out: 42, cookTimeSec: 10 }, // gold ore -> raw gold
      5: { out: 25, cookTimeSec: 8 },   // log -> charcoal
    }
  };

  function createState() {
    return {
      input: null,
      fuel: null,
      output: null,
      burnTime: 0,
      maxBurnTime: 0,
      cookTime: 0,
      cookTimeTarget: DEFAULTS.cookTimeSec,
    };
  }

  function getRecipe(id) { return DEFAULTS.recipes[id] || null; }
  function getFuelTime(id) { return DEFAULTS.fuels[id] || 0; }

  function canSmelt(state) {
    if (!state.input) return false;
    const recipe = getRecipe(state.input.id);
    if (!recipe) return false;
    if (!state.output) return true;
    if (state.output.id !== recipe.out) return false;
    return state.output.count < 64;
  }

  function consumeFuel(state) {
    if (!state.fuel) return false;
    const fuelTime = getFuelTime(state.fuel.id);
    if (!fuelTime) return false;
    state.maxBurnTime = fuelTime;
    state.burnTime = fuelTime;
    state.fuel.count -= 1;
    if (state.fuel.count <= 0) state.fuel = null;
    return true;
  }

  function smeltOne(state) {
    const recipe = getRecipe(state.input?.id);
    if (!recipe) return false;
    state.input.count -= 1;
    if (state.input.count <= 0) state.input = null;
    if (!state.output) state.output = { id: recipe.out, count: 1 };
    else state.output.count += 1;
    return true;
  }

  function updateState(state, deltaSec) {
    if (state.burnTime > 0) state.burnTime = Math.max(0, state.burnTime - deltaSec);
    if (state.burnTime <= 0 && canSmelt(state) && state.fuel) consumeFuel(state);
    if (canSmelt(state)) {
      const recipe = getRecipe(state.input.id);
      state.cookTimeTarget = recipe?.cookTimeSec || DEFAULTS.cookTimeSec;
      if (state.burnTime > 0) {
        state.cookTime += deltaSec;
        if (state.cookTime >= state.cookTimeTarget) {
          smeltOne(state);
          state.cookTime = 0;
        }
      }
    } else {
      state.cookTime = 0;
    }
  }

  window.FurnaceSystem = { DEFAULTS, createState, updateState, canSmelt, getRecipe, getFuelTime };
})();


class Furnace {
    constructor() {
        this.input = null;
        this.fuel = null;
        this.output = null;

        this.burnTime = 0;
        this.maxBurnTime = 0;

        this.cookTime = 0;
        this.maxCookTime = 5; // seconds to smelt
    }

    update(deltaTime) {
        // If burning, reduce burn time
        if (this.burnTime > 0) {
            this.burnTime -= deltaTime;
        }

        // If not burning but has fuel and input
        if (this.burnTime <= 0 && this.canSmelt() && this.fuel) {
            this.consumeFuel();
        }

        // If burning and can smelt
        if (this.burnTime > 0 && this.canSmelt()) {
            this.cookTime += deltaTime;

            if (this.cookTime >= this.maxCookTime) {
                this.smeltItem();
                this.cookTime = 0;
            }
        } else {
            this.cookTime = 0;
        }
    }

    canSmelt() {
        if (!this.input) return false;

        const result = Furnace.getSmeltingResult(this.input.id);
        if (!result) return false;

        if (!this.output) return true;
        if (this.output.id !== result) return false;

        return true;
    }

    smeltItem() {
        const result = Furnace.getSmeltingResult(this.input.id);

        this.input.count--;
        if (this.input.count <= 0) this.input = null;

        if (!this.output) {
            this.output = { id: result, count: 1 };
        } else {
            this.output.count++;
        }
    }

    consumeFuel() {
        const burnTime = Furnace.getFuelTime(this.fuel.id);
        if (!burnTime) return;

        this.maxBurnTime = burnTime;
        this.burnTime = burnTime;

        this.fuel.count--;
        if (this.fuel.count <= 0) this.fuel = null;
    }

    static getFuelTime(id) {
        const fuels = {
            "coal": 10,
            "coal_block": 80,
            "wood_log": 5,
            "oak_planks": 5,
            "stick": 2
        };
        return fuels[id] || 0;
    }

    static getSmeltingResult(id) {
        const recipes = {
            "cobblestone": "stone",
            "sand": "sandstone",
            "coal_ore_block": "coal",
            "wood_log": "charcoal"
        };
        return recipes[id] || null;
    }
}

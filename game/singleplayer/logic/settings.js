import { presets } from "./presets.js";
import { randomSeed } from "../world/seeds/random.js";
import { parseSeed } from "../world/seeds/parser.js";

export function buildSettings() {
  const name =
    document.getElementById("worldName").value.trim() || "New World";

  const gamemode = window.selectedGamemode || "creative";
  const terrain = window.selectedTerrain || "normal";

  const seed =
    window.customSeedInput
      ? parseSeed(window.customSeedInput)
      : randomSeed();

  return {
    name,
    seed,
    terrain,
    ...presets[gamemode]
  };
}

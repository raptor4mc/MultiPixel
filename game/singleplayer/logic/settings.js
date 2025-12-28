import defaults from "../data/defaults.json" assert { type: "json" };
import { parseSeed } from "../world/seeds/parser.js";

export function buildSettings(state) {
  return {
    ...defaults,
    name: state.worldName || "New World",
    gamemode: state.gamemode,
    terrain: state.terrain,
    seed: parseSeed(state.seedText),
    createdAt: Date.now()
  };
}

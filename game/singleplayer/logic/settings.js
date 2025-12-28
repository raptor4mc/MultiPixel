import { parseSeed } from "../world/seeds/parser.js";

let defaults = {
  version: 1,
  difficulty: "normal"
};

// Load defaults async
fetch("../data/defaults.json")
  .then(res => res.json())
  .then(data => defaults = data)
  .catch(() => console.warn("Using fallback defaults"));

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

import defaults from "../data/defaults.json" assert { type: "json" };

export function buildSettings(state) {
  return {
    ...defaults,
    name: state.worldName || "New World",
    seed: state.seed,
    gamemode: state.gamemode,
    terrain: state.terrain,
    createdAt: Date.now()
  };
}

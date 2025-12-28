import "./events/onGamemodeSelect.js";
import "./events/onTerrainSelect.js";
import "./events/onSeedInput.js";
import "./events/onCreateWorld.js";
import "./events/onLoadWorld.js";

window.appState = {
  worldName: "",
  seedText: "",
  gamemode: "survival",
  terrain: "normal"
};

import { buildSettings } from "./logic/settings.js";
import { validateSettings } from "./logic/validation.js";
import { routeToEngine } from "./logic/router.js";

import "./events/onGamemodeSelect.js";
import "./events/onTerrainSelect.js";
import "./events/onSeedInput.js";
import "./events/onCreateWorld.js";
import "./events/onLoadWorld.js";

window.appState = {
  worldName: "",
  seed: null,
  gamemode: "survival",
  terrain: "normal"
};

document.getElementById("createWorld").onclick = () => {
  const settings = buildSettings(window.appState);
  validateSettings(settings);
  routeToEngine(settings);
};

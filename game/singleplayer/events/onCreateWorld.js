import { buildSettings } from "../logic/settings.js";
import { validateSettings } from "../logic/validation.js";
import { routeToEngine } from "../logic/router.js";

document.getElementById("createWorld").onclick = () => {
  const settings = buildSettings(window.appState);
  validateSettings(settings);
  routeToEngine(settings);
};

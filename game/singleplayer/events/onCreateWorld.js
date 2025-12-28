import { buildSettings } from "../logic/settings.js";
import { validateSettings } from "../logic/validation.js";
import { routeToGame } from "../logic/router.js";

document.getElementById("createWorld").addEventListener("click", () => {
  const settings = buildSettings();

  if (!validateSettings(settings)) {
    alert("Invalid world settings");
    return;
  }

  routeToGame(settings);
});

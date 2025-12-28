export function validateSettings(settings) {
  if (!settings.name) throw "World needs a name";
  if (!settings.gamemode) throw "Gamemode missing";
  if (!settings.terrain) throw "Terrain missing";
}

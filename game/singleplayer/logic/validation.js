export function validateSettings(settings) {
  if (!settings.name) return false;
  if (!settings.seed && settings.seed !== 0) return false;
  if (!settings.gamemode) return false;
  if (!settings.terrain) return false;
  return true;
}

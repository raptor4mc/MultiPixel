export function validateSettings(s) {
  if (!s.name) throw "Missing world name";
  if (!s.gamemode) throw "Missing gamemode";
  if (!s.terrain) throw "Missing terrain";
}

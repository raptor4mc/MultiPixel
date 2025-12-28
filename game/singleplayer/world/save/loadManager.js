export function loadWorlds() {
  return JSON.parse(localStorage.getItem("worlds") || "[]");
}

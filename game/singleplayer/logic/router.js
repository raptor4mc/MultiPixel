export function routeToEngine(settings) {
  sessionStorage.setItem("worldSettings", JSON.stringify(settings));
  window.location.href = "../engine/index.html";
}

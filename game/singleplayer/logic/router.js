export function routeToGame(settings) {
  sessionStorage.setItem(
    "pendingWorld",
    JSON.stringify(settings)
  );

  // This is where your big voxel engine HTML goes
  window.location.href = "../engine/engine.html";
}

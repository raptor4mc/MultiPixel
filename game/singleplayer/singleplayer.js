import { Engine } from "./core/engine.js";
import { World } from "./core/world.js";

const playBtn = document.getElementById("play");

playBtn.onclick = () => {
  const config = {
    name: worldName.value || "World",
    seed: seed.value || Math.random().toString(),
    gamemode: gamemode.value,
    terrain: terrain.value
  };

  document.getElementById("menu").style.display = "none";
  const canvas = document.getElementById("game");
  canvas.style.display = "block";

  const world = new World(config);
  const engine = new Engine(canvas, world);
  engine.start();
};

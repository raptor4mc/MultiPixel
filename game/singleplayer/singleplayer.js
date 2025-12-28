import { Engine } from "./core/engine.js";
import { World } from "./core/world.js";

const playBtn = document.getElementById("play");
const menu = document.getElementById("menu");
const canvas = document.getElementById("game");

let started = false;

playBtn.addEventListener("click", () => {
  if (started) return;
  started = true;

  const config = {
    name: document.getElementById("worldName").value || "World",
    seed: document.getElementById("seed").value || Math.random().toString(),
    gamemode: document.getElementById("gamemode").value,
    terrain: document.getElementById("terrain").value
  };

  console.log("Creating world:", config);

  menu.remove();
  canvas.style.display = "block";

  const world = new World(config);
  const engine = new Engine(canvas, world);
  engine.start();
});

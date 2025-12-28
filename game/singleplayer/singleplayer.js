import { Engine } from "./core/engine.js";
import { World } from "./core/world.js";

// 🔹 Get elements properly
const playBtn = document.getElementById("play");
const worldNameInput = document.getElementById("worldName");
const seedInput = document.getElementById("seed");
const gamemodeSelect = document.getElementById("gamemode");
const terrainSelect = document.getElementById("terrain");
const menu = document.getElementById("menu");
const canvas = document.getElementById("game");

playBtn.addEventListener("click", () => {
  const config = {
    name: worldNameInput.value || "World",
    seed: seedInput.value || Math.random().toString(),
    gamemode: gamemodeSelect.value,
    terrain: terrainSelect.value
  };

  console.log("Creating world:", config); // ✅ debug

  menu.style.display = "none";
  canvas.style.display = "block";

  const world = new World(config);
  const engine = new Engine(canvas, world);
  engine.start();
});

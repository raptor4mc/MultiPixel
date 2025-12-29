import { SETTINGS, PLAYER } from "./logic/settings.js";
import { BLOCKS, BLOCK_IDS } from "./logic/presets.js";
import { generateChunkData } from "./world/generator/normal.js";
import { startGame } from "./logic/router.js";

let scene, camera, renderer, simplex;

function init() {
  scene = new THREE.Scene();
  simplex = new SimplexNoise();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

startGame(init);

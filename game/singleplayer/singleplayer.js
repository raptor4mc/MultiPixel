// game/singleplayer/singleplayer.js

import {
    worldGroup,
    chunks,
    generateWorld
} from "./world/world.js";

import {
    player,
    setupPointerLockControls,
    setupKeyboardControls,
    setupBlockInteraction,
    updatePlayerMovement
} from "./player/player.js";

// --- CORE VOXEL CONFIGURATION ---
export const CHUNK_SIZE = 16;
export const CHUNK_HEIGHT = 64;
export const WORLD_RADIUS = 3;
export const BLOCK_SIZE = 1;
export const SEA_LEVEL = 20;

// Player constants
export const PLAYER_HEIGHT = 2.0 * BLOCK_SIZE;
export const EYE_HEIGHT = 1.8 * BLOCK_SIZE;
export const PLAYER_RADIUS = 0.3;

// --- Block definitions ---
export const blockMaterials = {
    1: { color: 0x4CAF50, name: "Grass", roughness: 0.9, metalness: 0.1, id: 1 },
    2: { color: 0x654321, name: "Dirt", roughness: 0.9, metalness: 0.0, id: 2 },
    3: { color: 0x666666, name: "Stone", roughness: 0.8, metalness: 0.0, id: 3 },
    4: { color: 0x1976D2, name: "Water", roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.7, id: 4 }
};

export const BLOCK_TYPE_IDS = Object.values(blockMaterials).map(b => b.id);

// --- Three.js globals ---
export let scene, camera, renderer, simplex, raycaster;
export let yawObject, pitchObject;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 10, 100);

    simplex = new SimplexNoise();
    raycaster = new THREE.Raycaster();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    yawObject = new THREE.Object3D();
    pitchObject = new THREE.Object3D();
    pitchObject.position.y = EYE_HEIGHT;

    pitchObject.add(camera);
    yawObject.add(pitchObject);
    yawObject.position.set(0, SEA_LEVEL * BLOCK_SIZE + 0.001, 0);
    scene.add(yawObject);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x404040, 1));
    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(20, 50, 20);
    scene.add(sun);

    scene.add(worldGroup);

    setupPointerLockControls(renderer);
    setupKeyboardControls();
    setupBlockInteraction(raycaster, camera);

    generateWorld();

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("contextmenu", e => e.preventDefault());

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    updatePlayerMovement();
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.onload = init;


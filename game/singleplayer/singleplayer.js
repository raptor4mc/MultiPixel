§§// --- CORE VOXEL CONFIGURATION ---
export const CHUNK_SIZE = 16;
export const CHUNK_HEIGHT = 64;
export const WORLD_RADIUS = 3;
export const BLOCK_SIZE = 1;
export const SEA_LEVEL = 20;

// Player height and eye level constants
export const PLAYER_HEIGHT = 2.0 * BLOCK_SIZE;
export const EYE_HEIGHT = 1.8 * BLOCK_SIZE;
export const PLAYER_RADIUS = 0.3;

// Block types and colors
export const blockMaterials = {
    1: { color: 0x4CAF50, name: 'Grass', roughness: 0.9, metalness: 0.1, id: 1 },
    2: { color: 0x654321, name: 'Dirt', roughness: 0.9, metalness: 0.0, id: 2 },
    3: { color: 0x666666, name: 'Stone', roughness: 0.8, metalness: 0.0, id: 3 },
    4: { color: 0x1976D2, name: 'Water', roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.7, id: 4 }
};

export const BLOCK_TYPE_IDS = Object.values(blockMaterials).map(m => m.id);

// Initialize Three.js components
export let scene, camera, renderer, simplex, raycaster;
export const chunks = new Map();
export const worldGroup = new THREE.Group();

export let yawObject;
export let pitchObject;

import {
    setupPointerLockControls,
    setupKeyboardControls,
    setupBlockInteraction,
    updatePlayerMovement,
    updateBlockSelectorUI
} from "./player.js";

import { generateWorld } from "./world.js";

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 10, 100);

    if (typeof SimplexNoise !== 'undefined') {
        simplex = new SimplexNoise();
    } else {
        console.error("SimplexNoise library failed to load.");
        return;
    }

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
    scene.add(yawObject);

    yawObject.position.set(0, SEA_LEVEL * BLOCK_SIZE + 0.001, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(20, 50, 20);
    scene.add(directionalLight);

    scene.add(worldGroup);

    setupPointerLockControls();
    setupKeyboardControls();
    setupBlockInteraction();

    generateWorld();
    updateBlockSelectorUI();

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('contextmenu', e => e.preventDefault());

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
    

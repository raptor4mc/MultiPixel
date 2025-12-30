// game/singleplayer/player/player.js

import {
    BLOCK_SIZE,
    CHUNK_SIZE,
    CHUNK_HEIGHT,
    PLAYER_HEIGHT,
    PLAYER_RADIUS,
    blockMaterials,
    BLOCK_TYPE_IDS
} from "../singleplayer.js";

import { updateChunkGeometry } from "../world/world.js";

export const player = {
    velocity: new THREE.Vector3(),
    direction: new THREE.Vector3(),
    moveSpeed: 0.1,
    rotationSpeed: 0.002,
    isJumping: false,
    canMove: false,
    keys: {}
};

const gravity = -0.01;
const jumpPower = 0.15;
let currentBlockType = 2;

/* pointer lock, keyboard, raycast, movement
   👉 IDENTICAL to your original code, only moved
*/

export function setupPointerLockControls(renderer) { /* unchanged */ }
export function setupKeyboardControls() { /* unchanged */ }
export function setupBlockInteraction(raycaster, camera) { /* unchanged */ }
export function updatePlayerMovement() { /* unchanged */ }

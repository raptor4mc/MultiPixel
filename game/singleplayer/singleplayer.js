// --- CORE VOXEL CONFIGURATION ---
const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 64;
const WORLD_RADIUS = 3;
const BLOCK_SIZE = 1;
const SEA_LEVEL = 20;

const PLAYER_HEIGHT = 2.0 * BLOCK_SIZE;
const EYE_HEIGHT = 1.8 * BLOCK_SIZE;
const PLAYER_RADIUS = 0.3;

// Block materials
const blockMaterials = {
    1: { color: 0x4CAF50, name: 'Grass', id: 1 },
    2: { color: 0x654321, name: 'Dirt', id: 2 },
    3: { color: 0x666666, name: 'Stone', id: 3 },
    4: { color: 0x1976D2, name: 'Water', transparent: true, opacity: 0.7, id: 4 }
};

const BLOCK_TYPE_IDS = Object.values(blockMaterials).map(b => b.id);

// Three.js globals
let scene, camera, renderer, simplex, raycaster;
const chunks = new Map();
const worldGroup = new THREE.Group();

let yawObject, pitchObject;

// Player state
const player = {
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

// ================= INIT =================
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 10, 100);

    simplex = new SimplexNoise();
    raycaster = new THREE.Raycaster();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    yawObject = new THREE.Object3D();
    pitchObject = new THREE.Object3D();
    pitchObject.position.y = EYE_HEIGHT;
    pitchObject.add(camera);
    yawObject.add(pitchObject);
    yawObject.position.set(0, SEA_LEVEL + 0.01, 0);
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

    setupPointerLockControls();
    setupKeyboardControls();
    setupBlockInteraction();

    generateWorld();
    updateBlockSelectorUI();

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("contextmenu", e => e.preventDefault());

    animate();
}

// ================= UI =================
function updateBlockSelectorUI() {
    document.getElementById("selected-block-name").textContent =
        blockMaterials[currentBlockType].name;
}

// ================= GAME LOOP =================
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

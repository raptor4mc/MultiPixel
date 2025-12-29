// --- CORE VOXEL CONFIGURATION ---
const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 64;
const WORLD_RADIUS = 3; 
const BLOCK_SIZE = 1;
const SEA_LEVEL = 20;

// Player height and eye level constants
const PLAYER_HEIGHT = 2.0 * BLOCK_SIZE; 
const EYE_HEIGHT = 1.8 * BLOCK_SIZE;    
const PLAYER_RADIUS = 0.3;

// Block types and colors 
const blockMaterials = {
    1: { color: 0x4CAF50, name: 'Grass', roughness: 0.9, metalness: 0.1, id: 1 }, 
    2: { color: 0x654321, name: 'Dirt', roughness: 0.9, metalness: 0.0, id: 2 }, 
    3: { color: 0x666666, name: 'Stone', roughness: 0.8, metalness: 0.0, id: 3 }, 
    4: { color: 0x1976D2, name: 'Water', roughness: 0.5, metalness: 0.1, transparent: true, opacity: 0.7, id: 4 }
};
const BLOCK_TYPE_IDS = Object.values(blockMaterials).map(m => m.id);

// Initialize Three.js components
let scene, camera, renderer, simplex, raycaster;
const chunks = new Map();
const worldGroup = new THREE.Group();

let yawObject;   
let pitchObject; 

// Player/Control State
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

// (CONTINUES EXACTLY AS ORIGINAL…)
/**
 * Initializes the 3D environment and procedural noise generator.
 */
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 10, 100);

    if (typeof SimplexNoise !== 'undefined') {
        simplex = new SimplexNoise();
    } else {
        console.error("SimplexNoise failed to load.");
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

    window.addEventListener("resize", onWindowResize);
    document.addEventListener("contextmenu", e => e.preventDefault());

    animate();
}

function updateBlockSelectorUI() {
    const blockName = blockMaterials[currentBlockType].name;
    document.getElementById("selected-block-name").textContent = blockName;
}

function setupBlockInteraction() {
    window.addEventListener("pointerdown", onPointerDown, false);
}

function onPointerDown(event) {
    if (!player.canMove) return;

    raycaster.setFromCamera({ x: 0, y: 0 }, camera);

    const opaqueMeshes = [];
    worldGroup.children.forEach(chunkGroup => {
        chunkGroup.children.forEach(mesh => {
            if (mesh.material && !mesh.material.transparent) {
                opaqueMeshes.push(mesh);
            }
        });
    });

    const intersects = raycaster.intersectObjects(opaqueMeshes, false);
    if (!intersects.length) return;

    const intersect = intersects[0];
    const blockMesh = intersect.object;
    const chunkGroup = blockMesh.parent;

    const point = intersect.point;
    const normal = intersect.face.normal;

    let targetPos;
    if (event.button === 0) {
        targetPos = point.clone().sub(normal.clone().multiplyScalar(0.01));
    } else if (event.button === 2) {
        targetPos = point.clone().add(normal.clone().multiplyScalar(0.01));
    } else return;

    const wx = Math.floor(targetPos.x / BLOCK_SIZE + 0.5);
    const wy = Math.floor(targetPos.y / BLOCK_SIZE + 0.5);
    const wz = Math.floor(targetPos.z / BLOCK_SIZE + 0.5);

    const lx = wx - chunkGroup.userData.cx * CHUNK_SIZE;
    const lz = wz - chunkGroup.userData.cz * CHUNK_SIZE;
    const ly = wy;

    const index =
        lx +
        ly * CHUNK_SIZE +
        lz * CHUNK_SIZE * CHUNK_HEIGHT;

    const chunkData = chunkGroup.userData.chunkData;

    if (event.button === 0) {
        if (chunkData[index] !== 0 && chunkData[index] !== 4) {
            chunkData[index] = 0;
            updateChunkGeometry(chunkGroup, chunkData);
        }
    } else if (event.button === 2) {
        if (ly >= 0 && ly < CHUNK_HEIGHT && chunkData[index] === 0) {
            chunkData[index] = currentBlockType;
            updateChunkGeometry(chunkGroup, chunkData);
        }
    }
}

function setupPointerLockControls() {
    const instructions = document.getElementById("instructions");
    const crosshair = document.getElementById("crosshair");
    const element = document.body;

    document.addEventListener("pointerlockchange", () => {
        if (document.pointerLockElement === element) {
            player.canMove = true;
            instructions.style.opacity = 0;
            crosshair.style.opacity = 1;
            renderer.domElement.style.cursor = "none";
        } else {
            player.canMove = false;
            instructions.style.opacity = 1;
            crosshair.style.opacity = 0;
            renderer.domElement.style.cursor = "pointer";
        }
    });

    document.addEventListener("mousemove", event => {
        if (!player.canMove) return;

        yawObject.rotation.y -= event.movementX * player.rotationSpeed;
        pitchObject.rotation.x -= event.movementY * player.rotationSpeed;
        pitchObject.rotation.x = Math.max(
            -Math.PI / 2,
            Math.min(Math.PI / 2, pitchObject.rotation.x)
        );
    });

    instructions.addEventListener("click", () => {
        element.requestPointerLock();
    });
}

function setupKeyboardControls() {
    document.addEventListener("keydown", e => {
        const key = e.key.toLowerCase();
        player.keys[key] = true;

        const index = BLOCK_TYPE_IDS.indexOf(currentBlockType);
        if (key === "q") {
            currentBlockType =
                BLOCK_TYPE_IDS[(index - 1 + BLOCK_TYPE_IDS.length) % BLOCK_TYPE_IDS.length];
            updateBlockSelectorUI();
        }
        if (key === "e") {
            currentBlockType =
                BLOCK_TYPE_IDS[(index + 1) % BLOCK_TYPE_IDS.length];
            updateBlockSelectorUI();
        }
    });

    document.addEventListener("keyup", e => {
        player.keys[e.key.toLowerCase()] = false;
    });
}

function getGroundHeight(wx, wz) {
    const noiseScale = 0.05;
    const roughness = 0.02;

    const noise = simplex.noise2D(wx * noiseScale, wz * noiseScale);
    const detail = simplex.noise2D(wx * roughness, wz * roughness);

    let height = Math.floor((noise + 1) * 0.5 * (CHUNK_HEIGHT * 0.4));
    height += Math.floor((detail + 1) * 0.5 * 5);

    return Math.max(height, SEA_LEVEL) * BLOCK_SIZE;
}

function updatePlayerMovement() {
    if (!player.canMove) return;

    player.direction.set(0, 0, 0);

    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(yawObject.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(yawObject.quaternion);
    forward.y = right.y = 0;
    forward.normalize();
    right.normalize();

    if (player.keys["w"]) player.direction.add(forward);
    if (player.keys["s"]) player.direction.sub(forward);
    if (player.keys["a"]) player.direction.sub(right);
    if (player.keys["d"]) player.direction.add(right);

    player.direction.normalize();

    player.velocity.x = player.direction.x * player.moveSpeed;
    player.velocity.z = player.direction.z * player.moveSpeed;
    player.velocity.y += gravity;

    if (player.keys[" "] && !player.isJumping) {
        player.velocity.y = jumpPower;
        player.isJumping = true;
    }

    yawObject.position.add(player.velocity);

    const groundY = getGroundHeight(
        yawObject.position.x,
        yawObject.position.z
    );

    if (yawObject.position.y <= groundY) {
        yawObject.position.y = groundY;
        player.velocity.y = 0;
        player.isJumping = false;
    }
}

function generateWorld() {
    let count = 0;
    for (let cx = -WORLD_RADIUS; cx <= WORLD_RADIUS; cx++) {
        for (let cz = -WORLD_RADIUS; cz <= WORLD_RADIUS; cz++) {
            const chunk = createChunk(cx, cz);
            worldGroup.add(chunk);
            chunks.set(`${cx},${cz}`, chunk);
            count++;
        }
    }
    document.getElementById("chunks-count").textContent = count;
}

function generateChunkData(cx, cz) {
    const data = new Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE).fill(0);
    const noiseScale = 0.05;
    const roughness = 0.02;

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;

            const noise = simplex.noise2D(wx * noiseScale, wz * noiseScale);
            const detail = simplex.noise2D(wx * roughness, wz * roughness);

            let height = Math.floor((noise + 1) * 0.5 * (CHUNK_HEIGHT * 0.4));
            height += Math.floor((detail + 1) * 0.5 * 5);

            for (let y = 0; y < CHUNK_HEIGHT; y++) {
                const i = x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                if (y < height) data[i] = y === height - 1 ? 1 : 2;
                else if (y <= SEA_LEVEL) data[i] = 4;
            }
        }
    }
    return data;
}

function createChunk(cx, cz) {
    const chunkData = generateChunkData(cx, cz);
    const group = new THREE.Group();
    group.userData = { cx, cz, chunkData };
    updateChunkGeometry(group, chunkData);
    return group;
}

function updateChunkGeometry(group, data) {
    while (group.children.length) {
        const m = group.children.pop();
        m.geometry.dispose();
        m.material.dispose();
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < CHUNK_HEIGHT; y++) {
            for (let z = 0; z < CHUNK_SIZE; z++) {
                const i = x + y * CHUNK_SIZE + z * CHUNK_SIZE * CHUNK_HEIGHT;
                if (!data[i]) continue;

                const mesh = new THREE.Mesh(geometry, material.clone());
                mesh.position.set(
                    x + group.userData.cx * CHUNK_SIZE,
                    y,
                    z + group.userData.cz * CHUNK_SIZE
                );
                group.add(mesh);
            }
        }
    }
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

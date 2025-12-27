import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { PointerLockControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/PointerLockControls.js';
import { NormalGenerator } from './world/generator/normal.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new PointerLockControls(camera, document.body);
const generator = new NormalGenerator(Math.random());

// Constants
const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 32;
const chunks = new Map();

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
sunLight.position.set(10, 20, 10);
scene.add(sunLight);

// Chunk Rendering Logic
function generateChunk(cx, cz) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x55aa55 });
    const chunkGroup = new THREE.Group();

    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const height = generator.getHeight(cx * CHUNK_SIZE + x, cz * CHUNK_SIZE + z);
            for (let y = 0; y < height; y++) {
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(x, y, z);
                chunkGroup.add(mesh);
            }
        }
    }
    chunkGroup.position.set(cx * CHUNK_SIZE, 0, cz * CHUNK_SIZE);
    scene.add(chunkGroup);
    chunks.set(`${cx},${cz}`, chunkGroup);
}

// Interaction: Block Breaking/Placing
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(0, 0); // Center of screen

window.addEventListener('mousedown', (e) => {
    if (!controls.isLocked) {
        controls.lock();
        return;
    }

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        const intersect = intersects[0];
        if (e.button === 0) { // Left Click: Break
            intersect.object.parent.remove(intersect.object);
        } else if (e.button === 2) { // Right Click: Place
            const pos = intersect.point.add(intersect.face.normal.multiplyScalar(0.5));
            const voxel = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({color: 0x8B4513}));
            voxel.position.set(Math.round(pos.x), Math.round(pos.y), Math.round(pos.z));
            scene.add(voxel);
        }
    }
});

// Initial Load
generateChunk(0, 0);
camera.position.set(8, 20, 8);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

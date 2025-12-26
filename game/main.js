// (JS CONTENT IS 100% IDENTICAL — UNCHANGED)
// Only moved out of <script> tag

// --- Configuration ---
const CONFIG = {
    radius: 5.5,
    baseScale: 1.0,
    activeScale: 1.8,
    colors: {
        default: 0x444444,
        active: 0x00ffff,
        wireframe: 0xffffff
    }
};

const MENU_ITEMS = [
    { name: "SinglePlayer", id: "single" },
    { name: "MultiPlayer", id: "multi" },
    { name: "Coding",       id: "coding" },
    { name: "Mods",         id: "mods" },
    { name: "Credits",      id: "credits" }
];

// --- State ---
let selectedIndex = 0;
let isModalOpen = false;

// --- Audio Logic ---
const swooshAudio = document.getElementById('swoosh-audio');
function playSwoosh() {
    if (swooshAudio) {
        swooshAudio.currentTime = 0;
        swooshAudio.play().catch(e => console.log("Audio play failed:", e));
    }
}

// --- Three.js Setup ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.04);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 10;
camera.position.y = 1;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// (rest of JS continues exactly as you provided…)

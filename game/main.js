// === CONFIG ===
const CONFIG = {
    radius: 5.5,
    baseScale: 1,
    activeScale: 1.8,
    colors: {
        default: 0x444444,
        active: 0x00ffff
    }
};

const MENU_ITEMS = [
    { name: "SinglePlayer" },
    { name: "MultiPlayer" },
    { name: "Coding" },
    { name: "Mods" },
    { name: "Credits" }
];

let selectedIndex = 0;
let isModalOpen = false;

// === AUDIO ===
const swoosh = document.getElementById("swoosh-audio");
const playSwoosh = () => {
    swoosh.currentTime = 0;
    swoosh.play().catch(() => {});
};

// === THREE ===
const container = document.getElementById("canvas-container");
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.04);

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 1, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(innerWidth, innerHeight);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x404040, 2));

const group = new THREE.Group();
scene.add(group);

const uiLayer = document.getElementById("ui-layer");
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const angleStep = (Math.PI * 2) / MENU_ITEMS.length;

const objects = [];
const labels = [];

const createLabel = text => {
    const el = document.createElement("div");
    el.className = "label";
    el.textContent = text;
    uiLayer.appendChild(el);
    return el;
};

MENU_ITEMS.forEach((item, i) => {
    const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ color: CONFIG.colors.default })
    );

    const angle = i * angleStep;
    mesh.position.set(
        CONFIG.radius * Math.sin(angle),
        0,
        CONFIG.radius * Math.cos(angle)
    );

    mesh.rotation.y = Math.PI;
    group.add(mesh);

    objects.push(mesh);
    labels.push(createLabel(item.name));
});

// === UI ===
const modal = document.getElementById("modal");
document.getElementById("close-modal").onclick = () => {
    modal.classList.remove("show");
    isModalOpen = false;
};

// === INPUT ===
window.addEventListener("keydown", e => {
    if (isModalOpen) return;

    if (e.key === "ArrowRight") selectedIndex = (selectedIndex + 1) % objects.length;
    if (e.key === "ArrowLeft") selectedIndex = (selectedIndex - 1 + objects.length) % objects.length;
    if (e.key === "Enter") {
        modal.classList.add("show");
        isModalOpen = true;
    }
    playSwoosh();
});

// === LOOP ===
function animate() {
    requestAnimationFrame(animate);

    group.rotation.y += (-selectedIndex * angleStep - group.rotation.y) * 0.1;

    objects.forEach((obj, i) => {
        const active = i === selectedIndex;
        const scale = active ? CONFIG.activeScale : CONFIG.baseScale;
        obj.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
        obj.material.color.lerp(
            new THREE.Color(active ? CONFIG.colors.active : CONFIG.colors.default),
            0.1
        );

        const pos = obj.getWorldPosition(new THREE.Vector3()).project(camera);
        labels[i].classList.toggle("active", active);
        labels[i].style.transform =
            `translate(-50%, -50%) translate(${(pos.x * .5 + .5) * innerWidth}px, ${(pos.y * -.5 + .5) * innerHeight}px)`;
    });

    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});

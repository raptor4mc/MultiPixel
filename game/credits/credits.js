// --- Firebase Initialization Boilerplate (Required) ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let app, db, auth;

async function initializeFirebase() {
    if (Object.keys(firebaseConfig).length > 0) {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
        setLogLevel('Debug');

        try {
            if (initialAuthToken) {
                await signInWithCustomToken(auth, initialAuthToken);
            } else {
                await signInAnonymously(auth);
            }
        } catch (error) {
            console.error("Firebase authentication failed:", error);
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User ID:", user.uid);
            }
        });
    }
}

// --- Three.js Background ---
let scene, camera, renderer, starGeometry, stars, starMaterial;

function initThree() {
    const container = document.getElementById('three-canvas');

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0007);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);

    const starCount = 5000;
    const starVertices = [];
    for (let i = 0; i < starCount; i++) {
        starVertices.push(
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000
        );
    }

    starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.8,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.00005;
    stars.rotation.y += 0.0001;
    renderer.render(scene, camera);
}

// --- Credits Logic ---
function startCreditsSequence() {
    const introBlock = document.getElementById('intro-block');
    const creditsContent = document.getElementById('credits-content');

    setTimeout(() => {
        introBlock.classList.remove('intro-block-active');
        introBlock.classList.add('intro-block-scrolling');

        const names = introBlock.querySelectorAll('span');
        names.forEach(span => {
            span.classList.remove('text-3xl', 'md:text-5xl');
            span.classList.add('text-lg', 'md:text-xl', 'font-normal');
        });

        document.getElementById('credits-overlay').style.paddingTop = '0';
        creditsContent.classList.add('start-scroll');
    }, 3000);
}

// --- Main ---
window.onload = function () {
    initializeFirebase();
    initThree();
    animate();
    startCreditsSequence();
};

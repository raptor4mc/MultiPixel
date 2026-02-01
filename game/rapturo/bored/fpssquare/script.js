/**
 * ENTITY MANAGER
 * Object-based entities to stress JS GC & memory
 */

const canvas = document.getElementById('simulation');
const ctx = canvas.getContext('2d', { alpha: false });

const countDisplay = document.getElementById('count-display');
const fpsDisplay = document.getElementById('fps-display');

let width, height;
let entities = [];

// Performance
let lastTime = performance.now();
let frameCount = 0;
let lastFpsTime = lastTime;

const PALETTE = [
    '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51',
    '#457b9d', '#1d3557', '#333333', '#666666', '#a8dadc'
];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

class Entity {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 2;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    }
}

function spawn(amount) {
    if (amount >= 100000) spawnChunked(amount);
    else {
        for (let i = 0; i < amount; i++) entities.push(new Entity());
        updateCount();
    }
}

function spawnChunked(amount) {
    const chunkSize = 10000;
    let spawned = 0;
    document.body.style.cursor = 'wait';

    function doChunk() {
        const limit = Math.min(chunkSize, amount - spawned);
        for (let i = 0; i < limit; i++) entities.push(new Entity());
        spawned += limit;
        updateCount();
        spawned < amount ? requestAnimationFrame(doChunk) : document.body.style.cursor = 'default';
    }
    doChunk();
}

function updateCount() {
    countDisplay.innerText = new Intl.NumberFormat().format(entities.length);
}

function loop() {
    const now = performance.now();
    frameCount++;

    if (now - lastFpsTime >= 1000) {
        fpsDisplay.innerText = frameCount;
        fpsDisplay.style.color =
            frameCount < 15 ? '#ef4444' :
            frameCount < 30 ? '#f59e0b' :
            '#10b981';
        frameCount = 0;
        lastFpsTime = now;
    }

    ctx.fillStyle = '#f4f4f9';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < entities.length; i++) {
        const e = entities[i];
        e.x += e.vx;
        e.y += e.vy;

        if (e.x < 0 || e.x > width) e.vx *= -1;
        if (e.y < 0 || e.y > height) e.vy *= -1;

        ctx.fillStyle = e.color;
        ctx.fillRect(e.x, e.y, e.size, e.size);
    }

    lastTime = now;
    requestAnimationFrame(loop);
}

document.querySelectorAll('.spawn-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        spawn(parseInt(e.target.dataset.amount));
    });
});

document.getElementById('btn-clear').addEventListener('click', () => {
    entities = [];
    updateCount();
});

loop();

import { AudioManager } from "./audio.js";

const canvas = document.getElementById('bootCanvas');
const ctx = canvas.getContext('2d');

let lastFrameTime = Date.now();
let width, height;
let particles = [];
// Cached polygon canvases
let cachePentagon = null;
let cacheHexagon = null;
let cacheSquare = null;

// Configuration
const FONT_SIZE = 80;
const FONT_FAMILY = "'Inter', sans-serif";
const COLOR_MAIN = '#00ffcc';        // Cyber cyan
const COLOR_SECONDARY = '#ff00ff';   // Cyber magenta
const GLOW_BLUR = 15;

// Sentinel Core colors
const CORE_GLOW_DARK = '#4a0072';
const CORE_GLOW_LIGHT = '#d187ff';
const CORE_CENTER_COLOR = '#ffffff';

const COLOR_LOADING = '#00ff77';
const COLOR_LOADING_LIGHT = '#99ffc7';
const COLOR_WIRE_BRIGHT = 'rgba(0, 255, 119, 1.0)';
const COLOR_WIRE_BASE = 'rgba(0, 255, 119, 0.1)';

const EYE_SIZE = 25;
const PUPIL_TRAVEL = EYE_SIZE * 0.5;

// Rotation speeds
const ROTATION_INNER_THORNS = -0.5;
const ROTATION_OUTER_THORNS = 0.2;
const ROTATION_HEXAGON = 0.05;
const ROTATION_PENTAGON = -0.02;
const ROTATION_SQUARE = 0.2;

// Animation phases
const PHASES = {
    START: 0,
    COLLAPSE: 1,
    MOVE_AND_MORPH: 2,
    EXPAND: 3,
    WAIT_STATIC: 4,
    FADE_OUT: 5,
    FADE_COMPLETE: 6,
    CORE_UP: 7,
    LOOP_LOADING: 8
};

let currentPhase = PHASES.START;
let startTime = 0;

let loadingTimer = 0;

let coreScale = 0;
let letterLightIndex = 0;
let letterLightTimer = 0;

let letters = [];

// Easing
const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const easeOutBack = (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

function init() {
    resize();
    window.addEventListener('resize', resize);
    resetSequence();
    requestAnimationFrame(loop);
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function createLetter(char, id, role) {
    ctx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
    const metrics = ctx.measureText(char);
    return {
        char,
        id,
        role,
        x: 0,
        y: 0,
        targetX: 0,
        startX: 0,
        alpha: 1,
        targetAlpha: 1,
        startAlpha: 1,
        scale: 1,
        color: COLOR_MAIN,
        width: metrics.width,
        glowBlurFactor: 1
    };
}

function resetSequence() {
    letters = [];
    startTime = Date.now();
    currentPhase = PHASES.START;
    letterLightIndex = 0;
    letterLightTimer = 0;

    const initialStr = "ReliMintor";
    const roles = [
        'main-R', 'sub-R', 'sub-R', 'sub-R',
        'main-M', 'sub-M', 'sub-M', 'sub-M', 'sub-M', 'sub-M'
    ];

    ctx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;

    const spacing = 5;
    const letterWidths = initialStr.split('').map(c => ctx.measureText(c).width);
    const totalWidth = letterWidths.reduce((a, b) => a + b + spacing, 0);

    let currentX = (width - totalWidth) / 2;

    for (let i = 0; i < initialStr.length; i++) {
        let l = createLetter(initialStr[i], i, roles[i]);
        l.x = currentX;
        l.y = height / 2;
        l.startX = currentX;
        letters.push(l);
        currentX += l.width + spacing;
    }
}

function update() {
    const now = Date.now();
    const deltaTime = (now - lastFrameTime) / 1000;
lastFrameTime = now;
const phaseTime = (now - startTime) / 1000;

    //Helper function
    function createPolygonCache(radius, sides, offsetAngle, strokeStyle, lineWidth, shadowColor, shadowBlur) {
    const size = radius * 2 + shadowBlur * 4;
    const off = document.createElement("canvas");
    off.width = size;
    off.height = size;
    const octx = off.getContext("2d");

    octx.translate(size / 2, size / 2);
    octx.shadowColor = shadowColor;
    octx.shadowBlur = shadowBlur;
    octx.strokeStyle = strokeStyle;
    octx.lineWidth = lineWidth;

    drawPolygon(octx, radius, sides, offsetAngle);

    return off;
}

    // --- State machine ---

   if (currentPhase === PHASES.START) {
    if (phaseTime > 1.5) {
        currentPhase = PHASES.COLLAPSE;
        startTime = now;

        AudioManager.play("swooshDevour");


            const R = letters.find(l => l.role === 'main-R');
            const M = letters.find(l => l.role === 'main-M');

            letters.forEach(l => {
                l.startX = l.x;
                if (l.role === 'sub-R') {
                    l.targetX = R.x + R.width / 2;
                    l.targetAlpha = 0;
                } else if (l.role === 'sub-M') {
                    l.targetX = M.x + M.width / 2;
                    l.targetAlpha = 0;
                }
            });
        }
    }

    else if (currentPhase === PHASES.COLLAPSE) {
        let p = phaseTime;
        if (p > 1) {
            p = 1;
            currentPhase = PHASES.MOVE_AND_MORPH;
            startTime = now;

            letters = letters.filter(l => l.alpha > 0.01);

            const R = letters.find(l => l.role === 'main-R');
            const M = letters.find(l => l.role === 'main-M');

            ctx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
            const finalStr = "MultiPixel";
            const spacing = 5;

            const widths = finalStr.split('').map(c => ctx.measureText(c).width);
            const totalW = widths.reduce((a, b) => a + b + spacing, 0);

            let startX = (width - totalW) / 2;
            const targetMx = startX;

            let widthBeforeP = 0;
            for (let i = 0; i < 5; i++) widthBeforeP += widths[i] + spacing;
            const targetPx = startX + widthBeforeP;

            M.startX = M.x;
            M.targetX = targetMx;

            R.startX = R.x;
            R.targetX = targetPx;
        }

        const ease = easeInOutCubic(p);

        letters.forEach(l => {
            if (l.role.startsWith('sub')) {
                l.x = l.startX + (l.targetX - l.startX) * ease;
                l.alpha = 1 - ease;
            }
        });
    }

 else if (currentPhase === PHASES.MOVE_AND_MORPH) {
    let p = phaseTime / 1.5;
    if (p > 1) {
        p = 1;
        currentPhase = PHASES.EXPAND;
        startTime = now;
        AudioManager.play("swooshExpand");

            const M = letters.find(l => l.role === 'main-M');
            const P = letters.find(l => l.role === 'main-R');

            const str1 = "ulti";
            let cx = M.x + M.width + 5;
            for (let char of str1) {
                let l = createLetter(char, 99, 'new-M');
                l.x = M.x + M.width / 2;
                l.y = height / 2;
                l.targetX = cx;
                l.alpha = 0;
                l.targetAlpha = 1;
                letters.push(l);
                cx += l.width + 5;
            }

            const str2 = "ixel";
            cx = P.x + P.width + 5;
            for (let char of str2) {
                let l = createLetter(char, 99, 'new-P');
                l.x = P.x + P.width / 2;
                l.y = height / 2;
                l.targetX = cx;
                l.alpha = 0;
                l.targetAlpha = 1;
                letters.push(l);
                cx += l.width + 5;
            }
        }

        const ease = easeInOutCubic(p);

        const R = letters.find(l => l.role === 'main-R');
        const M = letters.find(l => l.role === 'main-M');

        R.x = R.startX + (R.targetX - R.startX) * ease;
        M.x = M.startX + (M.targetX - M.startX) * ease;

        const centerR = R.x + R.width / 2;
        const centerM = M.x + M.width / 2;

        if (centerR > centerM) {
            if (R.char === 'R') {
                R.char = 'P';
                spawnParticles(centerR, R.y, COLOR_SECONDARY, 150);
                AudioManager.play("clickMorph");
            }
            R.color = COLOR_SECONDARY;
        } else {
            R.char = 'R';
            R.color = COLOR_MAIN;
        }

        const dist = Math.abs(centerR - centerM);
        const shakeThreshold = 60;
        if (dist < shakeThreshold) {
            const shakeIntensity = 10 * (1 - dist / shakeThreshold);
            R.y = height / 2 + (Math.random() * shakeIntensity - shakeIntensity / 2);
            M.y = height / 2 + (Math.random() * shakeIntensity - shakeIntensity / 2);
            R.scale = 1 + shakeIntensity * 0.01;
            M.scale = 1 + shakeIntensity * 0.01;
        } else {
            R.y = height / 2;
            M.y = height / 2;
            R.scale = 1;
            M.scale = 1;
        }
    }

    else if (currentPhase === PHASES.EXPAND) {
        let p = phaseTime;
        if (p > 1) {
            p = 1;
            currentPhase = PHASES.WAIT_STATIC;
            startTime = now;
        }

        const ease = easeOutBack(p);

        letters.forEach(l => {
            if (l.role === 'new-M' || l.role === 'new-P') {
                l.x = l.startX + (l.targetX - l.startX) * ease;
                l.alpha = p;
            }
            if (l.role === 'main-R' || l.role === 'main-M') {
                l.scale = 1;
            }
        });
    }

    else if (currentPhase === PHASES.WAIT_STATIC) {
        if (phaseTime > 2.0) {
            AudioManager.play("impactDunDuuuu");
            currentPhase = PHASES.FADE_OUT;
            startTime = now;

            letters.forEach(l => {
                l.startAlpha = l.alpha;
                l.glowBlurFactor = 1;
            });
        }
    }

    else if (currentPhase === PHASES.FADE_OUT) {
        let p = phaseTime / 2.0;
        if (p > 1) {
            p = 1;
            currentPhase = PHASES.FADE_COMPLETE;
            startTime = now;
        }

        const ease = easeInOutCubic(p);

        letters.forEach(l => {
            l.alpha = l.startAlpha * (1 - ease);
            l.glowBlurFactor = 1 - ease;
        });

        if (currentPhase === PHASES.FADE_COMPLETE) {
            letters = [];
            particles = [];
            spawnParticles(width / 2, height / 2, CORE_GLOW_LIGHT, 150);
        }
    }

    else if (currentPhase === PHASES.FADE_COMPLETE) {
        if (phaseTime > 0.5) {
            currentPhase = PHASES.CORE_UP;
            startTime = now;
        }
    }

    else if (currentPhase === PHASES.CORE_UP) {
       if (!cachePentagon) {
    cachePentagon = createPolygonCache(150 * 1.1, 5, Math.PI / 10, CORE_GLOW_DARK, 3, CORE_GLOW_DARK, 20);
    cacheHexagon = createPolygonCache(150 * 0.9, 6, Math.PI / 6, CORE_GLOW_LIGHT, 4, CORE_GLOW_LIGHT, 10);
    cacheSquare  = createPolygonCache(150 * 0.7, 4, Math.PI / 4, CORE_GLOW_LIGHT, 6, CORE_GLOW_LIGHT, 14);
}

        let p = phaseTime;
        if (p >= 1) {
            p = 1;
            currentPhase = PHASES.LOOP_LOADING;
            startTime = now;
        }
        coreScale = p;
    }

  else if (currentPhase === PHASES.LOOP_LOADING) {
  
      // Accumulate total loading time
    loadingTimer += deltaTime;

    // Light animation
    letterLightTimer += deltaTime;
    if (letterLightTimer > 0.1) {
        letterLightIndex = (letterLightIndex + 1) % 7;
        letterLightTimer = 0;
    }

    // Sparkles (reduced for performance)
    if (Math.random() < 0.05) {
        const x = width / 2 + (Math.random() - 0.5) * 40;
        const y = height / 2 + Math.random() * 20;
        spawnSparkle(x, y);
    }

    // Exit after 3 seconds
    if (loadingTimer > 10) {
      
        AudioManager.stopAll();

        window.location.href = "../game/main.html";
        return;
    }
}

    updateParticles();
}

function draw() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.3)';
    ctx.fillRect(0, 0, width, height);

    ctx.textBaseline = 'middle';

    drawParticles();

    // Letters
    letters.forEach(l => {
        ctx.save();
        ctx.translate(l.x + l.width / 2, l.y);
        ctx.scale(l.scale, l.scale);
        ctx.translate(-(l.x + l.width / 2), -l.y);

        ctx.globalAlpha = l.alpha;
        ctx.fillStyle = l.color;
        ctx.shadowColor = l.color;
        ctx.shadowBlur = GLOW_BLUR * l.glowBlurFactor;

        ctx.font = `bold ${FONT_SIZE}px ${FONT_FAMILY}`;
        ctx.fillText(l.char, l.x, l.y);

        ctx.restore();
    });

    // Sentinel core + LOADING when active
    if (currentPhase >= PHASES.CORE_UP) {
        const centerX = width / 2;
        const centerY = height / 2;

        drawSentinelCore(centerX, centerY, coreScale);
        drawLoadingText(centerX, centerY + 180);
    }

    // Scanlines
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let i = 0; i < height; i += 4) {
        ctx.fillRect(0, i, width, 2);
    }
}

function drawSentinelCore(centerX, centerY, scale) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.scale(scale, scale);

    const time = Date.now() / 1000;

    const BASE_SIZE = 150;
    const pulse = 0.9 + Math.sin(time * 2) * 0.1;
    const size = BASE_SIZE * pulse;

const rotationSquare = time * ROTATION_SQUARE;
const rotationPentagon = time * ROTATION_PENTAGON;
const rotationHexagon = time * ROTATION_HEXAGON;

// Recompute square vertices for wire animation
const squareRadius = size * 0.7;
const squareVertices = getPolygonVertices(squareRadius, 4, Math.PI / 4);

    ctx.globalCompositeOperation = 'lighter';

    // --- Cached polygon rendering (FPS boost) ---

    // Pentagon
    ctx.save();
    ctx.rotate(rotationPentagon);
    if (cachePentagon) {
        ctx.drawImage(cachePentagon, -cachePentagon.width / 2, -cachePentagon.height / 2);
    }
    ctx.restore();

    // Hexagon
    ctx.save();
    ctx.rotate(rotationHexagon);
    if (cacheHexagon) {
        ctx.drawImage(cacheHexagon, -cacheHexagon.width / 2, -cacheHexagon.height / 2);
    }
    ctx.restore();

    // Square
    ctx.save();
    ctx.rotate(rotationSquare);
    if (cacheSquare) {
        ctx.drawImage(cacheSquare, -cacheSquare.width / 2, -cacheSquare.height / 2);
    }
    ctx.restore();

    // Static wires from square vertices
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    const worldSquareVertices = transformVertices(squareVertices, rotationSquare);
    drawStaticWires(ctx, worldSquareVertices, size);

    // Chip package
    ctx.globalCompositeOperation = 'source-over';
    const chipSize = EYE_SIZE * 3.5;
    ctx.shadowColor = CORE_GLOW_LIGHT;
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeStyle = CORE_GLOW_LIGHT;
    ctx.lineWidth = 2;
    ctx.strokeRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);
    ctx.fillRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);

    // Eye
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    const eyeCenterY = 0;
    const timeFactorX = time * 0.8;
    const timeFactorY = time * 0.6;

    const pupilX = Math.sin(timeFactorX) * PUPIL_TRAVEL;
    const pupilY = Math.cos(timeFactorY) * PUPIL_TRAVEL;

    // Eyeball
    ctx.shadowColor = COLOR_MAIN;
    ctx.shadowBlur = 10;
    ctx.fillStyle = CORE_CENTER_COLOR;
    ctx.beginPath();
    ctx.arc(0, eyeCenterY, EYE_SIZE, 0, Math.PI * 2);
    ctx.fill();

    // Pupil
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(pupilX, eyeCenterY + pupilY, EYE_SIZE * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Thorn circles
    ctx.globalCompositeOperation = 'lighter';
    drawThornCircle(ctx, EYE_SIZE + 15, 24, time * ROTATION_INNER_THORNS, COLOR_MAIN, 20);
    drawThornCircle(ctx, EYE_SIZE + 35, 36, time * ROTATION_OUTER_THORNS, CORE_GLOW_LIGHT, 10);

    ctx.restore();
}

function getPolygonVertices(radius, sides, offsetAngle) {
    const vertices = [];
    for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides + offsetAngle;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        vertices.push({ x, y });
    }
    return vertices;
}

function transformVertices(vertices, rotation) {
    return vertices.map(v => ({
        x: v.x * Math.cos(rotation) - v.y * Math.sin(rotation),
        y: v.x * Math.sin(rotation) + v.y * Math.cos(rotation)
    }));
}

function drawPolygon(ctx, radius, sides, offsetAngle) {
    const vertices = getPolygonVertices(radius, sides, offsetAngle);
    ctx.beginPath();
    vertices.forEach((v, i) => {
        if (i === 0) ctx.moveTo(v.x, v.y);
        else ctx.lineTo(v.x, v.y);
    });
    ctx.closePath();
    ctx.stroke();
}

function drawThornCircle(ctx, radius, count, rotation, color, blur) {
    ctx.save();
    ctx.rotate(rotation);

    ctx.shadowColor = color;
    ctx.shadowBlur = blur;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    const thornLength = 8;
    for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count;

        const startX = radius * Math.cos(angle);
        const startY = radius * Math.sin(angle);
        const endX = (radius + thornLength) * Math.cos(angle);
        const endY = (radius + thornLength) * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    ctx.restore();
}

function drawStaticWires(ctx, vertices, size) {
    const wireLength = size * 1.5;
    const color = COLOR_WIRE_BRIGHT;
    const chipSize = EYE_SIZE * 3.5;
    const chipHalf = chipSize / 2;

    ctx.shadowBlur = 5;
    ctx.shadowColor = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.globalCompositeOperation = 'lighter';

    vertices.forEach(v => {
        const angle = Math.atan2(v.y, v.x);

        const endX = Math.cos(angle) * wireLength;
        const endY = Math.sin(angle) * wireLength;

        ctx.beginPath();
        ctx.moveTo(v.x, v.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        let connectX, connectY;
        if (Math.abs(v.x) > Math.abs(v.y)) {
            connectX = v.x > 0 ? chipHalf : -chipHalf;
            connectY = v.y;
        } else {
            connectX = v.x;
            connectY = v.y > 0 ? chipHalf : -chipHalf;
        }

        connectX = Math.min(chipHalf, Math.max(-chipHalf, connectX));
        connectY = Math.min(chipHalf, Math.max(-chipHalf, connectY));

        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(0, 255, 119, 0.5)';
        ctx.beginPath();
        ctx.moveTo(v.x, v.y);
        ctx.lineTo(connectX, connectY);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
    });

    ctx.globalCompositeOperation = 'source-over';
}

function drawLoadingText(x, y) {
    const text = "LOADING...";
    ctx.textAlign = 'center';
    ctx.font = `bold 30px ${FONT_FAMILY}`;

    const textMetrics = ctx.measureText(text);
    let currentX = x - (textMetrics.width + (text.length - 1) * 5) / 2;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charMetrics = ctx.measureText(char);
        const charWidth = charMetrics.width;

        ctx.save();
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';

        if (i < 7 && i === letterLightIndex) {
            ctx.shadowColor = COLOR_LOADING_LIGHT;
            ctx.shadowBlur = 10;
            ctx.fillStyle = COLOR_LOADING_LIGHT;
        } else {
            ctx.shadowBlur = 0;
            ctx.fillStyle = COLOR_LOADING;
        }

        ctx.fillText(char, currentX, y);
        currentX += charWidth + 5;
        ctx.restore();
    }
}

// Particles
function spawnParticles(x, y, color, count = 100) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x: x + (Math.random() - 0.5) * 10,
            y: y + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            life: 1,
            color,
            isSparkle: false,
            size: 2
        });
    }
}

function spawnSparkle(x, y) {
    particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(0.5 + Math.random() * 1.5),
        life: 1,
        color: CORE_GLOW_LIGHT,
        isSparkle: true,
        size: 1 + Math.random() * 2
    });
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        if (p.isSparkle) {
            p.vx *= 0.99;
            p.vy *= 0.995;
            p.y += p.vy * 0.5;
            p.x += p.vx;
            p.life -= 0.01 + Math.random() * 0.005;
        } else {
            p.vx *= 0.95;
            p.vy *= 0.95;
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;
        }

        if (p.life <= 0) particles.splice(i, 1);
    }
}

function drawParticles() {
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach(p => {
        ctx.globalAlpha = p.life * (p.isSparkle ? 1 : 0.8);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.isSparkle ? 5 : 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = 'source-over';
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

init();

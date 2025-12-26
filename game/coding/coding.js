let Memory = {};
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Bottom Dock Tab Switching
function switchDock(panelId) {
    document.querySelectorAll('.dock-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`dock-${panelId}`).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function printToTerminal(text, type = "terminal") {
    const target = type === "terminal" ? 'terminal-body' : 'dock-output-log';
    const div = document.getElementById(target);
    div.innerHTML += `<div>> ${text}</div>`;
}

// --- GAME ENGINE CORE ---
let gameObject = { x: 50, y: 250, size: 20, gravity: 0 };

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw "Player"
    ctx.fillStyle = "#2f81f7";
    ctx.fillRect(gameObject.x, gameObject.y, gameObject.size, gameObject.size);
    
    // Physics
    if (Memory['gravity']) {
        gameObject.y += gameObject.gravity;
        gameObject.gravity += 0.2;
    }
    
    requestAnimationFrame(gameLoop);
}

function executeLine(line) {
    const tokens = line.split(/\s+/);
    const action = tokens[0].toUpperCase();

    if (action === "SAY") {
        printToTerminal(tokens.slice(1).join(' '), "output-log");
    } 
    else if (action === "SET") {
        let name = tokens[1];
        let val = eval(tokens.slice(3).join(' ')); 
        Memory[name] = val;
        if (name === "gravity") gameObject.gravity = val;
        updateMemoryView();
    }
    else if (action === "JUMP") {
        gameObject.gravity = -5; // Flappy Bird mechanic
        printToTerminal("Action: Player Jumped");
    }
}

function runCode() {
    const lines = document.getElementById('editor').value.split('\n');
    document.getElementById('terminal-body').innerHTML = "Initializing build...";
    Memory = {};
    lines.forEach(l => {
        let line = l.trim();
        if (line && line.endsWith(';')) executeLine(line.replace(';', ''));
    });
}

function updateMemoryView() {
    const view = document.getElementById('memory-view');
    view.innerHTML = "";
    for (let key in Memory) view.innerHTML += `<div>${key}: ${Memory[key]}</div>`;
}

window.onload = () => { gameLoop(); };

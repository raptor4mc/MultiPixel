let Memory = {};
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const termInput = document.getElementById('terminal-input');
const termHistory = document.getElementById('terminal-history');

// --- 1. TERMINAL & "RAP" COMMANDS ---
termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = termInput.value.trim();
        if (val) handleCommand(val);
        termInput.value = "";
    }
});

function handleCommand(input) {
    // Echo the command in history
    termHistory.innerHTML += `<div class="term-line"><span class="prompt">~/multi-pixel</span> <span class="branch">main</span> $ ${input}</div>`;
    
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1];

    if (cmd === "rap") {
        if (arg === "run") {
            runCode();
            termHistory.innerHTML += `<div class="text-green">👟🦖 Sneakeraptor: Compiling game.mr... Success!</div>`;
        } else if (arg === "clear") {
            termHistory.innerHTML = "";
        } else {
            termHistory.innerHTML += `<div class="text-red">rap: command not found: ${arg}</div>`;
        }
    } else {
        termHistory.innerHTML += `<div>sh: command not found: ${cmd}</div>`;
    }
    // Auto-scroll terminal
    document.getElementById('dock-terminal').scrollTop = document.getElementById('dock-terminal').scrollHeight;
}

// --- 2. EXPLORER "PLOP" LOGIC ---
function triggerNewItem(type) {
    const tree = document.getElementById('file-tree');
    const container = document.createElement('div');
    container.className = "item-input-container";
    
    const input = document.createElement('input');
    input.className = "file-input";
    input.placeholder = type === 'file' ? "new-file.mr" : "folder-name";
    
    container.appendChild(input);
    tree.prepend(container); // "Plops" it to the top
    input.focus();

    input.onkeydown = (e) => {
        if (e.key === 'Enter') {
            const name = input.value || "untitled";
            const newItem = document.createElement('div');
            newItem.className = "item file";
            // Check for file extensions for icons
            let iconClass = "fas fa-file-code text-blue";
            if (name.endsWith('.js')) iconClass = "fab fa-js text-yellow";
            
            newItem.innerHTML = `<i class="${iconClass}"></i> <span>${name}</span>`;
            tree.insertBefore(newItem, container);
            container.remove();
            printToTerminal(`Created ${type}: ${name}`, "output-log");
        } else if (e.key === 'Escape') {
            container.remove();
        }
    };
}

// --- 3. GAME ENGINE CORE ---
let gameObject = { x: 50, y: 250, size: 20, gravity: 0 };

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw "Player"
    ctx.fillStyle = "#2f81f7";
    ctx.fillRect(gameObject.x, gameObject.y, gameObject.size, gameObject.size);
    
    // Physics
    if (Memory['gravity'] !== undefined) {
        gameObject.y += gameObject.gravity;
        gameObject.gravity += 0.2; // Gravity constant
    }
    
    // Collision with ground
    if (gameObject.y > canvas.height - gameObject.size) {
        gameObject.y = canvas.height - gameObject.size;
        gameObject.gravity = 0;
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
        printToTerminal("Action: Player Jumped", "output-log");
    }
}

function runCode() {
    const lines = document.getElementById('editor').value.split('\n');
    document.getElementById('dock-output-log').innerHTML = "Initializing build...";
    Memory = {};
    lines.forEach(l => {
        let line = l.trim();
        if (line && line.endsWith(';')) executeLine(line.replace(';', ''));
    });
}

// --- 4. UI HELPERS ---
function switchDock(panelId) {
    document.querySelectorAll('.dock-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`dock-${panelId}`).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

function printToTerminal(text, type = "terminal") {
    const target = type === "terminal" ? 'terminal-history' : 'dock-output-log';
    const div = document.getElementById(target);
    div.innerHTML += `<div>> ${text}</div>`;
}

function updateMemoryView() {
    const view = document.getElementById('memory-view');
    view.innerHTML = "";
    for (let key in Memory) {
        view.innerHTML += `<div class="mem-item"><b>${key}</b>: ${Memory[key]}</div>`;
    }
}

function saveLocal() { localStorage.setItem('mr_code', document.getElementById('editor').value); }

window.onload = () => { 
    document.getElementById('editor').value = localStorage.getItem('mr_code') || "";
    gameLoop(); 
};

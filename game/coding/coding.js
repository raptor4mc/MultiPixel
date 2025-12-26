let Memory = {};

// 1. SWITCH SIDEBAR (Like your video showing Source Control vs Explorer)
function switchSidebar(panelId) {
    // Hide all panels
    document.querySelectorAll('.side-panel').forEach(p => p.classList.add('hidden'));
    // Show selected
    document.getElementById(`sidebar-${panelId}`).classList.remove('hidden');
    // Update icons
    document.querySelectorAll('.activity-bar .icon').forEach(i => i.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// 2. TERMINAL LOGGING (With colors from your video)
function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    const color = isError ? "#f85149" : "#7ee787";
    outputDiv.innerHTML += `<div><span style="color: ${color}">> ${text}</span></div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// 3. GAME OUTPUT (SAY command)
function printToGame(text) {
    const stageText = document.getElementById('game-story-text');
    stageText.innerText = Memory[text] !== undefined ? Memory[text] : text;
}

// 4. THE ENGINE
function runCode() {
    const code = document.getElementById('editor').value;
    const lines = code.split('\n');
    document.getElementById('output').innerHTML = ""; // Clear Terminal
    printToTerminal("Compiling MultiRaptor...");
    
    Memory = {}; // Reset local vars

    lines.forEach((line, i) => {
        let l = line.trim();
        if(!l || l.startsWith("#")) return;
        
        try {
            if(!l.endsWith(';')) throw new Error("Missing semicolon");
            executeLine(l.replace(';', ''));
        } catch(e) {
            printToTerminal(`Line ${i+1}: ${e.message}`, true);
        }
    });
}

function executeLine(line) {
    const tokens = line.split(/\s+/);
    const action = tokens[0].toUpperCase();

    if (action === "SAY") {
        printToGame(tokens.slice(1).join(' '));
    } 
    else if (action === "SET") {
        let name = tokens[1];
        let val = eval(tokens.slice(3).join(' ')); 
        Memory[name] = val;
        printToTerminal(`Memory set: ${name} = ${val}`);
    }
    else if (action === "SPAWN") {
        document.getElementById('player').classList.remove('hidden');
    }
    else if (action === "MOVE") {
        let p = document.getElementById('player');
        let dist = parseInt(tokens[2]) || 50;
        if(tokens[1] === "RIGHT") p.style.left = (p.offsetLeft + dist) + "px";
        if(tokens[1] === "LEFT") p.style.left = (p.offsetLeft - dist) + "px";
    }
}

function saveLocal() { localStorage.setItem('code', document.getElementById('editor').value); }
function clearTerminal() { document.getElementById('output').innerHTML = "> Terminal cleared."; }

window.onload = () => {
    document.getElementById('editor').value = localStorage.getItem('code') || "";
    printToTerminal("MultiPixel Environment Initialized.");
}

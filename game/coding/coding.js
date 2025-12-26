let SupremeSettings = { safetyMode: true, requireSemicolons: true };
let Memory = {};

function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<div style="color: ${isError ? 'red' : '#00ff95'}">> ${text}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function runCode() {
    let lines = document.getElementById('editor').value.split('\n');
    document.getElementById('output').innerHTML = "";
    Memory = {};
    updateVariableMonitor();

    lines.forEach((lineText, i) => {
        let line = lineText.trim();
        if (!line || line.startsWith("#/#")) return;
        try {
            if (SupremeSettings.requireSemicolons && !line.endsWith(';')) throw new Error("Missing ';'");
            executeLine(line.replace(';', ''));
        } catch (e) {
            printToTerminal(`Line ${i+1}: ${e.message}`, true);
        }
    });
}

function executeLine(line) {
    const tokens = line.split(/\s+/);
    const action = tokens[0].toUpperCase();

    if (action === "SAY") {
        let msg = tokens.slice(1).join(' ');
        printToTerminal(Memory[msg] !== undefined ? Memory[msg] : msg);
    } 
    else if (action === "SET") {
        let name = tokens[1];
        let val = eval(tokens.slice(3).join(' ')); // Basic math
        Memory[name] = val;
        updateVariableMonitor();
    }
    // --- ANIMATION COMMANDS ---
    else if (action === "SPAWN") {
        document.getElementById('player').classList.remove('hidden');
        printToTerminal("Entity Spawned on Stage.");
    }
    else if (action === "MOVE") {
        let direction = tokens[1]; // UP, DOWN, LEFT, RIGHT
        let dist = tokens[2] || 50;
        let player = document.getElementById('player');
        let top = player.offsetTop;
        let left = player.offsetLeft;

        if (direction === "UP") player.style.top = (top - dist) + "px";
        if (direction === "DOWN") player.style.top = (top + dist) + "px";
        if (direction === "LEFT") player.style.left = (left - dist) + "px";
        if (direction === "RIGHT") player.style.left = (left + dist) + "px";
    }
}

function updateVariableMonitor() {
    let monitor = document.getElementById('var-monitor');
    monitor.innerHTML = "";
    for (let key in Memory) {
        monitor.innerHTML += `<div><b>${key}</b>: ${Memory[key]}</div>`;
    }
}

function saveLocal() { localStorage.setItem('mr_code', document.getElementById('editor').value); }
window.onload = () => { 
    document.getElementById('editor').value = localStorage.getItem('mr_code') || "";
    printToTerminal("MULTIRAPTOR GAME ENGINE READY."); 
};

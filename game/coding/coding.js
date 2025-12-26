let SupremeSettings = { safetyMode: true, requireSemicolons: true };
let Memory = {};

// --- OUTPUT 1: System Terminal (Bottom) ---

function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
    
    // Terminal style logging
    outputDiv.innerHTML += `<div><span style="color: #8b949e">[${time}]</span> <span style="color: ${isError ? '#ff7b72' : '#7ee787'}">${text}</span></div>`;
    
    // Keep scroll at bottom
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// --- OUTPUT 2: Game Window (Right) ---
function printToGame(text) {
    const gameStoryText = document.getElementById('game-story-text');
    // If the text is a variable in memory, show the value, otherwise show raw text
    gameStoryText.innerText = Memory[text] !== undefined ? Memory[text] : text;
}

function runCode() {
    let lines = document.getElementById('editor').value.split('\n');
    document.getElementById('output').innerHTML = ""; // Clear logs
    document.getElementById('game-story-text').innerText = ""; // Clear game text
    Memory = {};
    updateVariableMonitor();

    printToTerminal("ENGINE: Booting MultiRaptor Runtime...");

    lines.forEach((lineText, i) => {
        let line = lineText.trim();
        // Skip empty lines or comments
        if (!line || line.startsWith("#/#")) return;
        
        try {
            if (SupremeSettings.requireSemicolons && !line.endsWith(';')) {
                throw new Error("Missing semicolon ';'");
            }
            executeLine(line.replace(/;$/, ''));
        } catch (e) {
            printToTerminal(`Line ${i+1}: ${e.message}`, true);
        }
    });
}

function executeLine(line) {
    const tokens = line.split(/\s+/);
    const action = tokens[0].toUpperCase();

    // SAY now targets the Visual Stage on the Right
    if (action === "SAY") {
        let msg = tokens.slice(1).join(' ');
        printToGame(msg);
        printToTerminal(`Log: SAY executed.`);
    } 
    
    // SET updates variables and logs to Terminal
    else if (action === "SET") {
        let name = tokens[1];
        let mathPart = tokens.slice(3).join(' ');
        
        // Handle math and variable replacement
        let expression = mathPart;
        for (let key in Memory) {
            expression = expression.replace(new RegExp(key, 'g'), Memory[key]);
        }
        
        let val = eval(expression); 
        Memory[name] = val;
        
        printToTerminal(`Memory Update: ${name} = ${val}`);
        updateVariableMonitor();
    }

    // ANIMATION COMMANDS
    else if (action === "SPAWN") {
        document.getElementById('player').classList.remove('hidden');
        printToTerminal("Graphics: Entity 'Dragon' rendered.");
    }

    else if (action === "MOVE") {
        let direction = tokens[1];
        let dist = parseInt(tokens[2]) || 50;
        let player = document.getElementById('player');
        
        if (direction === "UP") player.style.top = (player.offsetTop - dist) + "px";
        if (direction === "DOWN") player.style.top = (player.offsetTop + dist) + "px";
        if (direction === "LEFT") player.style.left = (player.offsetLeft - dist) + "px";
        if (direction === "RIGHT") player.style.left = (player.offsetLeft + dist) + "px";
        
        printToTerminal(`Graphics: Sprite moved ${direction} ${dist}px`);
    }
}

function updateVariableMonitor() {
    let monitor = document.getElementById('var-monitor');
    monitor.innerHTML = "";
    for (let key in Memory) {
        monitor.innerHTML += `<div style="margin-bottom:2px;"><b>${key}</b> = ${Memory[key]}</div>`;
    }
}

function saveLocal() { 
    localStorage.setItem('mr_code', document.getElementById('editor').value); 
}

window.onload = () => { 
    document.getElementById('editor').value = localStorage.getItem('mr_code') || "";
    printToTerminal("MULTIRAPTOR WORKBENCH READY."); 
};

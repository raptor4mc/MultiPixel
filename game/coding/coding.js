let SupremeSettings = {
    safetyMode: true,
    caseSensitive: true,
    requireSemicolons: true
};

let Memory = {};

// --- SYSTEM FUNCTIONS ---

function saveLocal() {
    localStorage.setItem('multiRaptorCode', document.getElementById('editor').value);
}

function loadLocal() {
    const saved = localStorage.getItem('multiRaptorCode');
    if (saved) document.getElementById('editor').value = saved;
}

function toggleSettings() {
    document.getElementById('settings-menu').classList.toggle('hidden');
}

function updateSettings() {
    SupremeSettings.safetyMode = document.getElementById('safety-toggle').checked;
    SupremeSettings.requireSemicolons = document.getElementById('semi-toggle').checked;
    SupremeSettings.caseSensitive = document.getElementById('case-toggle').checked;
    printToTerminal("System: Config Sync Successful.");
}

function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    const color = isError ? "#f14c4c" : "#00ff95";
    outputDiv.innerHTML += `<div style="color: ${color}">> ${text}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function runCode() {
    const editor = document.getElementById('editor');
    let code = editor.value.replace(/#\/#[\s\S]*?#\*/g, ""); // Strip comments
    let lines = code.split('\n');
    
    document.getElementById('output').innerHTML = "";
    printToTerminal("MultiRaptor: Initializing Engine...");
    Memory = {}; 

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line === "") continue;
        try {
            if (SupremeSettings.requireSemicolons && !line.endsWith(';')) throw new Error("Missing ';'");
            executeLine(line.replace(/;$/, ''), i + 1);
        } catch (err) {
            printToTerminal(`FATAL ERROR [Line ${i+1}]: ${err.message}`, true);
        }
    }
}

function executeLine(line, lineNum) {
    const tokens = line.split(/\s+/);
    let action = SupremeSettings.caseSensitive ? tokens[0] : tokens[0].toUpperCase();

    // 1. SAY: Print text or variables
    if (action === "SAY") {
        let content = tokens.slice(1).join(' ');
        printToTerminal(Memory[content] !== undefined ? Memory[content] : content);
    } 

    // 2. SET: Variable with Basic Math Support
    else if (action === "SET") {
        let name = tokens[1];
        let expression = tokens.slice(3).join(' '); // Everything after the '='
        
        // Simple Math Engine (handles 5 + 5 or 10 * 2)
        let result;
        try {
            // Check if user is referencing another variable in math
            for (let key in Memory) {
                expression = expression.replace(new RegExp(key, 'g'), Memory[key]);
            }
            result = eval(expression); // Calculate the math
        } catch {
            result = isNaN(expression) ? expression : Number(expression);
        }

        if (SupremeSettings.safetyMode && Memory[name] !== undefined) {
            if (typeof Memory[name] !== typeof result) throw new Error(`Safety: Cannot turn ${typeof Memory[name]} into ${typeof result}`);
        }
        Memory[name] = result;
    }

    // 3. GET: User Input
    else if (action === "GET") {
        let name = tokens[1];
        let val = prompt(`MultiRaptor Input Request for: ${name}`);
        Memory[name] = isNaN(val) ? val : Number(val);
    }

    else if (action === "HELP") {
        printToTerminal("Commands: SAY [msg]; SET [var] = [math/val]; GET [var];");
    }
    else {
        throw new Error(`Command '${action}' unknown.`);
    }
}

function clearTerminal() {
    document.getElementById('output').innerHTML = "";
}

window.onload = () => {
    loadLocal();
    printToTerminal("MULTIRAPTOR WORKBENCH v1.0 ONLINE");
};

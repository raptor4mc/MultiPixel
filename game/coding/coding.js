let SupremeSettings = {
    safetyMode: true,
    caseSensitive: true,
    requireSemicolons: true
};

let Memory = {};

// --- UI FUNCTIONS ---

function toggleSettings() {
    document.getElementById('settings-menu').classList.toggle('hidden');
}

function updateSettings() {
    SupremeSettings.safetyMode = document.getElementById('safety-toggle').checked;
    SupremeSettings.requireSemicolons = document.getElementById('semi-toggle').checked;
    SupremeSettings.caseSensitive = document.getElementById('case-toggle').checked;
    printToTerminal("System: Settings Updated.");
}

function clearTerminal() {
    document.getElementById('output').innerHTML = "";
    bootMultiRaptor();
}

// --- ENGINE FUNCTIONS ---

function stripComments(code) {
    return code.replace(/#\/#[\s\S]*?#\*/g, "");
}

function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    const color = isError ? "#ff4444" : "#00ff95";
    outputDiv.innerHTML += `<div style="color: ${color}; margin-bottom: 4px;">> ${text}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight; 
}

function runCode() {
    const editor = document.getElementById('editor');
    let lines = stripComments(editor.value).split('\n');
    
    printToTerminal("--- Running MultiRaptor Script ---");
    Memory = {}; 

    for (let i = 0; i < lines.length; i++) {
        let lineNum = i + 1;
        let lineText = lines[i].trim();
        if (lineText === "") continue;

        try {
            if (SupremeSettings.requireSemicolons && !lineText.endsWith(';')) {
                throw new Error("Missing semicolon ';'");
            }
            let command = lineText.replace(/;$/, ''); // Removes only the last semicolon
            executeLine(command);
        } catch (err) {
            printToTerminal(`ERROR [Line ${lineNum}]: ${err.message}`, true);
        }
    }
}

function executeLine(line) {
    const tokens = line.split(/\s+/); // Splits by any whitespace
    let action = tokens[0];
    
    // Q7: Case Sensitivity Check
    if (!SupremeSettings.caseSensitive) {
        action = action.toUpperCase();
    }

    if (action === "SAY" || action === "say") {
        printToTerminal(tokens.slice(1).join(' '));
    } 
    else if (action === "SET" || action === "set") {
        let name = tokens[1];
        let value = tokens[3];
        let processedValue = isNaN(value) ? value : Number(value);

        if (SupremeSettings.safetyMode && Memory[name] !== undefined) {
            if (typeof Memory[name] !== typeof processedValue) {
                throw new Error(`Type Mismatch: ${name} is a ${typeof Memory[name]}`);
            }
        }
        Memory[name] = processedValue;
        printToTerminal(`${name} = ${processedValue}`);
    }
    else if (action === "HELP") {
        printToTerminal("Commands: SAY [text]; SET [var] = [val]; HELP;");
    }
    else {
        throw new Error(`Unknown command '${action}'`);
    }
}

function bootMultiRaptor() {
    printToTerminal(`******************************************`);
    printToTerminal(`* MULTIRAPTOR ENGINE ONLINE v1.0         *`);
    printToTerminal(`******************************************`);
    printToTerminal(`Ready for input...`);
}

window.onload = bootMultiRaptor;

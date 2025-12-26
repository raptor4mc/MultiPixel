// --- CONFIGURATION ---
const SupremeSettings = {
    safetyMode: true,      // Q6: Prevents changing types (e.g., Number to String)
    caseSensitive: true,   // Q7: 'SAY' != 'say'
    strictValues: true,    // Q8: Variables must have a value
    requireSemicolons: true // Q2: Setting for semicolon enforcement
};

let Memory = {}; // Stores variable values
let MemoryTypes = {}; // Stores variable types for Safety Mode

// --- THE CORE FUNCTIONS ---

function stripComments(code) {
    // Q9: Removes #/# comment #*
    return code.replace(/#\/#[\s\S]*?#\*/g, "");
}

function printToTerminal(text, isError = false) {
    const outputDiv = document.getElementById('output');
    const color = isError ? "#ff4444" : "#00ff00";
    outputDiv.innerHTML += `<span style="color: ${color}">> ${text}</span><br>`;
}

function runCode() {
    const editor = document.getElementById('editor');
    let rawInput = editor.value;
    let cleanInput = stripComments(rawInput);
    let lines = cleanInput.split('\n');
    
    document.getElementById('output').innerHTML = ""; // Clear terminal
    Memory = {}; // Reset memory for fresh run

    for (let i = 0; i < lines.length; i++) {
        let lineNum = i + 1;
        let lineText = lines[i].trim();

        if (lineText === "") continue;

        try {
            // Check for semicolons if setting is ON
            if (SupremeSettings.requireSemicolons && !lineText.endsWith(';')) {
                throw new Error("Missing semicolon ';'");
            }

            // Remove semicolon for processing
            let command = lineText.replace(';', '');
            executeLine(command);

        } catch (err) {
            // Q10: Report line number and specific error without crashing
            printToTerminal(`ERROR [Line ${lineNum}]: ${err.message}`, true);
            printToTerminal(`   Target: "${lineText}"`, true);
        }
    }
}

function executeLine(line) {
    const tokens = line.split(' ');
    const action = tokens[0];

    // COMMAND: SAY
    if (action === "SAY") {
        const message = tokens.slice(1).join(' ');
        printToTerminal(message);
    } 
    
    // COMMAND: SET (Variables)
    else if (action === "SET") {
        // Syntax: SET name = value
        let name = tokens[1];
        let value = tokens[3];

        // Try to determine if it's a number or string
        let processedValue = isNaN(value) ? value : Number(value);
        let currentType = typeof processedValue;

        // Safety Mode Check
        if (SupremeSettings.safetyMode && Memory[name] !== undefined) {
            let originalType = typeof Memory[name];
            if (originalType !== currentType) {
                throw new Error(`Safety Violation: Cannot change '${name}' from ${originalType} to ${currentType}`);
            }
        }

        Memory[name] = processedValue;
        printToTerminal(`System: ${name} is now ${processedValue}`);
    }
    
    else {
        throw new Error(`Unknown command '${action}'`);
    }
}

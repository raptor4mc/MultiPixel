
function runCode() {
    const input = document.getElementById('editor').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; // Clear previous output

    // 1. LEXER: Break code into lines and words
    const lines = input.split('\n');

    lines.forEach(line => {
        // Simple Tokenizing: split by space
        const tokens = line.trim().split(' ');

        // 2. PARSER & EVALUATOR: Direct execution
        // Let's create a command called "SAY" (like print)
        if (tokens[0] === "SAY") {
            const message = tokens.slice(1).join(' ');
            printToTerminal(message);
        } 
        else if (tokens[0] === "ADD") {
            const result = Number(tokens[1]) + Number(tokens[2]);
            printToTerminal("Result: " + result);
        }
        else if (tokens[0] !== "") {
            printToTerminal("Error: Unknown command '" + tokens[0] + "'");
        }
    });
}

function printToTerminal(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "> " + text + "<br>";
}

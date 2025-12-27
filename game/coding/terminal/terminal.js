
// Terminal logic
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
let packages = {}; // Mock packages

// Wait for parent window data (from coding.js)
setTimeout(() => {
    const editor = window.parent.multiRaptorEditor;
    const repos = window.parent.multiRaptorRepos;
    const currentRepo = window.parent.multiRaptorCurrentRepo;
    const currentFile = window.parent.multiRaptorCurrentFile;

    function runCommand(cmd) {
        const parts = cmd.split(' ');
        const command = parts[0];
        terminalOutput.innerHTML += `<div>> ${cmd}</div>`;
        if (command === 'rap') {
            const subcmd = parts[1];
            if (subcmd === 'help') {
                terminalOutput.innerHTML += '<div>Available commands: help, run, install, list</div>';
            } else if (subcmd === 'run') {
                const code = editor.getValue();
                const result = interpretMultiRaptor(code);
                terminalOutput.innerHTML += `<div>${result}</div>`;
            } else if (subcmd === 'install') {
                const pkg = parts[2];
                packages[pkg] = true;
                terminalOutput.innerHTML += `<div>Installed ${pkg}</div>`;
            } else if (subcmd === 'list') {
                terminalOutput.innerHTML += `<div>Packages: ${Object.keys(packages).join(', ')}</div>`;
            } else {
                terminalOutput.innerHTML += '<div>Unknown rap command</div>';
            }
        } else {
            terminalOutput.innerHTML += '<div>Unknown command. Use rap help.</div>';
        }
        terminalInput.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    terminalInput.onkeydown = (e) => {
        if (e.key === 'Enter') runCommand(terminalInput.value);
    };

    // Simple MultiRaptor Interpreter
    function interpretMultiRaptor(code) {
        let output = '';
        const lines = code.split('\n');
        let vars = {};
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith('var ')) {
                const [_, name, val] = line.match(/var (\w+) = (.+);/);
                vars[name] = eval(val); // Simple eval for demo
            } else if (line.startsWith('print(')) {
                const expr = line.match(/print\$(.+)\$;/)[1];
                output += eval(expr.replace(/\b\w+\b/g, m => vars[m] || m)) + '\n';
            }
        }
        return output || 'Executed successfully.';
    }
}, 1000); // Delay to ensure parent data is loaded

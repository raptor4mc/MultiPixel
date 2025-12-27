// Load Monaco Editor
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });
require(['vs/editor/editor.main'], function() {
    // Define MultiRaptor language
    monaco.languages.register({ id: 'multiraptor' });
    monaco.languages.setMonarchTokensProvider('multiraptor', {
        tokenizer: {
            root: [
                [/\b(var|if|else|for|while|func|print|return)\b/, 'keyword'],
                [/\b\d+/, 'number'],
                [/"([^"\\$|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                [/[{}()\$\$]/, '@brackets'],
                [/[a-z_$][\w$]*/, 'identifier'],
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/\\./, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ]
        }
    });

    // Create editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: '// Welcome to MultiRaptor!\nvar x = 10;\nprint("Hello, World!");\n',
        language: 'multiraptor',
        theme: 'vs-dark'
    });

    // Mock data
    let repos = JSON.parse(localStorage.getItem('repos')) || [{ name: 'default-repo', files: { 'main.mr': '// Main file\nvar x = 5;\nprint(x);' }, commits: [] }];
    let currentRepo = repos[0];
    let currentFile = 'main.mr';

    // Update UI
    function updateUI() {
        document.getElementById('repos-list').innerHTML = repos.map(r => `<div class="repo-item" onclick="switchRepo('${r.name}')">${r.name}</div>`).join('');
        document.getElementById('files-list').innerHTML = Object.keys(currentRepo.files).map(f => `<div class="file-item repo-item" onclick="openFile('${f}')">${f}</div>`).join('');
        editor.setValue(currentRepo.files[currentFile] || '');
    }
    updateUI();

    // Repo functions
    window.switchRepo = (name) => {
        currentRepo = repos.find(r => r.name === name);
        updateUI();
    };
    document.getElementById('new-repo').onclick = () => {
        const name = prompt('Repo name:');
        if (name) {
            repos.push({ name, files: {}, commits: [] });
            localStorage.setItem('repos', JSON.stringify(repos));
            updateUI();
        }
    };
    document.getElementById('save').onclick = () => {
        currentRepo.files[currentFile] = editor.getValue();
        currentRepo.commits.push({ message: 'Commit', date: new Date() });
        localStorage.setItem('repos', JSON.stringify(repos));
        alert('Committed!');
    };

    // File functions
    window.openFile = (file) => {
        currentFile = file;
        editor.setValue(currentRepo.files[file]);
    };

    // Expose editor and data to terminal (via window for cross-frame communication)
    window.multiRaptorEditor = editor;
    window.multiRaptorRepos = repos;
    window.multiRaptorCurrentRepo = currentRepo;
    window.multiRaptorCurrentFile = currentFile;
});

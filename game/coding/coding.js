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
    let repos = JSON.parse(localStorage.getItem('repos')) || [{ name: 'default-repo', files: { 'main.mr': '// Main file\nvar x = 5;\nprint(x);' }, commits: [], branches: ['main'], issues: [] }];
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
            repos.push({ name, files: {}, commits: [], branches: ['main'], issues: [] });
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

    // New features: Auto-save every 30 seconds
    setInterval(() => {
        if (currentRepo && editor) {
            currentRepo.files[currentFile] = editor.getValue();
            localStorage.setItem('repos', JSON.stringify(repos));
        }
    }, 30000);

    // New button handlers
    document.getElementById('new-branch').onclick = () => {
        const name = prompt('Branch name:');
        if (name) {
            currentRepo.branches.push(name);
            localStorage.setItem('repos', JSON.stringify(repos));
            alert('Branch created!');
        }
    };
    document.getElementById('new-issue').onclick = () => {
        const title = prompt('Issue title:');
        if (title) {
            currentRepo.issues.push({ title, status: 'open' });
            localStorage.setItem('repos', JSON.stringify(repos));
            alert('Issue created!');
        }
    };
    document.getElementById('settings').onclick = () => {
        const autoSave = confirm('Enable auto-save?');
        setSetting('autoSave', autoSave);
        alert('Settings updated!');
    };
    document.getElementById('search-files').oninput = (e) => {
        const query = e.target.value;
        const files = Object.keys(currentRepo.files).filter(f => f.includes(query));
        document.getElementById('files-list').innerHTML = files.map(f => `<div class="file-item repo-item" onclick="openFile('${f}')">${f}</div>`).join('');
    };
    document.getElementById('new-file').onclick = () => {
        const name = prompt('File name:');
        if (name) {
            currentRepo.files[name] = '';
            updateUI();
            localStorage.setItem('repos', JSON.stringify(repos));
        }
    };
    document.getElementById('new-folder').onclick = () => {
        const name = prompt('Folder name:');
        if (name) {
            currentRepo.files[name + '/'] = {}; // Mock folder
            updateUI();
            localStorage.setItem('repos', JSON.stringify(repos));
        }
    };
});

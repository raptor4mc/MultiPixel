
function initEditor() {
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
}

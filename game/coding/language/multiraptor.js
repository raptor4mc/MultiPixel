function interpretMultiRaptor(code) {
    let output = '';
    const lines = code.split('\n');
    let vars = {};
    let funcs = {};
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('var ')) {
            const match = line.match(/var (\w+) = (.+);/);
            if (match) vars[match[1]] = eval(match[2]);
        } else if (line.startsWith('print(')) {
            const match = line.match(/print\$(.+)\$;/);
            if (match) output += eval(match[1].replace(/\b\w+\b/g, m => vars[m] || m)) + '\n';
        } else if (line.startsWith('for ')) {
            const match = line.match(/for (\w+) in range\$(\d+)\$ \{(.+)\}/);
            if (match) {
                const [_, varName, count, body] = match;
                for (let i = 0; i < parseInt(count); i++) {
                    vars[varName] = i;
                    output += interpretMultiRaptor(body);
                }
            }
        } else if (line.startsWith('func ')) {
            const match = line.match(/func (\w+)\$([^)]*)\$ \{(.+)\}/);
            if (match) {
                const [_, name, params, body] = match;
                funcs[name] = { params: params.split(',').map(p => p.trim()), body };
            }
        }
    }
    return output || 'Executed successfully.';
}

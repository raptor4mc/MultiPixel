export class Tokenizer {
    constructor(vocab) {
        this.vocab = vocab;
        // Create a reverse lookup (ID -> Word/Char)
        this.decoder = Object.keys(vocab).reduce((acc, key) => {
            acc[vocab[key]] = key;
            return acc;
        }, {});
    }

    encode(text) {
        // Simple character or whitespace splitting - adjust based on your training
        // This is a basic example. 
        const tokens = text.split('').map(char => {
            return this.vocab[char] || this.vocab['<UNK>'] || 0;
        });
        return tokens;
    }

    decode(ids) {
        return ids.map(id => this.decoder[id] || '').join('');
    }
}

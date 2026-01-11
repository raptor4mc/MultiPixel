export class Tokenizer {
    constructor(vocab) {
        this.vocab = vocab;
        // Invert vocab for decoding (ID -> Word)
        this.idToWord = {};
        for (let word in vocab) {
            this.idToWord[vocab[word]] = word;
        }
    }

    encode(text) {
        // 1. Lowercase and split by punctuation/spaces
        // This regex splits but keeps the delimiters (like periods or spaces)
        const tokens = text.toLowerCase().split(/([ .,!?;]+)/).filter(x => x);
        
        // 2. Map to IDs
        return tokens.map(token => {
            // If word exists return ID, else return <UNK> ID (usually 1)
            return this.vocab[token] || this.vocab['<UNK>'] || 1;
        });
    }

    decode(ids) {
        return ids.map(id => {
            // Map ID to word, or empty string if not found
            return this.idToWord[id] || '';
        }).join('');
    }
}

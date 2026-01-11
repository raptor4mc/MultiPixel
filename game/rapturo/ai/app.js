import { Tokenizer } from './utils/tokenizer.js';
import { Sampler } from './utils/sampler.js';

class RapturoAI {
    constructor() {
        this.model = null;
        this.tokenizer = null;
        this.config = null;
        this.isGenerating = false;
        
        // UI Elements
        this.statusEl = document.getElementById('status');
        this.inputEl = document.getElementById('input-text');
        this.outputEl = document.getElementById('output-text');
        this.btnEl = document.getElementById('generate-btn');
        this.tempEl = document.getElementById('temp-slider');

        this.init();
    }

    async init() {
        try {
            // 1. Load Config & Vocab
            const [configRes, vocabRes] = await Promise.all([
                fetch('./config.json'),
                fetch('./vocab.json')
            ]);
            
            this.config = await configRes.json();
            const vocab = await vocabRes.json();
            this.tokenizer = new Tokenizer(vocab);

            // 2. Load Model (TensorFlow.js)
            // Note: This expects model.json to be relative to index.html
            this.model = await tf.loadLayersModel('./model/model.json');

            // 3. Warmup (Optional: runs a dummy prediction to compile shaders)
            tf.tidy(() => {
                const dummy = tf.zeros([1, 1]); // Adjust shape based on model input
                this.model.predict(dummy);
            });

            this.statusEl.innerText = "System Ready";
            this.statusEl.classList.add('ready');
            this.btnEl.disabled = false;
            this.btnEl.addEventListener('click', () => this.generate());

        } catch (error) {
            console.error(error);
            this.statusEl.innerText = "Error Loading System";
        }
    }

    async generate() {
        if (this.isGenerating) return;
        this.isGenerating = true;
        this.btnEl.disabled = true;
        this.outputEl.innerText = ""; // Clear previous

        const prompt = this.inputEl.value;
        const temperature = parseFloat(this.tempEl.value);

        // Convert Prompt to IDs
        let currentIds = this.tokenizer.encode(prompt);
        
        // Loop for generation
        for (let i = 0; i < this.config.max_length; i++) {
            
            // Get next token ID
            const nextId = await this.predictNextToken(currentIds, temperature);
            
            // Decode and Update UI
            const nextChar = this.tokenizer.decode([nextId]);
            this.outputEl.innerText += nextChar;
            
            // Append to context for next prediction
            currentIds.push(nextId);

            // Allow UI to update (prevent freeze)
            await new Promise(r => setTimeout(r, 0));
        }

        this.isGenerating = false;
        this.btnEl.disabled = false;
    }

    async predictNextToken(inputIds, temperature) {
        // Convert array to Tensor [1, sequence_length]
        const inputTensor = tf.tensor2d([inputIds], [1, inputIds.length]);

        let logits;
        
        // Run model
        const prediction = this.model.predict(inputTensor);
        
        // Handle different model output shapes:
        // Usually output is [batch, seq_len, vocab_size]. We want the last token.
        if (prediction.shape.length === 3) {
            const seqLen = prediction.shape[1];
            logits = prediction.slice([0, seqLen - 1, 0], [1, 1, -1]).squeeze();
        } else {
            logits = prediction.squeeze();
        }

        // Sample
        const nextId = await Sampler.sample(logits, temperature);

        // Clean up tensors to prevent memory leaks
        inputTensor.dispose();
        prediction.dispose();
        logits.dispose();

        return nextId;
    }
}

// Start the app
new RapturoAI();

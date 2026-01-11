import { Tokenizer } from './utils/tokenizer.js';
import { Sampler } from './utils/sampler.js';

// Configuration
const CONFIG = {
    modelPath: './model/model.json',
    vocabPath: './vocab.json',
    maxLength: 64,  // Max tokens to generate per reply
    temp: 0.8
};

class RapturoChat {
    constructor() {
        this.model = null;
        this.tokenizer = null;
        this.isGenerating = false;
        
        // DOM Elements
        this.historyDiv = document.getElementById('chat-history');
        this.inputEl = document.getElementById('user-input');
        this.sendBtn = document.getElementById('send-btn');
        this.statusEl = document.getElementById('status-indicator');

        // Bind events
        this.sendBtn.addEventListener('click', () => this.handleUserSend());
        this.inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserSend();
        });

        this.init();
    }

    async init() {
        try {
            // 1. Load Vocab & Tokenizer
            const vocabReq = await fetch(CONFIG.vocabPath);
            const vocab = await vocabReq.json();
            this.tokenizer = new Tokenizer(vocab);

            // 2. Load TF.js Model
            this.model = await tf.loadLayersModel(CONFIG.modelPath);
            
            // 3. Warmup (Run dummy data through model to compile shaders)
            tf.tidy(() => {
                const dummy = tf.zeros([1, 10]); // Assumes model takes length 10 seq
                try { this.model.predict(dummy); } catch(e) {} 
            });

            // UI Ready
            this.statusEl.innerText = "Online";
            this.statusEl.classList.add('online');
            this.statusEl.classList.remove('offline');
            this.inputEl.disabled = false;
            this.sendBtn.disabled = false;

        } catch (err) {
            console.error(err);
            this.statusEl.innerText = "Error";
        }
    }

    async handleUserSend() {
        const text = this.inputEl.value.trim();
        if (!text || this.isGenerating) return;

        // 1. Add User Message to UI
        this.appendMessage(text, 'user');
        this.inputEl.value = '';
        this.inputEl.disabled = true;

        // 2. Start Generation
        this.isGenerating = true;
        await this.generateResponse(text);
        
        // 3. Reset
        this.isGenerating = false;
        this.inputEl.disabled = false;
        this.inputEl.focus();
    }

    async generateResponse(inputPrompt) {
        // Create an empty AI message bubble that we will fill token by token
        const aiMsgDiv = this.appendMessage('', 'ai');
        
        // FORMATTING: "GPT" models usually need a strict format
        // Example: "User: hello\nAI:"
        const contextString = `User: ${inputPrompt}\nAI:`;
        
        // Encode context to Token IDs
        let currentSequence = this.tokenizer.encode(contextString);

        for (let i = 0; i < CONFIG.maxLength; i++) {
            // Predict next token ID
            const nextTokenId = await this.predictNext(currentSequence);
            
            // Decode ID to word/char
            const nextWord = this.tokenizer.decode([nextTokenId]);

            // Stop if we hit end-of-sequence token (assuming 2 is <EOS>)
            // You must check your vocab.json for the actual EOS ID
            if (nextTokenId === 2 || nextWord.includes('<EOS>')) break;

            // Update UI (streaming effect)
            aiMsgDiv.innerText += nextWord;
            this.historyDiv.scrollTop = this.historyDiv.scrollHeight;

            // Add new token to sequence for next prediction loop
            currentSequence.push(nextTokenId);
            
            // Optimization: If sequence gets too long for model, trim the beginning
            // (Assumes model max context is 128)
            if (currentSequence.length > 128) {
                currentSequence = currentSequence.slice(-128);
            }

            // Small pause to let UI render
            await new Promise(r => setTimeout(r, 0));
        }
    }

    async predictNext(seq) {
        return tf.tidy(() => {
            // Convert array to Tensor
            const input = tf.tensor2d([seq], [1, seq.length]);
            
            // Get Logits
            const output = this.model.predict(input);
            
            // Get the last element of the sequence (the prediction for 'next')
            // If output is [batch, seq, vocab], slice the last step
            const len = seq.length;
            const logits = output.slice([0, len - 1, 0], [1, 1, -1]).squeeze();
            
            // Sample
            const probs = tf.softmax(logits.div(tf.scalar(CONFIG.temp)));
            return tf.multinomial(probs, 1).dataSync()[0];
        });
    }

    appendMessage(text, sender) {
        const div = document.createElement('div');
        div.classList.add('message', sender);
        div.innerText = text;
        this.historyDiv.appendChild(div);
        this.historyDiv.scrollTop = this.historyDiv.scrollHeight;
        return div;
    }
}

new RapturoChat();

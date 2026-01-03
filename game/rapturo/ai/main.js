// game/rapturo/ai/main.js
import { Reasoner } from './core/reasoner.js';
import { Memory } from './core/memory.js';

// Simple Logger Helper
const Logger = {
    log: (msg) => {
        const el = document.getElementById('log-view');
        const line = document.createElement('div');
        line.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
        el.appendChild(line);
        el.scrollTop = el.scrollHeight;
    }
};

// Configuration
const Config = { speed: 1000 };

// Initialize Core Systems
const memory = new Memory();
const reasoner = new Reasoner(Logger, memory, Config);

// --- UI Connections ---

// 1. Controls
document.getElementById('btn-start').addEventListener('click', () => reasoner.start());
document.getElementById('btn-pause').addEventListener('click', () => reasoner.pause());

document.getElementById('btn-inject').addEventListener('click', () => {
    const input = document.getElementById('input-data');
    if(input.value) {
        memory.addInput(input.value);
        Logger.log(`INPUT INJECTED: ${input.value}`);
        input.value = '';
    }
});

// 2. Speed Slider
document.getElementById('slider-speed').addEventListener('input', (e) => {
    Config.speed = parseInt(e.target.value);
    document.getElementById('speed-val').innerText = Config.speed;
});

// 3. Visualization Updates (Listening to Events)
window.addEventListener('ai-state-change', (e) => {
    const state = e.detail;
    document.getElementById('state-display').innerText = state;
    
    // Reset all steps
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    
    // Highlight current step
    const map = {
        'PERCEIVE': 'step-perceive',
        'REASON': 'step-reason',
        'PLAN': 'step-plan',
        'ACT': 'step-act'
    };
    if(map[state]) document.getElementById(map[state]).classList.add('active');
});

// 4. Memory Updates
window.addEventListener('memory-updated', (e) => {
    const list = document.getElementById('memory-list');
    list.innerHTML = '';
    e.detail.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    });
});

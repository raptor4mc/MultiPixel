// game/rapturo/ai/core/memory.js
export class Memory {
    constructor() {
        this.shortTerm = [];
    }

    addInput(data) {
        this.shortTerm.push(data);
        window.dispatchEvent(new CustomEvent('memory-updated', { detail: this.shortTerm }));
    }

    getNewInputs() {
        // Return data and clear (simulating processing)
        const current = [...this.shortTerm];
        this.shortTerm = []; 
        window.dispatchEvent(new CustomEvent('memory-updated', { detail: this.shortTerm }));
        return current;
    }
}

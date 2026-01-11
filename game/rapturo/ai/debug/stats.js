// debug/stats.js

export class Stats {
    constructor() {
        this.startTime = 0;
        this.tokenCount = 0;
        this.history = [];
    }

    start() {
        this.startTime = performance.now();
        this.tokenCount = 0;
    }

    tick() {
        this.tokenCount++;
    }

    stop() {
        const durationSec = (performance.now() - this.startTime) / 1000;
        const tps = (this.tokenCount / durationSec).toFixed(2);
        
        const report = {
            tokens: this.tokenCount,
            time: durationSec.toFixed(2) + "s",
            tps: tps
        };
        
        console.log(`[Rapturo Stats] Generation finished: ${tps} tokens/sec`);
        return report;
    }
}

// game/rapturo/ai/core/rules.js
export class RuleEngine {
    constructor() {
        this.weights = {
            "threat": 0,
            "utility": 0,
            "curiosity": 0.5
        };
    }

    analyze(inputString) {
        const text = inputString.toLowerCase();
        let intent = "neutral";
        
        // Basic NLP simulation
        if (text.includes("danger") || text.includes("stop")) {
            this.weights.threat += 0.4;
            intent = "defensive";
        } 
        if (text.includes("learn") || text.includes("what")) {
            this.weights.curiosity += 0.3;
            intent = "inquiry";
        }
        if (text.includes("do") || text.includes("task")) {
            this.weights.utility += 0.5;
            intent = "actionable";
        }

        return { intent, weights: { ...this.weights } };
    }
}

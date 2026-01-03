// game/rapturo/ai/core/planner.js
export class Planner {
    determineGoal(analysis, memoryCount) {
        const { intent, weights } = analysis;

        if (weights.threat > 0.7) return "PROTECT_CORE";
        if (weights.utility > 0.5) return "EXECUTE_TASK";
        if (memoryCount > 3) return "CONSOLIDATE_MEMORY";
        
        return "IDLE_OBSERVATION";
    }

    getAction(goal) {
        const actions = {
            "PROTECT_CORE": "Encrypting local data and raising firewalls.",
            "EXECUTE_TASK": "Allocating processing cycles to user request.",
            "CONSOLIDATE_MEMORY": "Compressing short-term logs to seed.json.",
            "IDLE_OBSERVATION": "Scanning environment for new patterns."
        };
        return actions[goal] || "Awaiting signal...";
    }
}

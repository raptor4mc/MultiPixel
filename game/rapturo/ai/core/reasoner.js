// game/rapturo/ai/core/reasoner.js
import { RuleEngine } from './rules.js';
import { Planner } from './planner.js';

export class Reasoner {
    constructor(logger, memory, config) {
        this.logger = logger;
        this.memory = memory;
        this.config = config;
        this.rules = new RuleEngine();
        this.planner = new Planner();
        
        this.state = 'IDLE';
        this.isRunning = false;
    }

    async cycle() {
        if (!this.isRunning) return;

        // 1. PERCEIVE
        this.setState('PERCEIVE');
        const inputs = this.memory.getNewInputs();
        await this.wait();
        
        // 2. REASON (Logic processing)
        this.setState('REASON');
        let analysis = { intent: "none", weights: { threat: 0 } };
        if (inputs.length > 0) {
            // Analyze the last thing the user said
            analysis = this.rules.analyze(inputs[inputs.length - 1]);
            this.logger.log(`Analysis: Intent=${analysis.intent} | Threat=${analysis.weights.threat.toFixed(2)}`);
        }
        await this.wait();

        // 3. PLAN (Goal setting)
        this.setState('PLAN');
        const goal = this.planner.determineGoal(analysis, inputs.length);
        const action = this.planner.getAction(goal);
        this.logger.log(`Goal Set: ${goal}`);
        await this.wait();
        
        // 4. ACT
        this.setState('ACT');
        this.logger.log(`>> AI Response: ${action}`);
        await this.wait();

        this.cycle();
    }
    
    // ... rest of the helper methods (wait, setState) from previous part
}
// game/rapturo/ai/core/reasoner.js
export class Reasoner {
    constructor(logger, memory, config) {
        this.logger = logger;
        this.memory = memory;
        this.config = config;
        
        this.state = 'IDLE'; // IDLE, PERCEIVE, REASON, PLAN, ACT
        this.isRunning = false;
        this.timer = null;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.logger.log("System initialized. Loop started.");
        this.cycle();
    }

    pause() {
        this.isRunning = false;
        clearTimeout(this.timer);
        this.logger.log("System paused.");
    }

    // The Main AI Loop
    async cycle() {
        if (!this.isRunning) return;

        // 1. PERCEIVE (Check memory/inputs)
        this.setState('PERCEIVE');
        await this.wait();
        const inputs = this.memory.getNewInputs();
        
        // 2. REASON (Analyze inputs)
        this.setState('REASON');
        await this.wait();
        let decision = null;
        if (inputs.length > 0) {
            decision = `Analyzed ${inputs.length} items. Highest priority: ${inputs[0]}`;
        } else {
            decision = "No new input. Maintaining idle state.";
        }

        // 3. PLAN (Determine output)
        this.setState('PLAN');
        await this.wait();
        
        // 4. ACT (Execute/Log)
        this.setState('ACT');
        this.logger.log(`>> Action Taken: ${decision}`);
        await this.wait();

        // Loop
        this.cycle();
    }

    setState(newState) {
        this.state = newState;
        // Dispatch event for UI to update
        window.dispatchEvent(new CustomEvent('ai-state-change', { detail: newState }));
    }

    async wait() {
        return new Promise(resolve => {
            this.timer = setTimeout(resolve, this.config.speed);
        });
    }
}

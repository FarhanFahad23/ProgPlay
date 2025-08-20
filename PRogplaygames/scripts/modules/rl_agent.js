import { RLEnvironment } from './rl_environment.js';

export class RLAgent {
    constructor() {
        this.env = new RLEnvironment();
        this.qTable = {};
        this.alpha = 0.1; // Learning rate
        this.gamma = 0.9; // Discount factor
        this.epsilon = 0.1; // Exploration rate
    }

    getQValue(state, action) {
        return this.qTable[state] ? this.qTable[state][action] || 0 : 0;
    }

    setQValue(state, action, value) {
        if (!this.qTable[state]) {
            this.qTable[state] = {};
        }
        this.qTable[state][action] = value;
    }

    chooseAction(state) {
        if (Math.random() < this.epsilon) {
            return this.env.actions[Math.floor(Math.random() * this.env.actions.length)];
        }
        let maxQ = Math.max(...this.env.actions.map(action => this.getQValue(state, action)));
        return this.env.actions.find(action => this.getQValue(state, action) === maxQ);
    }

    train(episodes) {
        for (let episode = 0; episode < episodes; episode++) {
            let state = JSON.stringify(this.env.reset());
            let done = false;
            while (!done) {
                let action = this.chooseAction(state);
                let { state: nextState, reward, done: isDone } = this.env.step(action);
                nextState = JSON.stringify(nextState);

                let oldQ = this.getQValue(state, action);
                let maxNextQ = Math.max(...this.env.actions.map(a => this.getQValue(nextState, a)));
                let newQ = oldQ + this.alpha * (reward + this.gamma * maxNextQ - oldQ);
                this.setQValue(state, action, newQ);

                state = nextState;
                done = isDone;
            }
        }
    }

    generateLevel() {
        let state = JSON.stringify(this.env.reset());
        let done = false;
        while (!done) {
            let action = this.chooseAction(state);
            let { state: nextState, reward, done: isDone } = this.env.step(action);
            state = JSON.stringify(nextState);
            done = isDone;
        }
        return this.env.grid;
    }
}

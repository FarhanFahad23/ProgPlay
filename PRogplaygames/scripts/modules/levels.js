/*import * as generates from './generate.js';
import * as draw from './draw.js';
export function level1() {
    switch(lv){
        case 1:
            grid = [
                [0, 1, 0, 1, 0, 0],
                [1, 1, 0, 0, 1, 0],
                [0, 0, 5, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 1],
                [0, 0, 1, 0, 1, 1]
            ];
            getGrid(lv);
            pokeUrl = "../images/pokemons/pikachu.svg";
            mainLines = 4;
            procLines = 2
    }

    draw.drawScene(context, grid, pokeUrl);
    generates.codeLines('main-panel', 'main-code-container',numberOfLines);
    generates.codeLines('procedure-panel', 'procedure-code-container',2);
}
    */
/* import * as generates from './generate.js';
import * as draw from './draw.js';
import { RLAgent } from './rl_agent.js';
import { getGrid } from './grids.js'; */


/* const rlAgent = new RLAgent();
rlAgent.train(1000);  // Train the agent with 1000 episodes */

/* export function level1() {
    let grid = rlAgent.generateLevel();
    let pokeUrl = "../images/pokemons/pikachu.svg";
    let mainLines = 4;
    let procLines = 2;

    draw.drawScene(context, grid, pokeUrl);
    generates.codeLines('main-panel', 'main-code-container', mainLines);
    generates.codeLines('procedure-panel', 'procedure-code-container', procLines);
} */
import * as generates from './generate.js';
import * as draw from './draw.js';
import { generateLevel } from './grids.js';
import { QLearning } from './qLearning.js';

let grid = [];
let context = document.getElementById('game-canvas').getContext('2d');

export function level1(lv) {
    // Generate level using RL
    const qLearning = new QLearning();
    grid = qLearning.generateLevel(lv);
    draw.drawScene(context, grid, null);
    generates.codeLines('main-panel', 'main-code-container', 4);
    generates.codeLines('procedure-panel', 'procedure-code-container', 2);
}

export function placeCharacter(characterUrl) {
    const x = Math.floor(Math.random() * grid.length);
    const y = Math.floor(Math.random() * grid[0].length);
    grid[x][y] = characterUrl; // Place character on the grid
    draw.drawScene(context, grid, null);
}

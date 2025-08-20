/* export function getGrid(level){
    let grid;
    switch(level){
        case 0:
            grid = [
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 3, 0, 0, 1],
                [1, 1, 0, 0, 1, 1]
            ];
            break;
        case 1:
            grid = [
                [1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 2, 1, 1],
                [1, 1, 3, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1]
            ];
            break;
        case 2:
            grid = [
                [0, 0, 1, 1, 1, 1],
                [0, 0, 1, 1, 1, 1],
                [0, 0, 1, 5, 1, 1],
                [0, 0, 1, 0, 1, 1],
                [0, 0, 1, 0, 2, 1],
                [0, 0, 1, 1, 1, 1]
            ];
                break;
         case 3:
            grid = [
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 0],
                    [0, 1, 0, 5, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 0, 2, 1, 0],
                    [0, 1, 1, 1, 1, 0]
                    ];
                    break;






        case 4:
            grid = [
                    [0, 1, 0, 5, 1, 0],
                    [0, 1, 0, 0, 1, 0],
                    [0, 1, 0, 1, 0, 0],
                    [1, 0, 0, 0, 1, 0],
                    [1, 2, 1, 0, 1, 0],
                    [0, 1, 1, 1, 1, 0]
                    ];
                    break;    
        case 5:
            grid = [
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 0],
                    [0, 2, 0, 5, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 1, 1, 1, 0]
                    ];
                    break;

        case 6:
            grid = [
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 0],
                    [2, 0, 0, 5, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 1, 1, 1, 0]
                    ];
                    break;
        case 7:
            grid = [
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 0],
                    [0, 0, 2, 5, 1, 0],
                    [0, 1, 0, 1, 1, 0],
                    [0, 1, 0, 1, 1, 0],
    m               [0, 1, 1, 1, 1, 0]
                                    ];
                                    break;    
         case 8:
            grid = [
                                    [0, 0, 1, 1, 1, 0],
                                    [0, 0, 1, 1, 1, 0],
                                    [0, 0, 0, 5, 1, 0],
                                    [0, 2, 0, 1, 1, 0],
                                    [0, 1, 0, 1, 1, 0],
                                    [0, 1, 1, 1, 1, 0]
                                    ];
                                    break;    
        case 9:
            grid = [
                                    [0, 0, 1, 1, 1, 0],
                                    [0, 0, 1, 1, 1, 0],
                                    [0, 0, 0, 5, 1, 0],
                                    [0, 1, 2, 1, 1, 0],
                                    [0, 1, 0, 1, 1, 0],
                                    [0, 1, 1, 1, 1, 0]
                                    ];
                                    break;               
    }
    return grid;
} */
/*    const qTable = {};

    function getState(level) {
        return `level-${level}`;
    }
    
    function getActions() {
        return ['easy', 'medium', 'hard'];
    }
    
    function getReward(state, action) {
        const rewards = {
            'easy': 1,
            'medium': 2,
            'hard': 3
        };
        return rewards[action];
    }
    
    function chooseAction(state) {
        const epsilon = 0.1;
        const actions = getActions();
        if (Math.random() < epsilon) {
            return actions[Math.floor(Math.random() * actions.length)];
        } else {
            let maxQ = -Infinity;
            let chosenAction = null;
            for (const action of actions) {
                const qValue = qTable[state] ? qTable[state][action] || 0 : 0;
                if (qValue > maxQ) {
                    maxQ = qValue;
                    chosenAction = action;
                }
            }
            return chosenAction;
        }
    }
    
    function updateQTable(state, action, reward, nextState) {
        const alpha = 0.1;
        const gamma = 0.9;
        const qValue = qTable[state] ? qTable[state][action] || 0 : 0;
        const maxNextQ = nextState ? Math.max(...Object.values(qTable[nextState] || {})) : 0;
        qTable[state] = qTable[state] || {};
        qTable[state][action] = qValue + alpha * (reward + gamma * maxNextQ - qValue);
    }
    
    function generateGrid(level, difficulty) {
        const size = 6;
        const grid = Array.from({ length: size }, () => Array(size).fill(0));
    
        // Place walls randomly
        for (let i = 0; i < level + 1; i++) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);
            grid[x][y] = 1; // Wall
        }
    
        // Place Pokemon at a random position
        grid[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = 5;
    
        // Place target at a random position
        grid[Math.floor(Math.random() * size)][Math.floor(Math.random() * size)] = 2;
    
        return grid;
    }
    
    export function generateLevel(level) {
        const state = getState(level);
        const action = chooseAction(state);
        const reward = getReward(state, action);
        const nextState = getState(level + 1);
    
        updateQTable(state, action, reward, nextState);
    
        return generateGrid(level, action);
    }
    
    export function getGrid(level) {
        return generateLevel(level);
    }
    */

    const qTable = {};

function getState(level) {
    return `level-${level}`;
}

function getActions() {
    return ['easy', 'medium', 'hard'];
}

function getReward(state, action) {
    const rewards = {
        'easy': 1,
        'medium': 2,
        'hard': 3
    };
    return rewards[action];
}

function chooseAction(state) {
    const epsilon = 0.1;
    const actions = getActions();
    if (Math.random() < epsilon) {
        return actions[Math.floor(Math.random() * actions.length)];
    } else {
        let maxQ = -Infinity;
        let chosenAction = null;
        for (const action of actions) {
            const qValue = qTable[state] ? qTable[state][action] || 0 : 0;
            if (qValue > maxQ) {
                maxQ = qValue;
                chosenAction = action;
            }
        }
        return chosenAction;
    }
}

function updateQTable(state, action, reward, nextState) {
    const alpha = 0.1;
    const gamma = 0.9;
    const qValue = qTable[state] ? qTable[state][action] || 0 : 0;
    const maxNextQ = nextState ? Math.max(...Object.values(qTable[nextState] || {})) : 0;
    qTable[state] = qTable[state] || {};
    qTable[state][action] = qValue + alpha * (reward + gamma * maxNextQ - qValue);
}

function generateGrid(level, difficulty) {
    const size = 6;
    const grid = Array.from({ length: size }, () => Array(size).fill(0));

    const numWalls = {
        'easy': Math.floor(level / 2) + 1,
        'medium': level + 2,
        'hard': level * 2 + 3
    }[difficulty];

    // Place walls randomly
    for (let i = 0; i < numWalls; i++) {
        let x, y;
        do {
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
        } while (grid[x][y] !== 0);
        grid[x][y] = 1; // Wall
    }

    // Place Pokemon at a random position
    let px, py;
    do {
        px = Math.floor(Math.random() * size);
        py = Math.floor(Math.random() * size);
    } while (grid[px][py] !== 0);
    grid[px][py] = 5;

    // Place target at a random position
    let tx, ty;
    do {
        tx = Math.floor(Math.random() * size);
        ty = Math.floor(Math.random() * size);
    } while (grid[tx][ty] !== 0);
    grid[tx][ty] = 2;

    return grid;
}

export function generateLevel(level) {
    const state = getState(level);
    const action = chooseAction(state);
    const reward = getReward(state, action);
    const nextState = getState(level + 1);

    updateQTable(state, action, reward, nextState);

    return generateGrid(level, action);
}

export function getGrid(level) {
    return generateLevel(level);
}


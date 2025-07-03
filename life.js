document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.querySelector('.hero').appendChild(canvas);
    canvas.style.zIndex = '-1';
    canvas.addEventListener("touchstart", function(e) { e.preventDefault(); }, { passive: false });
    canvas.addEventListener("touchmove", function(e) { e.preventDefault(); }, { passive: false });
    canvas.addEventListener("touchend", function(e) { e.preventDefault(); }, { passive: false });

    const params = {
        gridSize: 100,
        updateRate: 200, // milliseconds between updates
        randomSeed: 0.25,
        fastForwardSteps: 75,
        injectionInterval: 1 // steps between entropy injections
    };

    let grid = Array(params.gridSize).fill().map(() => Array(params.gridSize).fill(0));
    let stepCount = 0;

    function initializeGrid() {
        // Reset grid
        grid = Array(params.gridSize).fill().map(() => Array(params.gridSize).fill(0));
        
        // Randomly seed cells based on randomSeed percentage
        for (let y = 0; y < params.gridSize; y++) {
            for (let x = 0; x < params.gridSize; x++) {
                if (Math.random() < params.randomSeed) {
                    grid[y][x] = 1;
                }
            }
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function step() {
        const newGrid = Array(params.gridSize).fill().map(() => Array(params.gridSize).fill(0));
    
        // Conway rules with wrapping
        for (let y = 0; y < params.gridSize; y++) {
            for (let x = 0; x < params.gridSize; x++) {
                const neighbors = countNeighbors(x, y);
                const alive = grid[y][x];
                
                newGrid[y][x] = alive 
                    ? (neighbors === 2 || neighbors === 3) ? 1 : 0
                    : neighbors === 3 ? 1 : 0;
            }
        }
    
    // Minimal aesthetic entropy injection
    if (stepCount % params.injectionInterval === 0) {
        const emanators = [
            // Cross pattern (your original - confirmed emanator)
            [
                [0, 0], [0, -1], [0, 1], [-1, 0], [1, 0]
            ],
            // Glider going southeast
            [
                [0, 0], [1, 0], [2, 0], [0, 1], [1, 2]
            ],
            // Glider going southwest
            [
                [0, 0], [-1, 0], [-2, 0], [0, 1], [-1, 2]
            ],
            // Glider going northeast
            [
                [0, 0], [1, 0], [2, 0], [0, -1], [1, -2]
            ],
            // Glider going northwest
            [
                [0, 0], [-1, 0], [-2, 0], [0, -1], [-1, -2]
            ]
        ];

        // Choose edge position instead of random position
        let x, y;
        const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
        switch(edge) {
            case 0: // top edge
                x = Math.floor(Math.random() * params.gridSize);
                y = 0;
                break;
            case 1: // right edge
                x = params.gridSize - 1;
                y = Math.floor(Math.random() * params.gridSize);
                break;
            case 2: // bottom edge
                x = Math.floor(Math.random() * params.gridSize);
                y = params.gridSize - 1;
                break;
            case 3: // left edge
                x = 0;
                y = Math.floor(Math.random() * params.gridSize);
                break;
        }

        const pattern = emanators[Math.floor(Math.random() * emanators.length)];
        
        pattern.forEach(([dx, dy]) => {
            const nx = (x + dx + params.gridSize) % params.gridSize;
            const ny = (y + dy + params.gridSize) % params.gridSize;
            newGrid[ny][nx] = 1;
        });
    }
    
    grid = newGrid;
    stepCount++;
    }

    function countNeighbors(x, y) {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = (x + dx + params.gridSize) % params.gridSize;
                const ny = (y + dy + params.gridSize) % params.gridSize;
                count += grid[ny][nx];
            }
        }
        return count;
    }

    function render() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const cellSize = Math.max(canvas.width / params.gridSize, canvas.height / params.gridSize) * 1.1;
        const offsetX = (canvas.width - params.gridSize * cellSize) / 2;
        const offsetY = (canvas.height - params.gridSize * cellSize) / 2;
        
        ctx.fillStyle = '#fbfbfd';
        for (let y = 0; y < params.gridSize; y++) {
            for (let x = 0; x < params.gridSize; x++) {
                if (grid[y][x]) {
                    ctx.fillRect(
                        offsetX + x * cellSize,
                        offsetY + y * cellSize,
                        cellSize, cellSize
                    );
                }
            }
        }
    }

    // Initialize
    resize();
    initializeGrid();
    
    // Fast-forward
    for (let i = 0; i < params.fastForwardSteps; i++) step();
    
    // Run
    setInterval(() => {
        step();
        render();
    }, params.updateRate);

    window.addEventListener('resize', resize);
    window.addEventListener('touchmove', resize);
});
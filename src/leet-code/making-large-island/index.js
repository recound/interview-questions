
function getNeigbors(i, j, n) {
    return [[-1, 0], [1, 0], [0, -1], [0, 1]]
        .map(([left, right]) => [left + i, right + j])
        .filter(([i, j]) => i < n && i >= 0 && j < n && j >= 0)
}


/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const n = grid.length;
    const seen = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
    const islands = [];
    const islandMap = new Map();
    const islandNameMap = new Map();
    let maxSize = 0;

    function mapIsland(island) {
        const lenght = island.length;
        const name = Math.random() * 1000000;
        island.forEach(([i, j]) => {
            islandMap.set(`${i},${j}`, lenght);
            islandNameMap.set(`${i},${j}`, name);
        })
    }
    

    function runBfs(i, j, islandAccum) {
        islandAccum.push([i, j]);
        seen[i][j] = true;
        getNeigbors(i, j, n).map(([i1, j1]) => {
            if (seen[i1][j1]) return;
            if (grid[i1][j1] === 0) return;
            return runBfs(i1, j1, islandAccum);
        })
        return;
    }

    function findMaxIsland(i, j) {
        const islandsSeen = [];
        return getNeigbors(i, j, n).reduce((r, [i1, j1]) => {
            if (grid[i1][j1] === 0) return r;
            if (islandsSeen.includes(islandNameMap.get(`${i1},${j1}`))) return r;
            islandsSeen.push(islandNameMap.get(`${i1},${j1}`))
            return r + islandMap.get(`${i1},${j1}`);
        }, 1);
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) continue;
            if (seen[i][j]) continue;
            const islandAccum = [];
            runBfs(i, j, islandAccum);
            islands.push(islandAccum); 
            maxSize = Math.max(islandAccum.length, maxSize)
            mapIsland(islandAccum);
        }
    } 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) continue;
            if (seen[i][j]) continue;
            maxSize = Math.max(maxSize, findMaxIsland(i, j));
        }
    } 

    // console.log(seen)
    // console.log(islands)
    // console.log(maxSize)
    return maxSize; 
};

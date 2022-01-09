
/**
 * @param {char[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const memo = Array.from({ length: m }, (_, index) => [...matrix[index].map(x => parseInt(x))])
    let maxNumber = -Infinity;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const left = j - 1 >= 0 ? memo[i][j - 1] : 0;
            const top = i - 1 >= 0 ? memo[i - 1][j] : 0;
            const topleft = (i - 1) >= 0 && (j - 1) >=0 ? memo[i - 1][j - 1] : 0;
            const cellNumber = parseInt(matrix[i][j]);
            memo[i][j] = cellNumber === 0 ? 0 : Math.min(left, top, topleft) + parseInt(matrix[i][j]);
            maxNumber = Math.max(maxNumber, memo[i][j]);
        }
    }
    return maxNumber * maxNumber;
}

module.exports = {maximalSquare};
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G  -> PAHNAPLSIIGYIR
// Y   I   R



/**
 *
 * @param s{string} input string
 * @param numRows{number} dimensions
 */
var convert = function(s, numRows) {
    if (numRows < 2) return s;
    const MAIN_MATRIX = [];
    let index = 0;
    let numOfColumns = Math.floor(s.length / (numRows - 1)) + 1;
    let row = [s[0]];
    for (let i = 0; i < numOfColumns; i++) {
        row = [row[row.length - 1]];
        for (let k = 0; k < numRows - 1; k++) {
            row.push(s[(numRows - 1) * i + k + 1]);
        }
        const resultRow = [...row];
        MAIN_MATRIX.push(i % 2 === 0 ? resultRow : resultRow.reverse());
    }
    const firstRow = 0;
    const lastRow = MAIN_MATRIX[0].length - 1;
    let nextS = "";
    for (let i = firstRow; i <= lastRow; i++) {
        for (let j = 0; j < MAIN_MATRIX.length; j++) {
            if ((i === firstRow || i === lastRow) && (j % 2 === 1)) {
                continue;
            }
            if (MAIN_MATRIX[j][i]) {
                nextS = nextS.concat(MAIN_MATRIX[j][i]);
            }
        }
    }
    console.log(MAIN_MATRIX, nextS);
    return nextS;
};

module.exports = { convert }
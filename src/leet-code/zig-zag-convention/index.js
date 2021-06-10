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
    const MAIN_MATRIX = [];
    for (let i = 0; i < Math.floor(s.length / numRows - 1) + 1; i++) {
        let row = [];
        for (let k = 0; k < numRows; k++) {
            row.push(s[i*numRows + k]);
        }
    }
};
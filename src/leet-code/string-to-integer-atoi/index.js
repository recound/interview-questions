/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    const left = Math.pow(2, 31) * (-1);
    const right = Math.pow(2, 31) - 1;
    let accum = '';
    let mode = 0;
    for (const chr of s) {
        if (chr === ' ' && mode === 0 && !accum) {
            continue;
        }
        if ((chr === '+' || chr === '-') && mode === 0 && !accum) {
            chr === '+' ? mode = 1 : mode = -1;
            continue;
        }
        if (/[0-9]/.test(chr)) {
            if (mode === 0) { mode = 1 };
            accum += chr;
            continue;
        }
        break;
    }
    const parsed = parseInt(accum, 10);
    if (isNaN(parsed)) return 0;
    return Math.max(Math.min(parsed * mode, right), left) ;
};

module.exports = { myAtoi };
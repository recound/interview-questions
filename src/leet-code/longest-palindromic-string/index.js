

function longestPalindromicString(str) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    let memo = new Map();
    function rec(i, j) {
        if (i < leftIndex || i > rightIndex) return 0;
        if (memo.has(`${i},${j}`)) return memo.get(`${i},${j}`);

        if (str[i] === str[j]) {
            let nextValue = (j === i ? 1 : 2) + rec(i-1, j+1);
            memo.set(`${i},${j}`, nextValue);
            return nextValue;
        } else {
            return 0;
        }
    }
    return Math.max(...Array.from({ length: str.length }, (_, index) => {
        if (index < str.length - 2 && str[index] === str[index + 1]) {
            return Math.max(rec(index, index), rec(index, index + 1));
        } else {
            return rec(index, index);
        }
    }))
}

module.exports = {
    longestPalindromicString
}

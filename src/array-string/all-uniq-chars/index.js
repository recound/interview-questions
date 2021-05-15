// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

/**
 * Check if a string has all unique characters
 * @param {string} testString - Test string
 * @return {boolean} true if all characters uniq
 */
function hasAllUniq(testString) {
    let charDictionary = {};
    let result = true;
    if (typeof testString != 'string') {
        throw new Error('Type error: expected string argument');
    }
    for (let i = 0; i < testString.length; i++) {
        if (charDictionary[testString[i]]) {
            result = false;
            break;
        }
        charDictionary[testString[i]] = 1;
    }
    return result;
}

/**
 * Check if a string has all unique characters, without using an additional data structures
 * @param {string} testString - Test string
 * @return {boolean} true if all characters uniq
 * algorithm: iterating on string characters, test if the char exist in the rest of the string
 */
function hasAllUniqWithTwist(testString) {
    if (typeof testString != 'string') {
        throw new Error('Type error: expected string argument')
    }
    let result = true;
    for (let i = 0; i < testString.length; i++) {
        let symbol = testString[i];
        for (let k = i + 1; k < testString.length; k++) {
            if (symbol === testString[k]) {
                result = false;
                break;
            }
        }
    }
    return result;
}

module.exports = { hasAllUniq, hasAllUniqWithTwist };
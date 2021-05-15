// Given two strings, write a function that tells if one is permutation of the other.

/**
 * Return true if onee string iss permutation of the other.
 * @param stringA first string
 * @param stringB second string to compare
 * @return {boolean}
 * algorithm: iterating on first string characters: delete each char from second string,
 * if search failed, or at the end of cycle stringB is not empty: it's not a permutation
 */
function isPermutation(stringA, stringB) {
    if (typeof stringA !== 'string' || typeof stringB !== 'string') {
        throw new Error('Type error: both params should have type "string"')
    }
    let result = true;
    for (let i = 0; i < stringA.length; i++) {
        const searchIndex = stringB.indexOf(stringA[i]);
        if (searchIndex < 0) {
            result = false;
            break;
        } else {
            stringB = stringB.replace(stringA[i], '');
        }
    }
    if (stringB !== '') {
        result = false;
    }
    return result;
}

module.exports = { isPermutation };
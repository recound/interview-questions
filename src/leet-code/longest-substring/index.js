// Given a string s, find the length of the longest substring without repeating characters.
/**
 *
 * @param {string} s
 * @returns {number}
 */
function longestSubstring(s) {
    let dict = {};
    let length = 0;
    let maxLength = 0;
    let leftIndex = 0
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] !== undefined) {
            if (dict[s[i]] >= leftIndex) {
                maxLength = Math.max(length, maxLength);
                leftIndex = dict[s[i]] + 1
                length = i - leftIndex + 1;
            }
        } else {
            dict[s[i]] = i;
            length = length + 1;
        }
    }
    return Math.max(maxLength, length);
}

module.exports = { longestSubstring }
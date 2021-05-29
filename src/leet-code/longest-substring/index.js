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
                dict[s[i]] = i;
            } else {
                length = length + 1;
                dict[s[i]] = i;
                maxLength = Math.max(length, maxLength)
            }
        } else {
            dict[s[i]] = i;
            length = length + 1;
            maxLength = Math.max(length, maxLength);
        }
    }
    return Math.max(maxLength, length);
}

module.exports = { longestSubstring }
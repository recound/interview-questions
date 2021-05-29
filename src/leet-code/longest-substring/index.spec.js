const { longestSubstring } = require('./index')

describe('Longest substring tests', () => {
    it('General cases', () => {
        expect(longestSubstring("abcabcbb")).toBe(3)
        expect(longestSubstring("bbbbbbbb")).toBe(1)
        expect(longestSubstring("pwwkew")).toBe(3)
        expect(longestSubstring("")).toBe(0)
        expect(longestSubstring(" ")).toBe(1)
        expect(longestSubstring("dvdf")).toBe(3)
        expect(longestSubstring("asljlj")).toBe(4)
        expect(longestSubstring("tmmzuxt")).toBe(5)
    })
})
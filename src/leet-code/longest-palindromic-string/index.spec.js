const { longestPalindromicString } = require('./index')

describe('Longest substring tests', () => {
    it('General cases', () => {
        expect(longestPalindromicString("abcb")).toBe(3)
        expect(longestPalindromicString("abcba")).toBe(5)
        expect(longestPalindromicString("abcdeedcaaaa")).toBe(6)
    })
    it('Super long cases', () => {
        expect(longestPalindromicString("abcdeffedcbaabcdeffedcbaabcdeffedcbaabcdeffedcbaabcdeffedcba")).toBe(60)
    })
})

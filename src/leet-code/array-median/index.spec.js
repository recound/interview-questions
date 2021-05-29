const { findMedianSortedArrays } = require('./index')

describe('tests', () => {
    it('General cases', () => {
        expect(findMedianSortedArrays([1,3], [2])).toBe(2)
    })
})
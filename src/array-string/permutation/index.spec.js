const { isPermutation } = require('./index');

describe(`Tests for isPermutation`, () => {
    it('General test cases', () => {
        expect(isPermutation('asd', 'ads')).toBe(true);
        expect(isPermutation('asdfg', 'gasfd')).toBe(true);
        expect(isPermutation('asdfgh', 'asdfgha')).toBe(false);
        expect(isPermutation('asdasdasd', 'asdasd')).toBe(false);
    })
})
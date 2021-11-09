const { convert } = require('./index');

describe('Zig-zag convention test', () => {
    it('General cases', () => {
        expect(convert('0', 1)).toBe('0')
        expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
        expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    })
})
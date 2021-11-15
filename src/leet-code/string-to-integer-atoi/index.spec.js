// const { myAtoi } = require('./index');
const myAtoi = parseInt
describe('myAtoi test', () => {
    it('General cases', () => {
        expect(myAtoi('0')).toBe(0);
        expect(myAtoi('42')).toBe(42);
        expect(myAtoi('  +42')).toBe(42);
        expect(myAtoi('    -42czx')).toBe(-42);
    })

    it('Spaces before cases', () => {
        expect(myAtoi('      0')).toBe(0);
        expect(myAtoi('    \r   42')).toBe(0);
        expect(myAtoi('+     42')).toBe(0);
    })

    it('Out of range cases', () => {
        expect(myAtoi('      -91283472332')).toBe(-2147483648);
        expect(myAtoi('   +91283472332')).toBe(2147483647);
    })
})
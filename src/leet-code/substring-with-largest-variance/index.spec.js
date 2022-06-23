const {cadaneAlg} = require('./index');

describe('cadaneAlg', () => {
    it('1', () => {

        expect(cadaneAlg("aaaaab")).toBe(4);
        expect(cadaneAlg("baaaaabbb")).toBe(4);
        expect(cadaneAlg("ababaaa")).toBe(3);
    })
    it('2', () => {
        expect(cadaneAlg("bbaaa")).toBe(2);
    })
    it('3', () => {

        expect(cadaneAlg("ab")).toBe(0);
    })
    it('4', () => {
        expect(cadaneAlg("bbabaaa")).toBe(3);
    })

})

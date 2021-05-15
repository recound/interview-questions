const { hasAllUniq, hasAllUniqWithTwist } = require('./index');

describe('hasAllUniq tests', () => {
    it('Definition tests', () => {
        expect(hasAllUniq).toBeDefined();
    })

    it('General test cases', () => {
        expect(hasAllUniq("aaaa")).toBe(false);
        expect(hasAllUniq("abs")).toBe(true);
        expect(hasAllUniq("abcс")).toBe(true);
        expect(hasAllUniq("1!№%:,.;())")).toBe(false);
    })

    it('Edge cases', () => {
        expect(hasAllUniq("")).toBe(true);
        expect(hasAllUniq).toThrowError(/Type error/)
        try {
            hasAllUniq({}/* not a string */)
        } catch (e) {
            expect(e.message).toBe("Type error: expected string argument")
        }
    })
})

describe('hasAllUniqWithTwist tests', () => {
    it('General test cases', () => {
        expect(hasAllUniqWithTwist("aaaa")).toBe(false);
        expect(hasAllUniqWithTwist("abs")).toBe(true);
        expect(hasAllUniqWithTwist("abcс")).toBe(true);
        expect(hasAllUniqWithTwist("1!№%:,.;())")).toBe(false);
    })
    it('Edge cases', () => {
        expect(hasAllUniqWithTwist("")).toBe(true);
        expect(hasAllUniqWithTwist).toThrowError(/Type error/)
        try {
            hasAllUniqWithTwist({}/* not a string */)
        } catch (e) {
            expect(e.message).toBe("Type error: expected string argument")
        }
    })
})
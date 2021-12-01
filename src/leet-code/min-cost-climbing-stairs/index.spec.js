const {minCostClimbingStairs} = require('./index');
describe('minCostClimbingStairs Test', () =>{
    it('Basic test cases', () => {
        // expect(minCostClimbingStairs([])).toBe(0);
        // expect(minCostClimbingStairs([1])).toBe(1);
        // expect(minCostClimbingStairs([1, 2])).toBe(1);
        expect(minCostClimbingStairs([1, 2, 3])).toBe(2);
    })
})